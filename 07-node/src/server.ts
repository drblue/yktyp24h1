import express from "express";
import routes from "./routes";

// Create a new Express app (instance)
const app = express();

// Register middlewares
app.use(express.json());

// Use router
app.use(routes);

// Respond to ALL other requests
app.use((req, res) => {
	res.status(404).send({ message: "Route not found"});
});

// Listen for incoming requests
app.listen(3000, () => {
	console.log("🤩 Server listening for requests on http://localhost:3000");
});
