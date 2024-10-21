import express from "express";

// Create a new Express app (instance)
const app = express();

// Register middlewares
app.use(express.json());

// Respond to `GET /` requests
app.get("/", (req, res) => {
	console.log("Yayyyy, someone requested my root");
	// console.log("Method: " + req.method);
	// console.log("Path: " + req.path);
	// console.log("Client IP: " + req.ip);
	res.send({ message: "I AM (G)ROOT" });
});

// Respond to `GET /luke` requests
app.get("/luke", (req, res) => {
	res.send({ message: "I AM YOUR FATHER" });
});

// Respond to `POST /todos` requests
app.post("/todos", (req, res) => {
	console.log("request body:", req.body);

	res.send({ message: "Would have created todo if I knew how to" });
});

// Respond to ALL other requests
app.use((req, res) => {
	res.status(404).send({ message: "Route not found"});
});

// Listen for incoming requests
app.listen(3000, () => {
	console.log("🤩 Server listening for requests on http://localhost:3000");
});
