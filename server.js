import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample posts data
let posts = [
  { id: 1, title: "Learn React", body: "React is a powerful frontend library." },
  { id: 2, title: "Learn Node.js", body: "Node.js allows JS on the backend." },
  { id: 3, title: "Tailwind CSS", body: "Tailwind makes styling faster." },
  { id: 4, title: "API Integration", body: "Fetch data from APIs efficiently." },
  { id: 5, title: "Routing in React", body: "React Router helps navigate pages." },
  { id: 6, title: "State Management", body: "UseState and UseReducer are key hooks." },
  { id: 7, title: "Deploy Apps", body: "Deploy your apps using Vercel or Netlify." },
];

// API endpoint
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});