# ApplicationNodejs
Simple test application for adding, deleting and modifying a list of famous people  using postgres and nodejs.

After you clone the project,

1.you connect the project to your postgresql database you change into the app.js file by adding your username and the name of your database as well as the password that you use to connect to your database:
```
const config = {
    user: 'username',
    database: 'Database_name',
    password: 'password',
    port: 5432
};
```
2.you install npm 
```
npm install 
```
3.you run the application and the server will start on Port 3000
```
node app
```
