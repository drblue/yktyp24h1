/**
 * Template Literal Types
 *
 * <https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#handbook-content>
 */
export {};

// 👎🏻
// type ResponsiveColumns = "col-xs-1" | "col-xs-2" | "col-xs-3" | "col-sm-1";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
type Width = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ResponsiveColumns = `col-${Size}-${Width}`;

// const myCol: ResponsiveColumns = "col-sm-13";  // Nope!

type OffsetColumns = `offset-${Size}-${Width}`;

// type BootstrapGridClasses = ResponsiveColumns[] | OffsetColumns[];
type BootstrapGridClasses = (ResponsiveColumns | OffsetColumns)[];

const validGridClasses: BootstrapGridClasses = [
	"col-sm-6",
	"col-xl-2",
	"offset-sm-3",
	// "col-xxl-12",  // nope!
];
