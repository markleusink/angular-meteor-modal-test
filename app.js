
if (Meteor.isClient) {

  var app = angular.module('socially',['angular-meteor', 'ui.router', 'ui.bootstrap']);

  angular.module("socially").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

      $locationProvider.html5Mode(true);

      $stateProvider
        .state('modal1', {
          url : '/modal1',
          template : '<div>you\'re looking at modal number 1</div>',
          controller: 'ModalRouteCtrl',
          resolve: {
            modalNo : function() { return '1'; }
          }
        });

      $stateProvider
        .state('modal2', {
          url : '/modal2',
          template : '<div>you\'re looking at modal number 2</div>',
          controller: 'ModalRouteCtrl',
          resolve: {
            modalNo : function() { return '2'; }
          }
        });

    }]);

  angular.module("socially").controller("ModalRouteCtrl", ['$scope', '$modal', '$meteor', 'modalNo',
    function($scope, $modal, $meteor, modalNo){

      $scope.modalNo = modalNo; 

      $modal.open({
        templateUrl: 'modal.ng.html',
        controller: 'ModalCtrl',
        resolve: {
            modalNo : function() { return modalNo; }
        }
      }).result.then(function(result) {

        console.log('closed', result);

      });
    }]);

  angular.module("socially").controller('ModalCtrl',
  ['$scope', '$modalInstance', 'modalNo',
    function($scope, $modalInstance, modalNo) {

      $scope.modalNo = modalNo; 
    
    }]);
}
