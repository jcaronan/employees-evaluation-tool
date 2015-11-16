import angular from 'angular'
import './Dashboard/DashboardModule'
import './Employees/EmployeesModule'
import './Forms/QuestionModule'
import './Reports/ReportModule'
import './RestClient/RestClientModule'

angular.module('MainModule', ['DashboardModule', 'EmployeesModule', 'QuestionModule', 'ReportModule', 'RestClientModule'])
