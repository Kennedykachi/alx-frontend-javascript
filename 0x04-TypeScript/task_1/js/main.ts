// Interface for Teacher
interface Teacher {
  readonly firstName: string; // Read-only property for first name
  readonly lastName: string; // Read-only property for last name
  fullTimeEmployee: boolean; // Property for full-time employee status
  yearsOfExperience?: number; // Optional property for years of experience
  location: string; // Property for location
  contract: boolean; // Property for contract status
  [propName: string]: any; // Index signature for additional dynamic properties
}

// Interface for Directors, extends Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Property for number of reports
}

// Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string; // Function signature with firstName and lastName parameters, returns a string
}

// Implementation of printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`; // Formats and returns a string
};

// Interface for StudentConstructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface; // Constructor signature with firstName and lastName parameters, returns an instance of StudentClassInterface
}

// Interface for StudentClass
interface StudentClassInterface {
  workOnHomework(): string; // Method for working on homework, returns a string
  displayName(): string; // Method for displaying the name, returns a string
}

// Implementation of StudentClass
const StudentClass: StudentConstructor = class StudentClass
  implements StudentClassInterface
{
  firstName: string; // Property for first name
  lastName: string; // Property for last name

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working"; // Returns a string
  }

  displayName(): string {
    return this.firstName; // Returns the first name
  }
};

export { printTeacher, StudentClass }; // Exporting the printTeacher function and StudentClass
