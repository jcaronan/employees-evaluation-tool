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
    this.employeesList = [];
  }

  addEmployee(employee){
    employee.name = this.capitalizeEachWord(employee.name)
    employee.status = "Done";
    var emp = new Employee(employee);
    //var deferred = this.$q.defer();

    this.restService.put(this.employeeApi, emp).then(
      function success(response){
        //console.log(response); OK
      },
      function error(error){
        console.log(error);
      });
    //return deferred.promise;
  }

  getEmployees(){
    this.restService.get(this.employeeApi + "/all").then(
      function success(response){
        this.employeesList = response.data.items
      }.bind(this),
      function error(error){
        console.log(error);
      })
  }

  capitalizeEachWord(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}

EmployeeService.$inject = ['RestService', '$q']