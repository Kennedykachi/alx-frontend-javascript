export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: {
      [employeesList.departmentName]: [...employeesList.employees],
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };

  return reportObject;
}
