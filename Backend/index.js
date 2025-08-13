import express from 'express';
import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:5173',}

app.use(cors(corsOptions));

const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
}   );