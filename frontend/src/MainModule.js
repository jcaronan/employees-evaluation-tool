import angular from 'angular'
import './Dashboard/DashboardModule'
import './Employees/EmployeesModule'
import './Forms/AssessmentModule'
import './Reports/ReportModule'
import './RestClient/RestClientModule'

angular.module('MainModule', ['DashboardModule', 'EmployeesModule', 'AssessmentModule', 'ReportModule', 'RestClientModule'])
