import {accessKeyId,secretAccessKey} from './s3-config.json'
export const smtp = {
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: SENDGRID_USER_NAME, // generated ethereal user
        pass: SENDGRID_API_KEY  
    }
};



export const url = 'http://localhost:3001';

export const s3Config = {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
};


export const s3Region = S3_REGION
export const s3Bucket = S3_BUCKET_NAME

