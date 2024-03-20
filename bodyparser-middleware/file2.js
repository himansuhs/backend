// import { x, add } from "./file1.js";
import additionfunc, { x } from "./file1.js"; //default import
// import * as fileEntity from "./file1.js";
console.log(x);
console.log(additionfunc(23, 23));
export { x } from "./file1.js"; //re-export
