/**
 * Created by jcaronan on 11/4/15.
 */
export class QModalController {
  constructor($uibModalInstance, QuestionService, question, title) {
    this.$uibModalInstance = $uibModalInstance
    this.QuestionService = QuestionService
    this.question = question
    this.title = title
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel')
  }

  save() {
    this.QuestionService.addUpdateQuestion(this.question).then(
      function success(response){
        this.question.id = response.data.key
        this.$uibModalInstance.close(this.question)
      }.bind(this),
      function error(error){
        console.log(error)
      })
  }

  delete() {
    this.QuestionService.deleteQuestion(this.question).then(
      function success(response){
        this.$uibModalInstance.close()
      }.bind(this),
      function error(error){
        console.log(error)
      })
  }

}

QModalController.$inject = ['$uibModalInstance', 'QuestionService', 'question', 'title']
