var express = require('express');
var {from} = require('rxjs');
var {filter, map} = require('rxjs/operators');
const {check, validationResult} = require('express-validator/check');
var cors = require('cors');
var router = express.Router();
var jsonParser = express.json();
var urlencodedParser = express.urlencoded({extended: false});

var corsOptions = {
    origin: 'localhost:1947/api',
    optionsSuccessStatus: 200
  }

const data = [];
data.push(new Grade(1, "Amjad", "CS572", 98));
data.push(new Grade(2, "Karim", "CS572", 99));
data.push(new Grade(3, "Khan", "CS572", 97));

/* GET api listing. */
router.get('/', cors(corsOptions), function(req, res, next) {
    //res.send(req.params.id);
  res.json(data);
});
router.get('/:id', cors(corsOptions), function(req, res, next) {
    //res.send(req.params.id);
    let id = req.params.id;
    let result;
    from(data)
    .pipe(
        filter(n => n.id == id),
        map(n => n)
    )
    .subscribe(
        (n) => {result = n}
    )
  res.json(result);
});
router.post('/', [
    check('id','id is numberic').isInt(),
    check('name', 'name is string').isString(),
    check('course', 'name is string').isString(),
    check('grade','id is numberic').isInt()
] , cors(corsOptions), function(req, res, next) {
  let obj = req.body;
  
  
  data.push(new Grade(obj.id, obj.name, obj.course, obj.grade));
  res.json(data);
});
router.put('/:id', [
    check('id','id is numberic').isInt(),
    check('name', 'name is string').isString(),
    check('course', 'name is string').isString(),
    check('grade','id is numberic').isInt()
] , cors(corsOptions), function(req, res, next) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    }
    let params = req.params;
    let obj = data.find(n => n.id = params.id);
    let jObj = req.body;
    if(obj) {
        data.splice(data.indexOf(obj), 1);
        console.log(jObj);
        data.push(new Grade(jObj.id, jObj.name, jObj.course, jObj.grade));
    }
    res.json(data);
});
router.delete('/:id', function(req, res, next) {
    let params = req.params;
    let obj = data.find(n => n.id = params.id);
    if(obj) {
        data.splice(data.indexOf(obj), 1);
        console.log(data);
    }
    res.json(data);
});
function Grade(id, name, course, grade) {
    this.id = id;
    this.name = name;
    this.course = course;
    this.grade = grade;
}
module.exports = router;
