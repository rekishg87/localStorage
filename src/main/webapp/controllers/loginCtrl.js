/**
 * Created by Rekish on 23-9-2015.
 */

angular.module("localStorage", ["ngStorage"])
    .controller("loginCtrl", ['$scope', '$localStorage', function($scope, $localStorage) {

        $scope.user = [
            { username: "rekish", password: "admin" },
            { username: "test", password: "test" }
        ];

        $scope.login = function() {

                for(var i = 0; i < $scope.user.length; i++) {
                    if($scope.username === $scope.user[i].username &&
                        $scope.password === $scope.user[i].password) {

                            $scope.userGreeting = $scope.save();
                            $scope.userGreeting = $scope.user[i].username;
                    }
                }
        }

        $scope.save = function() {
            $localStorage.userGreeting = $scope.username;
        }

        $scope.load = function() {
           $scope.userGreeting = $localStorage.userGreeting;
        }

        $scope.delete = function() {
            $localStorage.userGreeting = null;
        }
    }]);
