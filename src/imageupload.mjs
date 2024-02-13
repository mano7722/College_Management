import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images/'); // Specify the directory where files will be stored
      },
      filename: function(req, file, cb) {
        let ext = file.originalname.split('.').pop();
        let filename=Date.now() + '.' +ext;
        cb(null,  filename); // Specify filename (in this case, 
      }
});

let uploads= multer({storage});

export default uploads;