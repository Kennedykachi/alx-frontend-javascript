export default function createIteratorObject(report) {
  let departmentIndex = 0;
  let employeeIndex = 0;
  const departments = Object.values(report.allEmployees);

  const iterator = {
    next() {
      if (departmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[departmentIndex];
      const employees = currentDepartment[Object.keys(currentDepartment)[0]];

      if (employeeIndex >= employees.length) {
        departmentIndex++;
        employeeIndex = 0;
        return this.next();
      }

      const currentEmployee = employees[employeeIndex];
      employeeIndex++;

      return { value: currentEmployee, done: false };
    },
  };

  return iterator;
}
