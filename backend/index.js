import express from 'express';
import path from 'path';
import cors from 'cors';
import router from "./routes/routes.js";
const app = express();
app.use(cors());


app.use("/api", router);

app.use(cors());

// Your existing routes
app.get('/api/endpoint', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
