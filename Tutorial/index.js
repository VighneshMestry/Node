const express = require("express");
const app = express();

const path = require("path");

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})
const upload = multer({ storage: storage });


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  return res.render("home");
});

app.post("/upload", upload.single('image'), (req, res) => {
  return res.redirect("/");
});


app.listen(8000, () => console.log("Server connected"));
