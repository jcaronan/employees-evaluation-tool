/**
 * Created by jcaronan on 11/4/15.
 */
export class ModalController {
  constructor($uibModalInstance, EmployeeService, employee, title) {
    this.$uibModalInstance = $uibModalInstance
    this.EmployeeService = EmployeeService
    this.employee = employee
    this.title = title
  }


  cancel() {
    this.$uibModalInstance.dismiss('cancel')
  }

  save() {
    this.EmployeeService.addUpdateEmployee(this.employee).then(
      function success(response){
        this.$uibModalInstance.close(this.employee)
      }.bind(this),
      function error(error){
        console.log(error)
      })
  }

  delete() {
    this.EmployeeService.deleteEmployee(this.employee).then(
      function success(response){
        this.$uibModalInstance.close()
      }.bind(this),
      function error(error){
        console.log(error)
      })
  }



}

ModalController.$inject = ['$uibModalInstance', 'EmployeeService', 'employee', 'title']
