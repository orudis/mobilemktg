// Load required packages
var pg = require('pg');
var _ = require('lodash-node');
var connections = require('../config/connections');

pg.defaults.ssl = true;

exports.remove=function(mobilepage,response){
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
        
        client.query('DELETE FROM mobiletrck.mobilepages WHERE id=$1', [mobilepage.id], function(err, result) {
           // handle an error from the query
          if(handleError(err)) 
                response(err,null);
          
          response(null,result.rows[0]);
          done();//to release the client back to the pool
        });
      
    });
}


exports.update=function(oMobilepage,response){
    var mobilepage = _.clone(oMobilepage);
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
        aValues.push(mobilepage['id']);
        delete mobilepage.id;
        
        for(var p in mobilepage){
            i++;
            if(sFields==''){
                sFields=p+'=$'+i;
            }else{
                sFields+= ' ,' +p+'=$'+i;
            }
            aValues.push(mobilepage[p]);
        }
        
        
        client.query('UPDATE mobiletrck.mobilepages SET '+sFields+'  WHERE id=$1', aValues, function(err, result) {
        
        //client.query('UPDATE mobiletrck.mobilepage SET name=$1, description=$2, html=$3  WHERE id=$4', [mobilepage.name, mobilepage.description, mobilepage.html ,mobilepage.id], function(err, result) {
           // handle an error from the query
          if(handleError(err)) 
                response(err,null);
          
          response(null,result.rowCount);
          done();//to release the client back to the pool
        });
    });
}

exports.save=function(oMobilepage,response){
    var mobilepage = _.clone(oMobilepage);
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
        
        for(var p in mobilepage){
            i++;
            if(sFields==''){
                sFields=p;
                sFieldsSubt='$'+i;
            }else{
                sFields+= ' ,' +p;
                sFieldsSubt+=' ,$'+i;
            }
            aValues.push(mobilepage[p]);
        }
        
        client.query('INSERT INTO mobiletrck.mobilepages ('+ sFields+') VALUES('+sFieldsSubt+') RETURNING id', aValues, function(err, result) {
        //client.query('INSERT INTO mobiletrck.mobilepage (name, description,html) VALUES($1, $2, $3 ) RETURNING id', [mobilepage.name, mobilepage.description,mobilepage.html], function(err, result) {
            console.log('models-->client.query-->result:'+result);
           // handle an error from the query
          if(handleError(err)) 
                response(err,null);
          
          
          response(null,result.rows[0]);
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
            console.log('models-->handleError=true');
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
        
        client.query('SELECT * FROM mobiletrck.mobilepages'+sWhere, aValues, function(err, result) {
        
        //client.query('SELECT id,name,description,html FROM mobiletrck.mobilepage;', function(err, result) {
            console.log('models-->client.query-->result:'+result);
           // handle an error from the query
          if(handleError(err)) 
                response(err,null);
          
          
          response(null,result.rows);
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
        
        client.query('SELECT id,name,description,html,id_user FROM mobiletrck.mobilepages WHERE id=$1', [params.id], function(err, result) {
           // handle an error from the query
          if(handleError(err)) 
                response(err,null);
          
          
          response(null,result.rows[0]);
          done();//to release the client back to the pool
        });
      
    });
}


