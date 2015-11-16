/**
 * Created by jcaronan on 11/4/15.
 */
export class AssessmentController {
  constructor($uibModal, assessmentInit) {
    this.$uibModal = $uibModal
    this.assessmentList = assessmentInit
  }


  openModal() {
    var modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'assessment.modal.tmpl',
      controller: 'AssessModalController as mc',
      resolve: {
        assessment: function () {
          return {}
        },
        title: function () {
          return "Add New Question"
        }
      }
    })

    modalInstance.result.then(function (assessment) {
        this.assessmentList.push(assessment)
      }.bind(this),
      function () {
        console.log('Modal dismissed');
      })
  }

  update(index) {
    var modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'assessment.modal.tmpl',
      controller: 'AssessModalController as mc',
      resolve: {
        assessment: function () {
          return Object.assign({}, this.assessmentList[index]);
        }.bind(this),
        title: function () {
          return "Edit Question"
        }
      }
    })

    modalInstance.result.then(function (assessment) {
        this.assessmentList[index] = assessment
      }.bind(this),
      function () {
        console.log('Modal dismissed');
      });
  }

  delete(index){
    var modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'delete.modal.tmpl',
      controller: 'AssessModalController as mc',
      resolve: {
        assessment: function () {
          return Object.assign({}, this.assessmentList[index]);
        }.bind(this),
        title: function () {
          return ""
        }
      }
    })

    modalInstance.result.then(function () {
        this.assessmentList.splice(index, 1)
      }.bind(this),
      function () {
        console.log('Modal dismissed');
      });

  }
}

AssessmentController.$inject = ['$uibModal', 'assessmentInit']
