import assessment_dashboard from './assessment.partial.html'
export default function AssessmentRoutes(route, location) {
  route
    .when('/forms', {
      template: assessment_dashboard,
      controller: 'AssessmentController',
      controllerAs: 'ac',
      resolve: {
        assessmentInit: function (AssessmentService) {
          return AssessmentService.getQuestions()
        }
      }
    })

  location.html5Mode({
    enabled: true,
    requireBase: false
  })
}

AssessmentRoutes.$inject = [ '$routeProvider', '$locationProvider' ]
