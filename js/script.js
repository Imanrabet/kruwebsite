var routerApp = angular.module('kuApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
    // Home Page
    .state('home', {

        url: '/home',
        templateUrl: 'home.html',
        controller: 'kuHomeCtrl'

    })

    //About Us
    .state('about', {

        url: '/about',

       templateUrl: 'about.html',
       controller: 'kuAboutCtrl'

    })
    .state('vc', {

        url: '/vicechancellor',

       templateUrl: 'aboutvicechancellor.html',
       controller: 'kuAboutVCCtrl'

    })
    .state('registrar', {

        url: '/registrar',

       templateUrl: 'aboutregistrar.html',
       controller: 'kuAboutRegistrarCtrl'

    })
    .state('principal', {

        url: '/principal',

       templateUrl: 'aboutprincipal.html',
       controller: 'kuAboutPrincipalCtrl'

    })

     ;
});

 // routerApp.config(function($stateProvider, $urlRouterProvider) {
 //    $stateProvider
 //            // 
 //        .state('abouthome', {

 //            url: '/about/home',

 //            templateUrl: 'abouthome.html'

 //        })


 //        .state('about', {

 //            url: '/about',

 //           templateUrl: 'about.html'

 //        });
 //    });


//Home Page Contoller
routerApp.controller('kuHomeCtrl',function($scope)
    { 
        $scope.homeTabFlag = 'newsupdate';
        $scope.homeTab = function(value){
            $scope.homeTabFlag = value;  
        }                                                                                                                                                                                                              
    });  

//About us--> about Page Contoller
routerApp.controller('kuAboutCtrl',function($scope)
    { 
        $scope.aboutTabFlag = 'home';
        $scope.aboutTab = function(value){
            $scope.aboutTabFlag = value;  
        }                                                                                                                                                                                                              
    });  
//About us--> VC Page Contoller
routerApp.controller('kuAboutVCCtrl',function($scope)
    { 
        $scope.aboutVCTabFlag = 'home';
        $scope.aboutVCTab = function(value){
            $scope.aboutVCTabFlag = value;  
        }                                                                                                                                                                                                              
    });  
//About us--> Registrar Page Contoller
routerApp.controller('kuAboutRegistrarCtrl',function($scope)
    { 
        $scope.aboutRegistrarTabFlag = 'home';
        $scope.aboutRegistrarTab = function(value){
            $scope.aboutRegistrarTabFlag = value;  
        }                                                                                                                                                                                                              
    });  
//About us--> Principal Page Contoller
routerApp.controller('kuAboutPrincipalCtrl',function($scope)
    { 
        $scope.aboutPrincipalTabFlag = 'home';
        $scope.aboutPrincipalTab = function(value){
            $scope.aboutPrincipalTabFlag = value;  
        }                                                                                                                                                                                                              
    });  



         routerApp.controller('kuCtrl',function($scope)
        { 
            alert("aaaaaaaa");
                            $scope.homeNewsUpdateFlag = false;
                            $scope.page1Flag = false;
                             $scope.page2Flag = false;


            $scope.homeNewsUpdate = function(newsupdate){
                $scope.homeNewsUpdateFlag = true;
                $scope.page1Flag = false;
                $scope.page2Flag = false;
                
            }
            $scope.page = function(value){
                console.log("value",value);
                
                $scope.page1Flag = value;  
                
                
            }
             
         $scope.customers=
        [
        
         {fname:'jon',city:'Delhi'},
         {fname:'john',city:'Jaipur'},
         {fname:'aron',city:'Hyderabad'},
         {fname:'cena',city:'U.P'}
        ];
             $scope.addCustomer=function()
             {
                $scope.customers.push
                ({
                    fname: $scope.newCustname.name,
                    city:$scope.newCustcity.city
                });
             };                                                                                                                                                                                                           
        });  