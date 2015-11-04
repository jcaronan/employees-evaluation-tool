/**
 * Created by jcaronan on 11/4/15.
 */
import '../styles/style.css'
import angular from 'angular'
import 'angular-bootstrap'
import 'angular-route'
import AssessmentRoutes from './AssessmentRoutes'
import { AssessmentController } from './AssessmentController'

angular.module('AssessmentModule', ['ui.bootstrap','ngRoute'])
  .controller('AssessmentController', AssessmentController)
  .config(AssessmentRoutes)
