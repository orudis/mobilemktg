// Load required packages
var pg = require('pg');
var _ = require('lodash-node');
var connections = require('../config/connections');
var bcrypt = require('bcrypt-nodejs');

pg.defaults.ssl = true;

//==============================================================================
// find accounts 
//==============================================================================
exports.findAccounts=function(response){
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
        
        client.query('SELECT * FROM mobiletrck.users WHERE id_user IS NULL', [], function(err, result) {
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

//==============================================================================
// find associated users to the account 
//==============================================================================
exports.findUsersAccount=function(id,response){
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
        
        client.query('SELECT * FROM mobiletrck.users WHERE id_user=$1', [id], function(err, result) {
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

//==============================================================================
// save user associated to the account 
//==============================================================================



//==============================================================================
// find one user that meets the search criteria
//==============================================================================
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
        
        client.query('SELECT * FROM mobiletrck.users'+sWhere, aValues, function(err, result) {
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
        
        client.query('SELECT * FROM mobiletrck.users WHERE id=$1', [id], function(err, result) {
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
        
        client.query('SELECT * FROM mobiletrck.users'+sWhere, aValues, function(err, result) {
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

exports.save=function(oUser,response){
    var user = _.clone(oUser);
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
        
        for(var p in user){
            i++;
            if(sFields==''){
                sFields=p;
                sFieldsSubt='$'+i;
            }else{
                sFields+= ' ,' +p;
                sFieldsSubt+=' ,$'+i;
            }
            aValues.push(user[p]);
        }
        
        client.query('INSERT INTO mobiletrck.users ('+ sFields+') VALUES('+sFieldsSubt+') RETURNING id', aValues, function(err, result) {
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

exports.update=function(oUser,response){
    var user = _.clone(oUser);
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
        aValues.push(user['id']);
        delete user.id;
        
        for(var p in user){
            i++;
            if(sFields==''){
                sFields=p+'=$'+i;
            }else{
                sFields+= ' ,' +p+'=$'+i;
            }
            aValues.push(user[p]);
        }
        
        
        client.query('UPDATE mobiletrck.users SET '+sFields+'  WHERE id=$1', aValues, function(err, result) {
            console.log('models-->mobilepage.update-->result:'+JSON.stringify(result));
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
        
        client.query('DELETE mobiletrck.users WHERE id=$1', [params.id], function(err, result) {
           // handle an error from the query
          if(handleError(err)) 
                response(err,null);
          
          
          response(null,result.rows[0]);
          done();//to release the client back to the pool
        });
    });
}






exports.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

exports.validPassword = function(password,password2) {
    return bcrypt.compareSync(password, password2);
};


