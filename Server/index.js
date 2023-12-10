import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js';
import questionRoutes from './routes/Questions.js';

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send("This is a stackoverflow clone API");
});

app.use('/user', userRoutes);
app.use('/questions',questionRoutes);

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://MaheshCK:MaHeSh7893@stack-overflow-clone.itsy6as.mongodb.net/";

mongoose.set('strictQuery', false); // Setting strictQuery to false to suppress the warning

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  }))
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  });
  
