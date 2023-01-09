
import multer from 'multer';
import { request } from 'express';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: 'mongodb+srv://user:Krishna@blogweb.9eman.mongodb.net/BLOG?retryWrites=true&w=majority',
    options: {useUnifiedTopology: true, useNewUrlParser: true },
    file: (request,file) =>{
        const match = ["image/png","image/jgp"];

        if(match.indexOf(file.memeType)==-1){
            return `${Date.now()}-blog-${file.originalname}`;
        }

        return{
            bucketName:"photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
})

export default multer({storage});