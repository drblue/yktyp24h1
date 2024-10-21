/**
 * Root Controller
 */
import { Request, Response } from "express";

export const getRoot = (req: Request, res: Response) => {
	console.log("Yayyyy, someone requested my root");
	// console.log("Method: " + req.method);
	// console.log("Path: " + req.path);
	// console.log("Client IP: " + req.ip);
	res.send({ message: "I AM (G)ROOT" });
}

export const getLuke = (req: Request, res: Response) => {
	res.send({ message: "I AM YOUR FATHER" });
}

export const postTodos = (req: Request, res: Response) => {
	console.log("request body:", req.body);

	res.send({ message: "Would have created todo if I knew how to" });
}
