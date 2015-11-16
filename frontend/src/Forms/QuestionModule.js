/**
 * Created by jcaronan on 11/4/15.
 */
import angular from 'angular'
import 'angular-ui-bootstrap'
import 'angular-route'
import QuestionRoutes from './QuestionRoutes'
import { QuestionController } from './QuestionController'
import { QModalController } from './QModalController'
import { QuestionService} from './QuestionService'
import { Question} from './Question'

angular.module('QuestionModule', ['ui.bootstrap','ngRoute'])
  .controller('QuestionController', QuestionController)
  .controller('QModalController', QModalController)
  .service('QuestionService', QuestionService)
  .factory('Question', Question)
  .config(QuestionRoutes)
