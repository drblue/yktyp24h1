export {};

type HttpVerbs = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

// Like `Pick` but for Type Unions
type CreatingHttpVerbs = Extract<HttpVerbs, "POST" | "PUT">;

// Like `Omit` but for Type Unions
type NonDestructiveHttpVerbs = Exclude<HttpVerbs, "DELETE">;

const method1: HttpVerbs = "DELETE";  // works
// const method2: NonDestructiveHttpVerbs = "DELETE";  // won't work
