let app = angular.module("MyApp", []);

app.directive("myGreeting", function(){
    return{
        restrict: "E",
        scope: {
            name: '@' // one way binding
            //name: '=' for two way binding
        },
        template: `
            <div>
                <h1> Welcome {{name}}
                <button ng-click="changeGreeting()">ChangeGreeting</button>
            </div>
        `,
        controller: function($scope){
            $scope.changeGreeting = function(){
                $scope.name = "Friend"
            }
        },
        link: function(scope, element, attrs){
            element.on('click', function(){
                console.log("Directive element clicked.");
            });
        }
    };
});