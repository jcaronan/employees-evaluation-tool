/**
 * Created by jcaronan on 11/4/15.
 */
export class ModalController {
  constructor($uibModalInstance, EmployeeService) {
    this.$uibModalInstance = $uibModalInstance
    this.EmployeeService = EmployeeService
  }


  cancel() {
    this.$uibModalInstance.dismiss('cancel')
  }

  save() {
    this.EmployeeService.addEmployee(this.employee);
    this.$uibModalInstance.close()
  }
}

ModalController.$inject = ['$uibModalInstance', 'EmployeeService']
