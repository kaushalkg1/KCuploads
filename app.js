import express from "express";
import multer from "multer";
import path, { join } from "path";

import compression from "compression";
import connectToDb from "./db";
import cors from 'cors' ;
const app = express();
const PORT = process.env.PORT?process.env.PORT:3003;
app.use(compression());

app.use(cors());
app.use( express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());   



 const storage = multer.diskStorage({
  destination : (req,file,cb)=>{
    cb(null,"public/uploads")

  },filename:(req,file,cb)=>{
    cb(null , file.fieldname+"_"+Date.now()+file.originalname)
  }
})
const upload= multer({
  storage:storage
})
app.post("/upload",upload.single("image"),(req,res)=>{
  console.log(req.file)
})

Promise.all([connectToDb()])
  .then(() =>
    app.listen(PORT, () => console.log(`knowledgeCube is smoking on ${PORT}`))
  )
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });
