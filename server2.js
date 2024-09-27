import express, { json } from "express";
import persons from "./routes/persons.js";
import path from "path";
import url from "url";
let PORT = process.env.PORT;

// let __filename = url.fileURLToPath(import.meta.url);
// let __dirname = path.dirname(__filename);

const app = express();

app.use(express.json()); // raw body parser
app.use(express.urlencoded({ extended: false })); // urlencoded turn to false

// app.use(express.static(path.join(__dirname, "public")));

app.use("/api/persons", persons); // use /api/persons in url staticly for using all methods by only writing params & query into it at last

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
