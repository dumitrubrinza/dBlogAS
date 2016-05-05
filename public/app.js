
var blogApp = angular.module('dBlogApp', ['ngRoute', 'ngMessages', 'angularUtils.directives.dirPagination', 'ngCookies', 'UserApp' ]);

    blogApp.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/login', {
            templateUrl: 'partials/login.html',
            public: true,
            login: true
          })
          .when('/signup', {
            templateUrl: 'partials/signup.html',
            public: true
          })
          .when('/', {
            templateUrl: 'partials/blogs.html',
            controller: 'ArticlesController',
            public: true
          })
          .when('/article/:id', {
            templateUrl: 'partials/article.html',
            controller: 'ArticleDetailController',
            public: true
          })
          .when('/new-article', {
            templateUrl: 'partials/new-article.html',
            controller: 'NewArtController',
            public: true
          })
          .otherwise({
            redirectTo: '/'
          })
      }])
/*
blogApp.run(['user','$location', function(user, $location) {
    user.init({ appId: '572079a84afb4' });
     // redirect to login page if not logged in
            if ($location.path() !== '/login' && user.status().authenticated) {
              // allow just login and signup views to be available
              console.log("---------" + user.status().authenticated);
                $location.path('/login') && $location.path('/signup') ;
            }
}]);
*/
// /*
blogApp.run(['user', '$rootScope', '$location', '$http',
  function (user, $rootScope, $location, $http) {
        user.init({ appId: '572079a84afb4' });
        // keep user logged in after page refresh
       // $rootScope.globals = $cookieStore.get('globals') || {};
     //   if ($rootScope.globals.currentUser) {
    //        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    //    }
  
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
             
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !user.status().authenticated) {
              // allow just login and signup views to be available
                $location.path('/login') && $location.path('/signup') ;
            }
       });
        $rootScope.$on('user.logout', function() {
            console.log('Bye!');
            $http.defaults.headers.common.Authorization = 'Basic ';
            $location.path('/login')
        });
    }]);

// */
 
// Cut filter
blogApp.filter('cut', function(ArticleService) {
     return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }
            return value + (tail || ' …');
        };
});

// compare password directive
var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                console.log("directive compareTo");
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};
 var RegistrationController = 
 blogApp.directive("compareTo",['ArticleService', compareTo] );
 

// Articles Controller
    blogApp.controller('ArticlesController', ['$scope','$rootScope', '$routeParams', '$location', 'ArticleService', 
          
           function($scope, $rootScope, $routeParams, $location, ArticleService) {
                    
                   ArticleService.getArticles()       
                        .success(function(posts) {
                             $scope.articles = posts;
                  });
    }])

// OtherController pagination    
  blogApp.controller('OtherController', ['$scope', 'ArticleService',
     function($scope) {
        $scope.pageChangeHandler = function(num) {
            console.log('going to page ' + num);
          };
     }])

 
 
//  ArticleDetailController
  blogApp.controller('ArticleDetailController', ['$scope', '$location', '$routeParams', 'ArticleService',  'user',
          
           function($scope, $location, $routeParams, ArticleService, user) {
             ArticleService.getArticle($routeParams.id)
              .success(function(post) {
                $scope.article = post;
             });
             var currentUser = user.current;
          
              console.log(currentUser.first_name);
           console.log(user.status().authenticated);
  }])

// NewArtController
blogApp.controller('NewArtController', ['$scope', '$rootScope', '$location','ArticleService', 'user',
     function($scope, $rootScope, $location, ArticleService, user) {

              ArticleService.getArticles()
                  .success(function(articles) {
                         $scope.articles = articles;
                    });

              $scope.addArticle = function(){
                var currentUser = user.current;
                var article = { 
                              title: $scope.newPost.title,
                              data: $scope.newPost.text,
                              createdAt: new Date(),
                              by: currentUser.first_name
                              }

               ArticleService.addArticle(article)
                    .success(function(added_article) {
                       $scope.articles.push(added_article);
                       $scope.newPost = { }
                    });
              $location.path('/');
              }     

    }]) 

// ArticleService
blogApp.factory('ArticleService',  ['$http', function($http){
    

         var api = {
          // Atricles part
             getArticles : function() {
                 return $http.get('/api/posts')
                 //return posts
             },
             getArticle : function(id) {
                return $http.get('/api/posts/' + id )
             },
             addArticle : function(article){
                return $http.post('/api/posts',article)
             }
          }
          return api
    }])
 
  
