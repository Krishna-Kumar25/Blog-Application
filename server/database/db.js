import mongoose from 'mongoose';


const connection = async () => {
    const URL ='mongodb+srv://user:Krishna@blogweb.9eman.mongodb.net/BLOG?retryWrites=true&w=majority';
    try {
      await mongoose.connect(URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log("Database connected successfully");
    } catch (error) {
      console.log("Error while connecting to the database ", error);
    }
  };
export default connection;