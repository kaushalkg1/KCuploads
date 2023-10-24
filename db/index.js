import mongoose from "mongoose";

const connectToDb = () =>
  mongoose.connect(
    `mongodb+srv://kg12345:maqEGQvP1PLE2zeu@cluster0.bvezscc.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    } 
  );  

export default connectToDb;
