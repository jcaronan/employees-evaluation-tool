import assessment_dashboard from './question.partial.html'
export default function QuestionRoutes(route, location) {
  route
    .when('/forms', {
      template: assessment_dashboard,
      controller: 'QuestionController',
      controllerAs: 'qc',
      resolve: {
        questionInit: function (QuestionService) {
          return QuestionService.getQuestions()
        }
      }
    })

  location.html5Mode({
    enabled: true,
    requireBase: false
  })
}

QuestionRoutes.$inject = [ '$routeProvider', '$locationProvider' ]
