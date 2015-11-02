/**
 * Created by jcaronan on 11/2/15.
 */
import angular from 'angular'
import 'angular-route'
import DashboardRoutes from './DashboardRoutes'
import { DashboardController } from './DashboardController'

angular.module('DashboardModule', ['ngRoute'])
  .controller('DashboardController', DashboardController)
  .config(DashboardRoutes)
