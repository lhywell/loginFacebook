This project is use nodejs,mongo,and react to create a web application that allows a user to login to the Facebook application and post an article with a comment. The web app show a list of all the posts that were sent through the Facebook app.

In development, you need to embed a piece of code. This code loads and initializes the Javascript SDK. You must replace the value in your-app-id with the number of your Facebook open platform application. You can find this number through the application panel.

Facebook need support HTTPS protocol,congfig in the system environment variables,HTTPS=TRUE，PORT=443,React can read about these configured environment variables.

[img](https://raw.githubusercontent.com/lhywell/loginFacebook/master/facebook.gif)

### Startup mongo
```bash
./bin/mongod --dbpath=fbook
./bin/mongo
```

### Startup server
run under the 'server' directory 
```bash
npm run server
```

### Start client
run under the root directory 
```bash
npm install
npm start
```
open https://localhost:444/

### Interface

domain:localhost:4000

* Query article list

GET

/list

* Add the article

POST

/list/add