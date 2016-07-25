// Load required packages
var pg = require('pg');
var _ = require('lodash-node');
var connections = require('../config/connections');

pg.defaults.ssl = true;

exports.find=function(params,response){
    //Connect to database postgresql
    pg.connect(connections.pgsql, function(err, client,done) {
        var handleError = function(err) {
          // no error occurred, continue with the request
          if(!err) {
            return false;
          }
          if(client){ //
            done(client);//remove client from pool
          }
          console.log('An error occurred');
          return true;
        };

        // handle an error from the connection
        if(handleError(err)) {
            console.log('models-->handleError=true');
            response(err,null);
        }
        //make sql where clausule
        var sWhere='';
        var i=0;
        var aValues=[];
        for(var p in params){
            i++;
            if(sWhere==''){
                sWhere=p+'=$'+i;
            }else{
                sWhere= 'AND ' +p+'=$'+i;
            }
            aValues.push(params[p]);
        }
        
        if(sWhere!='') sWhere = ' WHERE '+sWhere;
        client.query('SELECT id,name,description,id_page FROM mobiletrck.campaigns'+sWhere, aValues, function(err, result) {
              // handle an error from the query
              if(handleError(err)) {
                    response(err,null);
              }else if(typeof result=='undefined'){
                response(null,false);
             }else{
                response(null,result.rows);
             }
             done();//to release the client back to the pool
        });
    
    });
}

exports.findOne=function(params,response){
    //Connect to database postgresql
    pg.connect(connections.pgsql, function(err, client,done) {
        var handleError = function(err) {
          // no error occurred, continue with the request
          if(!err) {
            return false;
          }
          if(client){ //
            done(client);//remove client from pool
          }
          console.log('An error occurred');
          return true;
        };

        // handle an error from the connection
        if(handleError(err)) {
            console.log('models-->handleError=true');
            response(err,null);
        }
        //make sql where clausule
        var sWhere='';
        var i=0;
        var aValues=[];
        for(var p in params){
            i++;
            if(sWhere==''){
                sWhere=p+'=$'+i;
            }else{
                sWhere= 'AND ' +p+'=$'+i;
            }
            aValues.push(params[p]);
        }
        
        if(sWhere!='') sWhere = ' WHERE '+sWhere;
        client.query('SELECT id,name,description,id_page FROM mobiletrck.campaigns'+sWhere, aValues, function(err, result) {
              // handle an error from the query
              if(handleError(err)) {
                    response(err,null);
              }else if(typeof result=='undefined'){
                response(null,false);
             }else{
                response(null,result.rows[0]);
             }
             done();//to release the client back to the pool
        });
    
    });
}

exports.findById=function(params,response){
    //Connect to database postgresql
    pg.connect(connections.pgsql, function(err, client,done) {
        var handleError = function(err) {
          // no error occurred, continue with the request
          if(!err) {
            return false;
          }
          if(client){ //
            done(client);//remove client from pool
          }
          console.log('An error occurred');
          return true;
        };

        // handle an error from the connection
        if(handleError(err)) {
            console.log('models-->handleError=true');
            response(err,null);
        }
        client.query('SELECT id,name,description,img_bg,img_qr,img_logo,custom_qr_svg,custom_qr_json,id_page,id_user FROM mobiletrck.campaigns WHERE id=$1 AND id_user=$2', [params.id_campaign,params.id_user], function(err, result) {
           // handle an error from the query
              if(handleError(err)) {
                    response(err,null);
                    
              }else if(typeof result=='undefined'){
                response(null,false);
             }else{
                response(null,result.rows[0]);
             }
              done();//to release the client back to the pool
        });
    });
}

exports.save=function(oCampaign,response){
    var campaign = _.clone(oCampaign);
    //Connect to database postgresql
    pg.connect(connections.pgsql, function(err, client,done) {
        var handleError = function(err) {
          // no error occurred, continue with the request
          if(!err) {
            return false;
          }
          if(client){ //
            done(client);//remove client from pool
          }
          console.log('An error occurred');
          return true;
        };

        // handle an error from the connection
        if(handleError(err)) {
            console.log('models-->handleError=true');
            response(err,null);
        }
        
        var sFields='';
        var sFieldsSubt='';

        var i=0;
        var aValues=[];
        
        delete campaign.id;
        
        for(var p in campaign){
            i++;
            if(sFields==''){
                sFields=p;
                sFieldsSubt='$'+i;
            }else{
                sFields+= ' ,' +p;
                sFieldsSubt+=' ,$'+i;
            }
            aValues.push(campaign[p]);
        }
        
        client.query('INSERT INTO mobiletrck.campaigns ('+ sFields+') VALUES('+sFieldsSubt+') RETURNING id', aValues, function(err, result) {
        
        //client.query('INSERT INTO mobiletrck.campaigns (name, description,id_user) VALUES($1, $2, $3) RETURNING id', [campaign.name, campaign.description,campaign.id_user], function(err, result) {
           // handle an error from the query
          if(handleError(err)) 
                response(err,null);
          
          
          response(null,result.rows[0]);
          done();//to release the client back to the pool
        });
      
    });

}

exports.update=function(oCampaign,response){
    var campaign = _.clone(oCampaign);
    //Connect to database postgresql
   pg.connect(connections.pgsql, function(err, client,done) {
        var handleError = function(err) {
          // no error occurred, continue with the request
          if(!err) {
            return false;
          }
          if(client){ //
            done(client);//remove client from pool
          }
          console.log('An error occurred');
          return true;
        };

        // handle an error from the connection
        if(handleError(err)) {
            response(err,null);
        }
        
        var sFields='';
        var sFieldsSubt='';

        var i=1;
        var aValues=[];
        
        //atribute id first value for substition params
        aValues.push(campaign['id']);
        delete campaign.id;
        
        for(var p in campaign){
            i++;
            if(sFields==''){
                sFields=p+'=$'+i;
            }else{
                sFields+= ' ,' +p+'=$'+i;
            }
            aValues.push(campaign[p]);
        }
        
        
        client.query('UPDATE mobiletrck.campaigns SET '+sFields+'  WHERE id=$1', aValues, function(err, result) {
        //client.query('UPDATE mobiletrck.campaigns SET name=$1, description=$2 WHERE id=$3 AND id_user=$4', [campaign.name, campaign.description,campaign.id,campaign.id_user], function(err, result) {
           // handle an error from the query
          if(handleError(err)) 
                response(err,null);
                
          
          response(null,result.rowCount);
          done();//to release the client back to the pool
          
        });
    });

}

exports.remove=function(params,response){
      //Connect to database postgresql
    pg.connect(connections.pgsql, function(err, client,done) {
        var handleError = function(err) {
          // no error occurred, continue with the request
          if(!err) {
            return false;
          }
          if(client){ //
            done(client);//remove client from pool
          }
          console.log('An error occurred');
          return true;
        };

        // handle an error from the connection
        if(handleError(err)) {
            console.log('models-->handleError=true');
            response(err,null);
        }
        
        client.query('DELETE FROM mobiletrck.campaigns WHERE id=$1 AND id_user=$2', [params.id,params.id_user], function(err, result) {
           // handle an error from the query
              if(handleError(err)) {
                    response(err,null);
                    
              }else if(typeof result=='undefined'){
                response(null,false);
             }else{
                response(null,true);
             }
              done();//to release the client back to the pool
        });
      
    });
 
}
