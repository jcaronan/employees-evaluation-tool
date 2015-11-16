/**
 * Created by jcaronan on 11/4/15.
 */
import angular from 'angular'
import 'angular-ui-bootstrap'
import 'angular-route'
import AssessmentRoutes from './AssessmentRoutes'
import { AssessmentController } from './AssessmentController'
import { AssessModalController } from './AssessModalController'
import { AssessmentService} from './AssessmentService'
import { Assessment} from './Assessment'

angular.module('AssessmentModule', ['ui.bootstrap','ngRoute'])
  .controller('AssessmentController', AssessmentController)
  .controller('AssessModalController', AssessModalController)
  .service('AssessmentService', AssessmentService)
  .factory('Assessment', Assessment)
  .config(AssessmentRoutes)
