/**
 * Created by jcaronan on 11/2/15.
 */
import main_dashboard from './dashboard.partial.html'

export default function DashboardRoutes(route, location) {
  route
    .when('/', {
      template: main_dashboard,
      controller: 'DashboardController',
      controllerAs: 'dc'
    })
    .otherwise({ redirectTo: '/' })

  location.html5Mode({
    enabled: true,
    requireBase: false
  })
}

DashboardRoutes.$inject = [ '$routeProvider', '$locationProvider' ]
