/**
 * Created by jcaronan on 11/2/15.
 */
import employees_dashboard from './employees.partial.html'
import assessment_form from './assessment.partial.html'

export default function EmployeesRoutes(route, location) {
  route
    .when('/employees', {
      template: employees_dashboard,
      controller: 'EmployeesController',
      controllerAs: 'ec',
      resolve: {
        employeeInit: function (EmployeeService) {
          return EmployeeService.getEmployees()
        }
      }
    })
    .when('/assessment', {
      template: assessment_form,
      controller: 'AssessmentController',
      controllerAs: 'ac',
      resolve: {
        questions: function (AssessmentService) {
          return AssessmentService.refreshQuestions()
        }
      }
    })

  location.html5Mode({
    enabled: true,
    requireBase: false
  })
}

EmployeesRoutes.$inject = ['$routeProvider', '$locationProvider']
