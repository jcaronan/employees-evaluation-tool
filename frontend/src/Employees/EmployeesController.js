/**
 * Created by jcaronan on 11/4/15.
 */


export class EmployeesController {
  constructor($uibModal, employeeInit, $location, EmployeeService, AssessmentService, AnswerService) {
    this.$uibModal = $uibModal
    this.employees = employeeInit
    this.$location = $location
    this.EmployeeService = EmployeeService;
    this.AssessmentService = AssessmentService;
    this.AnswerService = AnswerService;
  }


  openModal() {
    var modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'employee.modal.tmpl',
      controller: 'EmpModalController as mc',
      resolve: {
        employee: function () {
          return {}
        },
        title: function () {
          return "Add New Employee"
        }
      }
    })

    modalInstance.result.then(function (employee) {
        this.employees.push(employee)
      }.bind(this),
      function () {
        console.log('Modal dismissed');
      });
  }

  update(index) {
    var modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'employee.modal.tmpl',
      controller: 'EmpModalController as mc',
      resolve: {
        employee: function () {
          return Object.assign({}, this.employees[index]);
        }.bind(this),
        title: function () {
          return "Edit Employee"
        }
      }
    })

    modalInstance.result.then(function (employee) {
        this.employees[index] = employee
      }.bind(this),
      function () {
        console.log('Modal dismissed');
      });
  }

  delete(index){
    var modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'delete.modal.tmpl',
      controller: 'EmpModalController as mc',
      resolve: {
        employee: function () {
          return Object.assign({}, this.employees[index]);
        }.bind(this),
        title: function () {
          return ""
        }
      }
    })

    modalInstance.result.then(function () {
        this.employees.splice(index, 1)
      }.bind(this),
      function () {
        console.log('Modal dismissed');
      });
  }

  goToAssessment(index){
    this.AssessmentService.setEmployee(this.employees[index])
    if(this.employees[index].status=='New'){
      this.AssessmentService.addUpdateAssessment(this.employees[index].id)
      this.employees[index].status = 'Ongoing'
      this.EmployeeService.addUpdateEmployee(this.employees[index])
    }
    else if(this.employees[index].status=='Ongoing'){
      this.AssessmentService.getAssessmentByEmployee(this.employees[index].id)
    }else if(this.employees[index].status=='Done'){
      //pdf
    }

    this.$location.path('/assessment');
  }


}

EmployeesController.$inject = ['$uibModal', 'employeeInit', '$location', 'EmployeeService', 'AssessmentService', 'AnswerService']
