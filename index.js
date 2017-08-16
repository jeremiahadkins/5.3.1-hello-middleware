const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// req = request
// res = response
// next = next or break/pass through


// middleware
app.use((req, res, next) => {
  console.log('we hit the middleware');
  next();
});


app.get('/', (req, res) => {
  // setting page title on route
  res.render('index', {title: "My Index Page"});
})


app.listen(3000);
