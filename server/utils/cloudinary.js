import { v2 as cloudinary } from 'cloudinary';

export async function uploadFile(buffer) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream((error, result) => {
            if (error) {
                return reject(error);
            }
            resolve(result);
        }).end(buffer);
    })
}
