// Load required packages
var pg = require('pg');
var _ = require('lodash-node');
var connections = require('../config/connections');

pg.defaults.ssl = true;


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
        //prepare clausule where
        var sWhere='';
        var i=0;
        var aValues=[];
        for(var p in params){
            i++;
            sWhere=p+'=$'+i;
            aValues.push(params[p]);
        }
        
        if(sWhere!='') sWhere = ' WHERE '+sWhere;
        
        client.query('SELECT * FROM mobiletrck.visits'+sWhere, aValues, function(err, result) {
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

exports.findById=function(id,response){
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
        
        client.query('SELECT * FROM mobiletrck.visits WHERE id=$1', [id], function(err, result) {
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
            response(err,null);
        }
        
        var sWhere='';
        var i=0;
        var aValues=[];
        for(var p in params){
            i++;
            if(sWhere==''){
                sWhere=p+'=$'+i;
            }else{
                sWhere+= ' AND ' +p+'=$'+i;
            }
            aValues.push(params[p]);
        }
        if(sWhere!='') sWhere = ' WHERE '+sWhere;
        
        client.query('SELECT * FROM mobiletrck.visits'+sWhere, aValues, function(err, result) {
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

exports.save=function(oVisit,response){
    var visit = _.clone(oVisit);
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
          console.log('An error occurred:'+JSON.stringify(err));
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
        
        for(var p in visit){
            i++;
            if(sFields==''){
                sFields=p;
                sFieldsSubt='$'+i;
            }else{
                sFields+= ' ,' +p;
                sFieldsSubt+=' ,$'+i;
            }
            aValues.push(visit[p]);
        }
        
        client.query('INSERT INTO mobiletrck.visits ('+ sFields+') VALUES('+sFieldsSubt+') RETURNING id', aValues, function(err, result) {
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

exports.update=function(oVisit,response){
    var visit = _.clone(oVisit);
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

        var i=1;
        var aValues=[];
        
        //atribute id first value for substition params
        aValues.push(visit['id']);
        delete user.id;
        
        for(var p in visit){
            i++;
            if(sFields==''){
                sFields=p+'=$'+i;
            }else{
                sFields+= ' ,' +p+'=$'+i;
            }
            aValues.push(visit[p]);
        }
        
        
        client.query('UPDATE mobiletrck.visits SET '+sFields+'  WHERE id=$1', aValues, function(err, result) {
           // handle an error from the query
          if(handleError(err)) 
                response(err,null);
          
          response(null,result.rowCount);
          done();//to release the client back to the pool
        });
    });
}

exports.removeById=function(params,response){
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
        
        client.query('DELETE mobiletrck.visits WHERE id=$1', [params.id], function(err, result) {
           // handle an error from the query
          if(handleError(err)) 
                response(err,null);
          
          response(null,result.rows[0]);
          done();//to release the client back to the pool
        });
    });
}





