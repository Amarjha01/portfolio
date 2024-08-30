import express from 'express';
import path from 'path';
import cors from 'cors';
import router from "./routes/routes.js";
const app = express();
app.use(cors());

// Serve static files from the public folder
// app.use(express.static(path.join(__dirname, '..' , 'public')));

// app.get('/api', (req, res) => {
// 	res.download('./amarjhaResume.pdf');
// });

app.use("/api", router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
