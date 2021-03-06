import express from 'express';
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import config from '../config';


//set up storage
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}.jpg`);
    },
});

//pass to multer
const upload = multer({ storage });

const router = express.Router();


//use multer function as middleware to upload file; locally
router.post('/', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`);
});

// AMAZON S3 SECTION

aws.config.update({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
});

const s3 = new aws.S3();


//set up storage
const storageS3 = multerS3({
    s3,
    bucket: 'eshop-jp',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key(req, file, cb) {
        cb(null, file.originalname);
    },
});

//pass to multer
const uploadS3 = multer({ storage: storageS3 });


//use multers3 function as middleware to save file on S3
router.post('/s3', uploadS3.single('image'), (req, res) => {
    res.send(req.file.location);
});

export default router;