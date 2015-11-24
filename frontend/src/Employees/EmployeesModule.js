/**
 * Created by jcaronan on 11/4/15.
 */
import angular from 'angular'
import 'angular-ui-bootstrap'
import 'angular-route'
import EmployeesRoutes from './EmployeesRoutes'
import { EmployeesController } from './EmployeesController'
import { EmpModalController } from './EmpModalController'
import { AssessmentController } from './AssessmentController'
import { EmployeeService } from './EmployeeService'
import { AssessmentService } from './AssessmentService'
import { Employee } from './Employee'
import { EmployeeDirective } from './EmployeeDirective'
import { Answer } from './Answer'
import { Assessment } from './Assessment'
import { AnswerService } from './AnswerService'


angular.module('EmployeesModule', ['ui.bootstrap','ngRoute'])
  .controller('EmployeesController', EmployeesController)
  .controller('EmpModalController', EmpModalController)
  .controller('AssessmentController', AssessmentController)
  .service('EmployeeService', EmployeeService)
  .service('AnswerService', AnswerService)
  .service('AssessmentService', AssessmentService)
  .factory('Employee', Employee)
  .factory('Answer', Answer)
  .factory('Assessment', Assessment)
  .config(EmployeesRoutes)
  //.directive('employeeRow' , EmployeeDirective.directiveFactory)
