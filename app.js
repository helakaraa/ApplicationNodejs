var express= require('express'),
    path=require('path'),
    bodyParser = require('body-parser'),
    cons= require('consolidate'),
    dust= require('dustjs-helpers'),
    pg=require('pg'),
    app=express();


const config = {
    user: 'username',
    database: 'name_database',
    password: 'password',
    port: 5432
};
//Asign Dust Engine to .dust Files
app.engine('dust',cons.dust)

//Set Default Ext .dust
app.set('view engine','dust');
app.set('views',__dirname+'/views');

//Set Public Folder
app.use(express.static(path.join(__dirname,'public')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
var pool = new pg.Pool(config);

//get the list of contacts

app.get('/',function(req,res)
{   
    pool.connect(function(err,client,done) { 

    	if(err)
         {
         	return console.log('error fetching client from pool',err)

         }

        client.query('SELECT * FROM famous_people',function(err,result){
        	

        	if(err){
        		return console.error('error running query',err)
        	}
         	 
         	 console.log("done")
         	 //console.log(result.rows) // one
         	 res.render('index',{famous_people:result.rows})
        });   	

    });
});

//add any new contact to the list
app.post('/add',function(req,res)
{   
    pool.connect(function(err,client,done) { 

    	if(err)
         {
         	return console.log('error fetching client from pool',err)

         }

        client.query("INSERT INTO famous_people(first_name,last_name) VALUES ($1,$2)",[req.body.first_name,req.body.last_name]);
        
          done();
          res.redirect('/');
        });   	

   
});

//delete a contact from the list
app.delete('/delete/:id',function(req,res){

 pool.connect(function(err,client,done) { 

        if(err)
         {
            return console.log('error fetching client from pool',err)

         }

        client.query("DELETE FROM famous_people WHERE id=$1",[req.params.id]);
        
          done();
          res.send(200);
        });     
});

//edit any contact
app.post('/edit',function(req,res){

 pool.connect(function(err,client,done) { 

        if(err)
         {
            return console.log('error fetching client from pool',err)

         }
       
        client.query("UPDATE famous_people SET first_name=$1, last_name=$2 WHERE id=$3",[req.body.first_name, req.body.last_name, req.body.id]);
         
          done();
          res.redirect('/');
        });    


});

//Server
app.listen(3000,function()
{

 console.log('Server Started on Port 3000');

});
