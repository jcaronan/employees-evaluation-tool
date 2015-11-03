/**
 * Created by jcaronan on 11/2/15.
 */
import '../styles/style.css'
import angular from 'angular'
import 'angular-bootstrap'
import 'angular-route'
import 'angular-google-chart'
import DashboardRoutes from './DashboardRoutes'
import { DashboardController } from './DashboardController'

angular.module('DashboardModule', ['ui.bootstrap','ngRoute', 'googlechart'])
  .controller('DashboardController', DashboardController)
  .config(DashboardRoutes)
