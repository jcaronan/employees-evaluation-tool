/**
 * Created by jcaronan on 11/4/15.
 */
export class EmployeesController {
  constructor($uibModal, EmployeeService) {
    this.$uibModal = $uibModal
    this.EmployeeService = EmployeeService
    this.EmployeeService.getEmployees()
    this.employees = this.EmployeeService.employeesList
    console.log(this.EmployeeService.employeesList)
  }

  openModal() {
    var modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'employee.modal.tmpl',
      controller: 'ModalController as mc'
    })
  }

  getList(){
    this.EmployeeService.getEmployees();
    this.employees = this.EmployeeService.employeesList;
  }

  load(){
    console.log("yey");
  }
}

EmployeesController.$inject = ['$uibModal', 'EmployeeService']
