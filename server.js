var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
    'article-one':{
        title:'Article One Sree',
        heading:'Article One',
        date:'Feb 8,2016',
        content:`
                  <p>
                      This is the content for my first article.Adding a few more 
                       content to my paragraph.Typing and typing nothing important just 
                       for the sake of a few sentences.
                  </p>
                  <p>
                    Have to keep on tying anything at all....Adding few more paragraphs.
                    Creating an html file.Learning to create a web app.This is week 2
                     module P4.
                   </p>
                   <p>
                       Again typing and typing.Nothing specific but random stuff,seems
                       fun.After all words are always fun aren't they??
                   </p>`
    },
    'article-two':{
        title:'Article Two Sree',
    heading:'Article Two',
    date:'Feb 11,2016',
    content:`
                  <p>
                      This is the content for my second article.Adding a few more 
                       content to my paragraph.Typing and typing nothing important just 
                       for the sake of a few sentences.
                  </p>
                   <p>
                       Again typing and typing.Nothing specific but random stuff,seems
                       fun.After all words are always fun aren't they??
                   </p>`
    },
    'article-three':{
        title:'Article Three Sree',
        heading:'Article Three',
        date:'Feb 11,2016',
        content:`
                  <p>
                      This is the content for my third article.
                  </p>
                  <p>
                    Learning to create a web app.This is week 2 module P4.
                   </p>`
                   
    }
    };


function createTemplate (data){
    var title=data.title;
    var date= data.date;
    var heading= data.heading;
    var content=data.content;
    
    var htmlTemplate=`
    <html>
        <head>
          <title>
            ${title}
          </title>
          <meta name="viewport" content="width=device-width,inital-scale=1"/>
          <link href="/ui/style.css" rel="stylesheet" />
        </head>
      <body>
        <div class="container">
             <div>
                 <a href="/">Home</a>
             </div>
             <hr/>
             <h3>
                 ${heading}
             </h3>
             <div>
                  ${date}
             </div>
             <div>
                  ${content}
              </div>
        </div>
      </body>
    </html>
`;
return htmlTemplate;
}






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
    
});
app.get('/:articleName',function(req,res){
    //articleName==article-one
    //articles[articleName]=={} content object for article one
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
