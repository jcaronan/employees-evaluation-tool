/**
 * Created by jcaronan on 11/4/15.
 */
import angular from 'angular'
import 'angular-bootstrap'
import 'angular-route'
import EmployeesRoutes from './EmployeesRoutes'
import { EmployeesController } from './EmployeesController'

angular.module('EmployeesModule', ['ui.bootstrap','ngRoute'])
  .controller('EmployeesController', EmployeesController)
  .config(EmployeesRoutes)
