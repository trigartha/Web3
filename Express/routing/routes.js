const express = require ('express');
const router = express.Router()
const bodyParser = require('body-parser');

// create application/json parser
const jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//home page
router.get('/', (req, res)=>{
    res.send("<p>Home Page</p>");
    //res.end();
});
// test page
router.route('/test')
    .get((req, res)=> {
        res.send("<p>Test Page</p>");
    })
    .post( jsonParser,(req, res)=>{
        req.body.server=true;
        res.json(req.body);
    })
// Id
router.get('/test/:id([0-9]{3})', (req, res)=>{
    res.send(`<p>ID: ${req.params.id}</p>`);
});
//Search element
router.get('/search', (req, res)=>{
    //Holds value of the query param 'q'.
    let searchQuery = req.query.q;

    //Do something when the searchQuery is not null.
    if(searchQuery != null){
        res.send(`<p>SEARCHED: ${searchQuery}</p>`);
    }else{
        res.status(404).send("<p> Nothing found</p>");
    }
});
// Time
router.get('/time', (req, res)=>{
    res.send(`<p>TIME: ${req.requestTime}</p>`);
});

//FallBack if request doesn't match routes - Last route in the file!
router.get(`*`, (req, res) => {
        res.status(404).send("<p> Nothing found</p>");
});
console.log("Node.js web server at port 5000 is running..");

module.exports = router;