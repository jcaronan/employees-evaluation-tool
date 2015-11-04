import angular from 'angular'
import './Dashboard/DashboardModule'
import './Employees/EmployeesModule'
import './Forms/AssessmentModule'

angular.module('MainModule', ['DashboardModule', 'EmployeesModule', 'AssessmentModule'])
