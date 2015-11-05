/**
 * Created by jcaronan on 11/4/15.
 */
import angular from 'angular'
import 'angular-bootstrap'
import 'angular-route'
import ReportRoutes from './ReportRoutes'
import { ReportController } from './ReportController'

angular.module('ReportModule', ['ui.bootstrap','ngRoute'])
  .controller('ReportController', ReportController)
  .config(ReportRoutes)
