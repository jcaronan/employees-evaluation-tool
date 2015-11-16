/**
 * Created by jcaronan on 11/10/15.
 */
"use strict";
import { Assessment } from './Assessment'
export class AssessmentService {

  constructor(RestService, $q) {
    this.$q = $q;
    this.restService = RestService;
    this.assessmentApi = "assessment";
  }

  addUpdateQuestion(assessment){
    assessment.question = this.capitalizeQ(assessment.question)
    var assess = new Assessment(assessment);
    var deferred = this.$q.defer();

    this.restService.put(this.assessmentApi, assess).then(
      function success(response){
        deferred.resolve(response)
      },
      function error(error){
        deferred.resolve(error);
      });
    return deferred.promise
  }

  capitalizeQ(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }

  deleteAssessment(assessment){
    var assess = new Assessment(assessment);
    var deferred = this.$q.defer();

    this.restService.delete(this.assessmentApi, assess).then(
      function success(response){
        deferred.resolve(response)
      },
      function error(error){
        deferred.resolve(error);
      });
    return deferred.promise
  }

  getQuestions(){
    var deferred = this.$q.defer();
    this.restService.get(this.assessmentApi + "/all").then(
      function success(response){
        deferred.resolve(response.data.items);
      },
      function error(error){
        deferred.resolve(error)
      })

    return deferred.promise;
  }
}

AssessmentService.$inject = ['RestService', '$q']