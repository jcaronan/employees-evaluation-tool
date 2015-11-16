/**
 * Created by jcaronan on 11/4/15.
 */
export class QuestionController {
  constructor($uibModal, questionInit) {
    this.$uibModal = $uibModal
    this.questionList = questionInit
  }


  openModal() {
    var modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'question.modal.tmpl',
      controller: 'QModalController as mc',
      resolve: {
        question: function () {
          return {}
        },
        title: function () {
          return "Add New Question"
        }
      }
    })

    modalInstance.result.then(function (question) {
        this.questionList.push(question)
      }.bind(this),
      function () {
        console.log('Modal dismissed');
      })
  }

  update(index) {
    var modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'question.modal.tmpl',
      controller: 'QModalController as mc',
      resolve: {
        question: function () {
          return Object.assign({}, this.questionList[index]);
        }.bind(this),
        title: function () {
          return "Edit Question"
        }
      }
    })

    modalInstance.result.then(function (question) {
        this.questionList[index] = question
      }.bind(this),
      function () {
        console.log('Modal dismissed');
      });
  }

  delete(index){
    var modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'delete.modal.tmpl',
      controller: 'QModalController as mc',
      resolve: {
        question: function () {
          return Object.assign({}, this.questionList[index]);
        }.bind(this),
        title: function () {
          return ""
        }
      }
    })

    modalInstance.result.then(function () {
        this.questionList.splice(index, 1)
      }.bind(this),
      function () {
        console.log('Modal dismissed');
      });

  }
}

QuestionController.$inject = ['$uibModal', 'questionInit']
