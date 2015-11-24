/**
 * Created by jcaronan on 11/10/15.
 */
"use strict";
import { Answer } from './Answer'
export class AnswerService {

  constructor(RestService, $q) {
    this.$q = $q;
    this.restService = RestService;
    this.answerApi = "answer";
  }


  getAllByAssessmentId(assessmentId) {
    var deferred = this.$q.defer();
    this.restService.get("answer/assessment", {'assessmentId': assessmentId}).then(
      function success(response) {
        deferred.resolve(response.data.items)
      },
      function error(error) {
        deferred.resolve(error);
      });
    return deferred.promise
  }


  addUpdateAnswer(assessmentKey, value, q) {
    this.restService.get(this.answerApi+'/question', {'assessmentId': assessmentKey, 'questionId':q.id}).then(
      function success(response) {
        var ans = {}
        var total = (parseInt(value) / 5) * parseInt(q.score)
        if(response.status == '204'){
          ans = {
            'assessmentId': assessmentKey,
            'questionId': q.id,
            'rating': value,
            'grade': total
          }
        }
        else{
          ans = {
            'id' : response.data.id,
            'assessmentId': assessmentKey,
            'questionId': q.id,
            'rating': value,
            'grade': total
          }
        }
        var answer = new Answer(ans)
        this.restService.put(this.answerApi, answer).then(
          function success(response) {
            //console.log(response)
          },
          function error(error) {
            console.log(error);
          });
      }.bind(this),
      function error(error) {

      });

  }

  submit() {

  }
}

AnswerService.$inject = ['RestService', '$q']