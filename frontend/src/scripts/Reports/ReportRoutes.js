import report_dashboard from './reports.partial.html'
export default function ReportRoutes(route, location) {
  route
    .when('/reports', {
      template: report_dashboard,
      controller: 'ReportController',
      controllerAs: 'rc'
    })

  location.html5Mode({
    enabled: true,
    requireBase: false
  })
}

ReportRoutes.$inject = [ '$routeProvider', '$locationProvider' ]
