const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware : we can accept the req.body data
app.use(express.json({ extended: false }));

let Item = require('./models/Item');
let fs = require('fs');
let multer = require('multer');

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('myImage');

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

app
  .post('/upload', (req, res) => {
    upload(req, res, err => {
      if (err) {
        res.render('index', {
          msg: err
        });
      } else {
        if (req.file == undefined) {
          res.render('index', {
            msg: 'Error: No File Selected!'
          });
        } else {
          console.log(req.file);
          console.log(req.file.path);
          let newItem = new Item();
          newItem.img.data = fs.readFileSync(req.file.path);
          newItem.img.filename = req.file.filename;
          newItem.img.contentType = 'image/png';
          newItem.save();
          res.send('uploaded!!');
        }
      }
    });
  })
  .get('/upload', function(req, res) {
    Item.findOne({}, 'img createdAt', function(err, img) {
      if (err) res.send(err);
      // console.log(img);
      res.contentType('json');
      res.send(img);
    }).sort({ createdAt: 'desc' });
  });

/*
app.post('/upload', function(req, res) {
  console.log(res.files);
  var newItem = new Item();
  newItem.img.data = fs.readFileSync(req.files.userPhoto.path);
  newItem.img.contentType = 'image/png';
  newItem.save();
});
*/
/*
// app.get('/', (req, res) => res.send('hello word'));
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the web 3d viewer API" })
);
*/

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Server static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
