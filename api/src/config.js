import {accessKeyId,secretAccessKey} from './s3-config.json'
export const smtp = {
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'apikey', // generated ethereal user
        pass: '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'  
    }
};



export const url = 'http://localhost:3000';

export const s3Config = {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
};


export const s3Region = 'ap-south-1'
export const s3Bucket = 'fileapp-reactjs'