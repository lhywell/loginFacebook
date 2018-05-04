This project is use nodejs,mongo,and react to create a web application that allows a user to login to the Facebook application and post an article with a comment. The web app show a list of all the posts that were sent through the Facebook app.

In development, you need to embed a piece of code. This code will load and initialize the SDK. You must replace the value in your-app-id with the ID of your own Facebook App. You can find this ID using the [App Dashboard](https://developers.facebook.com/apps).

Facebook need support HTTPS protocol,congfig in the system environment variables,HTTPS=TRUE，PORT=443,React can read about these configured environment variables.

![img](https://raw.githubusercontent.com/lhywell/loginFacebook/master/facebook.gif)

### Installation environment
1. node V8.9.4
2. mongo V3.4.10
3. react V16.3.2

### About login
Facebook OpenID OAuth

### Startup Mongo
```bash
//new a named fbook package，startup mongo server
./bin/mongod --dbpath=fbook

//startup mongo client
./bin/mongo
```

### Startup Node server
```bash
npm run server
```
### Interface
Below is the interface that the backend provides to the front end.

domain:localhost:4000

* Query article list

GET

/list

* Add the article

POST

/list/add

### Start client
run under the root directory 
```bash
//install packages
npm install

//startup React
npm start
```
open https://localhost:444/

