/**
 * Created by jcaronan on 11/10/15.
 */
"use strict";

const HTTP = new WeakMap();
const Q = new WeakMap();

export class RestService {

  constructor($http, $q) {
    HTTP.set(this, $http);
    Q.set(this, $q);

    this.protocol = "http";
    this.rootUrl = "localhost:8080/_ah/api/toolEndpoint/v1";
  }

  constructUrl(url) {
    return this.protocol + "://" + this.rootUrl + "/" + url;
  }

  get(url, query_params) {
    var $q = Q.get(this);
    var $http = HTTP.get(this);

    var deferred = $q.defer();
    $http.get(this.constructUrl(url), {params: query_params}).then(
      function success(response) {
        deferred.resolve(response);
      },
      function error(response) {
        deferred.reject(response);
      });

    return deferred.promise;
  }

  post(url, request_body) {
    var $q = Q.get(this);
    var $http = HTTP.get(this);
    var deferred = $q.defer();
    $http.post(this.constructUrl(url), request_body).then(
      function success(response) {
        deferred.resolve(response);
      },
      function error(response) {
        deferred.reject(response);
      });

    return deferred.promise;
  }

  put(url, request_body) {
    var $q = Q.get(this);
    var $http = HTTP.get(this);

    var deferred = $q.defer();
    $http.put(this.constructUrl(url), request_body).then(
      function success(response) {
        deferred.resolve(response);
      },
      function error(response) {
        deferred.reject(response);
      });

    return deferred.promise;
  }

  delete(url, query_params) {
    var $q = Q.get(this);
    var $http = HTTP.get(this);

    var deferred = $q.defer();
    $http.delete(this.constructUrl(url), {params: query_params}).then(
      function success(response) {
        deferred.resolve(response);
      },
      function error(response) {
        deferred.reject(response);
      });

    return deferred.promise;
  }
}

RestService.$inject = ['$http', '$q'];