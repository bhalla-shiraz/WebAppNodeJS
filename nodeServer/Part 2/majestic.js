var express = require('express');
var oracledb = require('oracledb');
var bodyParser = require('body-parser');
var mustachex = require('mustachex');
var app = express();

app.engine('html', mustachex.express);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/domain/no_index', function(req, res) {
  res.render('domain.html');
});

app.get('/domain/index1', function(req, res) {
  res.render('domainIdx1.html');
});

app.get('/domain/index2', function(req, res) {
  res.render('domainIdx2.html');
});

app.get('/domain/index3', function(req, res) {
  res.render('domainIdx3.html');
});

app.post('/searchDomNoindex', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Globalrank FROM MAJESTIC where domain = '"+domain+"'";
 oracledb.getConnection(
    {  user          : "sxb154530",
       password      : "apple123",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
        console.error(err);
        res.render('error',
          {
      message: err.message
    }
              );
        
     }
           else {
       if (result.rows.length >0) {
         res.render('result', 
         {
                 rank: result.rows[0][0]
               }
               );
             }
       else {
               res.render('error',
               {
                  message: "No such domain"

               }
               );
             }  
     }
        }
      );
    }
  );
});

app.post('/searchDomIndex1', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Globalrank FROM MAJESTIC_INDEX1 where domain = '"+domain+"'";
 oracledb.getConnection(
    {  user          : "sxb154530",
       password      : "apple123",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
        console.error(err);
        res.render('error_index1',
          {
      message: err.message
    }
              );
        
     }
           else {
       if (result.rows.length >0) {
         res.render('result_index1', 
         {
                 rank: result.rows[0][0]
               }
               );
             }
       else {
               res.render('error_index1',
               {
                  message: "No such domain"

               }
               );
             }  
     }
        }
      );
    }
  );
});

app.post('/searchDomIndex2', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Globalrank FROM MAJESTIC_INDEX2 where domain = '"+domain+"'";
 oracledb.getConnection(
    {  user          : "sxb154530",
       password      : "apple123",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
        console.error(err);
        res.render('error_index2',
          {
      message: err.message
    }
              );
        
     }
           else {
       if (result.rows.length >0) {
         res.render('result_index2', 
         {
                 rank: result.rows[0][0]
               }
               );
             }
       else {
               res.render('error_index2',
               {
                  message: "No such domain"

               }
               );
             }  
     }
        }
      );
    }
  );
});

app.post('/searchDomIndex3', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT Globalrank FROM MAJESTIC_INDEX3 where domain = '"+domain+"'";
 oracledb.getConnection(
    {  user          : "sxb154530",
       password      : "apple123",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {
      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
        console.error(err);
        res.render('error_index3',
          {
      message: err.message
    }
              );
        
     }
           else {
       if (result.rows.length >0) {
         res.render('result_index3', 
         {
                 rank: result.rows[0][0]
               }
               );
             }
       else {
               res.render('error_index3',
               {
                  message: "No such domain"

               }
               );
             }  
     }
        }
      );
    }
  );
});

app.get('/tld/no_index', function(req, res) {
  res.render('tld.html');
});

app.get('/tld/index1', function(req, res) {
  res.render('tldIndex1.html');
});

app.get('/tld/index2', function(req, res) {
  res.render('tldIndex2.html');
});

app.get('/tld/index3', function(req, res) {
  res.render('tldIndex3.html');
});

app.post('/searchtldNoIndex', function(req, res) {
  
 var tld = req.body.tld;
 var sql_statement =  "SELECT Globalrank,Domain FROM MAJESTIC where TLD ='"+tld+"'";
 oracledb.getConnection(
    {  user          : "sxb154530",
       password      : "apple123",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {

      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
        console.error(err);
        res.render('error',
          {
      message: err.message
    }
              );
        
     }
           else {
       if (result.rows.length >0) {
         iteration = 0;
       
            var array = [];
        while(iteration < result.rows.length){
          var displayer = "";
          displayer = displayer.concat(" Global rank : ",result.rows[iteration][0]," ")
          displayer = displayer.concat(" Domain      : ",result.rows[iteration][1]," ")
          array.push(displayer);
          iteration++;
        }
         res.render('resultTld', 
         {
           rank: array 

          //  rank : function(){ for (val of array) 
         // return val;}
         
                       
        }
               );
             }
       else {
               res.render('errorTld',
               {
                  message: "No such TLD"

               }
               );
             }  
     }
        }
      );
    }
  );
});

app.post('/searchtldIndex1', function(req, res) {
  
 var tld = req.body.tld;
 var sql_statement =  "SELECT Globalrank,Domain FROM MAJESTIC_INDEX1 where TLD ='"+tld+"'";
 oracledb.getConnection(
    {  user          : "sxb154530",
       password      : "apple123",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {

      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
        console.error(err);
        res.render('error',
          {
      message: err.message
    }
              );
        
     }
           else {
       if (result.rows.length >0) {
         iteration = 0;
       
            var array = [];
        while(iteration < result.rows.length){
          var displayer = "";
          displayer = displayer.concat(" Global rank : ",result.rows[iteration][0]," ")
          displayer = displayer.concat(" Domain      : ",result.rows[iteration][1]," ")
          array.push(displayer);
          iteration++;
        }
         res.render('resultTld_idx1', 
         {
           rank: array 

          //  rank : function(){ for (val of array) 
         // return val;}
         
                       
        }
               );
             }
       else {
               res.render('errorTld_idx1',
               {
                  message: "No such TLD"

               }
               );
             }  
     }
        }
      );
    }
  );
});

app.post('/searchtldIndex2', function(req, res) {
  
 var tld = req.body.tld;
 var sql_statement =  "SELECT Globalrank,Domain FROM MAJESTIC_INDEX2 where TLD ='"+tld+"'";
 oracledb.getConnection(
    {  user          : "sxb154530",
       password      : "apple123",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {

      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
        console.error(err);
        res.render('error',
          {
      message: err.message
    }
              );
        
     }
           else {
       if (result.rows.length >0) {
         iteration = 0;
       
            var array = [];
        while(iteration < result.rows.length){
          var displayer = "";
          displayer = displayer.concat(" Global rank : ",result.rows[iteration][0]," ")
          displayer = displayer.concat(" Domain      : ",result.rows[iteration][1]," ")
          array.push(displayer);
          iteration++;
        }
         res.render('resultTld_idx2', 
         {
           rank: array 

          //  rank : function(){ for (val of array) 
         // return val;}
         
                       
        }
               );
             }
       else {
               res.render('errorTld_idx2',
               {
                  message: "No such TLD"

               }
               );
             }  
     }
        }
      );
    }
  );
});

app.post('/searchtldIndex3', function(req, res) {
  
 var tld = req.body.tld;
 var sql_statement =  "SELECT Globalrank,Domain FROM MAJESTIC_INDEX3 where TLD ='"+tld+"'";
 oracledb.getConnection(
    {  user          : "sxb154530",
       password      : "apple123",
       connectString : "csoracle.utdallas.edu/student.csoracle.utdallas.edu"
    },
    function(err, connection)
    {

      if (err) { 
         console.error(err); return;
       }
      connection.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
        console.error(err);
        res.render('error',
          {
      message: err.message
    }
              );
        
     }
           else {
       if (result.rows.length >0) {
         iteration = 0;
       
            var array = [];
        while(iteration < result.rows.length){
          var displayer = "";
          displayer = displayer.concat(" Global rank : ",result.rows[iteration][0]," ")
          displayer = displayer.concat(" Domain      : ",result.rows[iteration][1]," ")
          array.push(displayer);
          iteration++;
        }
         res.render('resultTld_index3', 
         {
           rank: array 

          //  rank : function(){ for (val of array) 
         // return val;}
         
                       
        }
               );
             }
       else {
               res.render('errorTld_index3',
               {
                  message: "No such TLD"

               }
               );
             }  
     }
        }
      );
    }
  );
});


var server = app.listen(7963, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})