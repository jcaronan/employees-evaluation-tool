/**
 * Created by jcaronan on 11/4/15.
 */
export class EmployeesController {
  constructor($uibModal) {
    this.$uibModal = $uibModal
  }

  openModal() {
    var modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'employee.modal.tmpl',
      controller: 'ModalController as mc'
    })
  }
}

EmployeesController.$inject = ['$uibModal', 'EmployeeService']
