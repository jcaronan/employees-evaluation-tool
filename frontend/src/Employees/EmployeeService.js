/**
 * Created by jcaronan on 11/10/15.
 */
"use strict";
import { Employee } from './Employee'
export class EmployeeService {

  constructor(RestService, $q) {
    this.$q = $q;
    this.restService = RestService;
    this.employeeApi = "employee";
  }

  addUpdateEmployee(employee){
    employee.name = this.capitalizeEachWord(employee.name)
    employee.status = "Not yet assessed";
    var emp = new Employee(employee);
    var deferred = this.$q.defer();

    this.restService.put(this.employeeApi, emp).then(
      function success(response){
        deferred.resolve(response)
      },
      function error(error){
        deferred.resolve(error);
      });
    return deferred.promise
  }

  capitalizeEachWord(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  deleteEmployee(employee){
    var emp = new Employee(employee);
    var deferred = this.$q.defer();

    this.restService.delete(this.employeeApi, emp).then(
      function success(response){
        deferred.resolve(response)
      },
      function error(error){
        deferred.resolve(error);
      });
    return deferred.promise
  }

  getEmployees(){
    var deferred = this.$q.defer();
    this.restService.get(this.employeeApi + "/all").then(
      function success(response){
        deferred.resolve(response.data.items);
      },
      function error(error){
        deferred.resolve(error)
      })

    return deferred.promise;
  }
}

EmployeeService.$inject = ['RestService', '$q']