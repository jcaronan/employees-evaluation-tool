/**
 * Created by jcaronan on 11/2/15.
 */
import employees_dashboard from './employees.partial.html'

export default function EmployeesRoutes(route, location) {
  route
    .when('/employees', {
      template: employees_dashboard,
      controller: 'EmployeesController',
      controllerAs: 'ec'
    })

  location.html5Mode({
    enabled: true,
    requireBase: false
  })
}

EmployeesRoutes.$inject = [ '$routeProvider', '$locationProvider' ]
