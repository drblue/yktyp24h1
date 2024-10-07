export {};

const say = (msg: string) => {
	console.log("You said: " + msg);
	return true;
}

// type SayType = typeof say;  // (msg: string) => boolean
// type SayReturnType = ReturnType<SayType>;  // boolean
type SayReturnType = ReturnType<typeof say>;  // boolean

const sayAsync = async (msg: string) => {
	console.log("You said: " + msg);
	return true;
}

type SayAsyncReturnType = ReturnType<typeof sayAsync>;  // Promise<boolean>
//    ^?

type SayAsyncResolvedReturnType = Awaited<SayAsyncReturnType>;
//    ^?
