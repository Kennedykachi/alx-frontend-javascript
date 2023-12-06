/**
 * Explanation of the code:
 *
 * - The "use strict" directive enables strict mode in JavaScript, which enforces stricter parsing and error handling.
 * - The "exports.__esModule = true;" statement sets the "__esModule" property of the "exports" object to true, indicating that the module is an ES module.
 * - The "printTeacher" function takes two parameters: "firstName" and "lastName". It concatenates the first character of the "firstName" with a dot and the "lastName" to form the formatted name of the teacher.
 * - Finally, the "exports.printTeacher = printTeacher;" statement exports the "printTeacher" function as a named export, making it accessible to other modules.
 */

"use strict";
exports.__esModule = true;
exports.printTeacher = void 0;

var printTeacher = function (firstName, lastName) {
  return firstName[0] + ". " + lastName;
};

exports.printTeacher = printTeacher;
