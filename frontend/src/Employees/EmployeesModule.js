/**
 * Created by jcaronan on 11/4/15.
 */
import angular from 'angular'
import 'angular-ui-bootstrap'
import 'angular-route'
import EmployeesRoutes from './EmployeesRoutes'
import { EmployeesController } from './EmployeesController'
import { ModalController } from './ModalController'
import { EmployeeService } from './EmployeeService'
import { Employee } from './Employee'

angular.module('EmployeesModule', ['ui.bootstrap','ngRoute'])
  .controller('EmployeesController', EmployeesController)
  .controller('ModalController', ModalController)
  .service('EmployeeService', EmployeeService)
  .factory('Employee', Employee)
  .config(EmployeesRoutes)
