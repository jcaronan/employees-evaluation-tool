/**
 * Created by jcaronan on 11/10/15.
 */
"use strict";
import { Question } from './Question'
export class QuestionService {

  constructor(RestService, $q) {
    this.$q = $q;
    this.restService = RestService;
    this.questionApi = "question";
  }

  addUpdateQuestion(question){
    var q = new Question(question);
    var deferred = this.$q.defer();

    this.restService.put(this.questionApi, q).then(
      function success(response){
        deferred.resolve(response)
      },
      function error(error){
        deferred.resolve(error);
      });
    return deferred.promise
  }

  deleteQuestion(question){
    var q = new Question(question);
    var deferred = this.$q.defer();

    this.restService.delete(this.questionApi, q).then(
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
    this.restService.get(this.questionApi + "/all").then(
      function success(response){
        deferred.resolve(response.data.items);
      },
      function error(error){
        deferred.resolve(error)
      })

    return deferred.promise;
  }
}

QuestionService.$inject = ['RestService', '$q']