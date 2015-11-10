/**
 * Created by jcaronan on 11/10/15.
 */
"use strict";
export class EmployeeService {

  constructor(RestService, $q) {
    this.$q = $q;
    this.restService = RestService;
    this.employeeApi = "employee";
  }

  addEmployee(employee){
    employee.name = this.capitalizeEachWord(employee.name)
    console.log(employee);
    var deferred = this.$q.defer();

    this.restService.put(this.employeeApi, employee).then(
      function success(response){
        console.log(response);
      },
      function error(error){
        console.log(error);
      });

    //return deferred.promise;
  }

  capitalizeEachWord(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}

EmployeeService.$inject = ['RestService', '$q']