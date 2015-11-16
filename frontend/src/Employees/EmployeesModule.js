/**
 * Created by jcaronan on 11/4/15.
 */
import angular from 'angular'
import 'angular-ui-bootstrap'
import 'angular-route'
import EmployeesRoutes from './EmployeesRoutes'
import { EmployeesController } from './EmployeesController'
import { EmpModalController } from './EmpModalController'
import { EmployeeService } from './EmployeeService'
import { Employee } from './Employee'
import { EmployeeDirective } from './EmployeeDirective'

angular.module('EmployeesModule', ['ui.bootstrap','ngRoute'])
  .controller('EmployeesController', EmployeesController)
  .controller('EmpModalController', EmpModalController)
  .service('EmployeeService', EmployeeService)
  .factory('Employee', Employee)
  .config(EmployeesRoutes)
  //.directive('employeeRow' , EmployeeDirective.directiveFactory)
