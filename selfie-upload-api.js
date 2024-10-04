const http = require("http");
const path = require("path");
const fs = require("fs");
const express = require("express");
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')
const connection = require("./postsql")
const app = express();
const httpServer = http.createServer(app);
const PORT = 3000;



connection();
app.use(fileUpload());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/addPhoto', async (req, res) => {
    let profilePictureUrl = null;
    if (req.files && req.files.profile_picture) {

        const profilePicture = req.files.profile_picture;

        const uploadPath = path.join(__dirname, './public', `${Date.now()}_${profilePicture.name}`);

        await profilePicture.mv(uploadPath);
        console.log(uploadPath)
        profilePictureUrl = `${req.protocol}://${req.get('host')}/public/${path.basename(uploadPath)}`;
        // console.log(req.protocol)
        // console.log(req.get('host'))
        // console.log(path.basename(uploadPath))
        // console.log(profilePictureUrl)
    }
    res.send({
        image: profilePictureUrl
    })
})

httpServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});