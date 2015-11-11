export class EmployeeDirective {
  constructor($q) {
    this.restrict = 'AE';
    this.$q = $q;
    this.template =
      '<tr class="success">' +
      '<td>1</td>' +
      '<td>John Doe</td>' +
      '<td>johncarter@mail.com</td>' +
      '<td>Done</td>' +
      '<td>' +
      '<div class="btn-group" role="group" aria-label="...">' +
      '<button type="button" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></button>' +
      '<button type="button" class="btn btn-default"><i class="glyphicon glyphicon-remove"></i></button>' +
      '<button type="button" class="btn btn-default"><i class="glyphicon glyphicon-check"></i></button>' +
      '</div>' +
      '</td>' +
      '</tr>'
  }

  //link(scope, element, attributes) {
  //  console.log("directive link");
  //}

  static directiveFactory($q) {
    EmployeeDirective.instance = new EmployeeDirective($q);
    return EmployeeDirective.instance;
  }
}

EmployeeDirective.$inject = ['$q'];
