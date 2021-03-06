/**
 * Created by jcaronan on 11/2/15.
 */
export class DashboardController {
  constructor($routeParams, DashboardService) {
    this.DashboardService = DashboardService
    this.$routeParams = $routeParams
    this.chartObject = {}
  }

  renderChart(){

    var poor = [
      {v: "Poor"},
      {v: 3},
    ]

    var needs_improvement = [
      {v: "Needs Improvement"},
      {v: 3},
    ]

    var meets_requirements = [
      {v: "Meets Reqiurement"},
      {v: 6},
    ]

    var exceeds_expectation = [
      {v: "Exceeds Expectation"},
      {v: 8},
    ]

    var outstanding = [
      {v: "Outstanding"},
      {v: 5},
    ]

    this.chartObject.data = {"cols": [
      {id: "rating", label: "Performance Rating", type: "string"},
      {id: "number", label: "Percentage", type: "number"}
    ], "rows": [
      {c: poor},
      {c: needs_improvement},
      {c: meets_requirements},
      {c: exceeds_expectation},
      {c: outstanding}
    ]}

    this.$routeParams.chartType = "PieChart"
    this.chartObject.type = this.$routeParams.chartType
    this.chartObject.options = {
      'is3D': true,
      'title': 'Summary of Employees Rating'
    }
    return this.chartObject
  }

}

DashboardController.$inject = ['$routeParams', 'DashboardService']
