angular.module('app.users', [ 'ngRoute']);

angular.module('app').requires.push('app.users');

angular.module('app.users')
.config(function config($routeProvider) {
	$routeProvider.when('/users/:id', {
		templateUrl: 'app/partials/users/users.tpl.html',
		controller:'usersCtrl'
	});
}).controller('usersCtrl', function($rootScope,$scope,Session, $location,$routeParams,$window,toaster,dataFactoryApp) {
    $rootScope.showNavBar=true;
	
	//---------------------------------------------------------------------
	//  API REST
	//---------------------------------------------------------------------	
        var uriUsers="/api/users";
	$scope.apiUsers=dataFactoryApp(uriUsers,'');
	
        var uriUser="/api/users/:id";
	$scope.apiUser=dataFactoryApp(uriUser,'');
	
	//---------------------------------------------------------------------
	//  DATA
	//---------------------------------------------------------------------	
        $scope.users=[];
        $scope.user={};
        $scope.adding=false;
        $scope.editing=false;
         
	var getData=function(){
			var oParamsUsers={};
			$scope.apiUsers.getAll(oParamsUsers,function (users) {     
                            $scope.users=users;		
			},function(err){
                            toaster.pop("error","GET USERS",angular.toJson(err));
                        });
       }
	 
      getData();
    
      $scope.save=function(){ 
        if($scope.adding){
            $scope.apiUser.insert($scope.user,function (result) {     
                if(result.success){
                    $scope.user.id=result.data.id;
                    $scope.users.push($scope.user);
                    $scope.users=_.sortBy($scope.users,'id');
                    
                }else{
                     toaster.pop("error","INSERT USER",angular.toJson(err));
                }
                $scope.adding=false;
            },function(err){
                toaster.pop("error","INSERT USER",angular.toJson(err));
                $scope.adding=false;
            });
        }else if($scope.editing){
            $scope.apiUser.update($scope.user,function (result) {     
                if(result.success){
                    var user=_.find($scope.users,{'id':result.data.id  });
                    user.email=result.data.email;
                    user.description=result.data.description;
                }	
                $scope.editing=false;
            },function(err){
                toaster.pop("error","UPDATE USER",angular.toJson(err));
                $scope.editing=false;
            });
        }         
    }
    
    $scope.cancel=function(){ 
        $scope.adding=false;
        $scope.editing=false;
    }

    //---------------------------------------------------------------------
	//  navbar
	//--------------------------------------------------------------------- 
    $scope.navbar={};
    $scope.navbar.home={show:true,active:false};
    $scope.navbar.qr={show:false,active:false};
    $scope.navbar.editweb={show:false,active:false};
    $scope.navbar.statistics={show:false,active:false};
    $scope.navbar.users={show:true,active:true};
    
    
    $scope.onAction=function(action,id){
          switch(action) {
            case 'home':
                $location.path('/campaigns');
                break;
            case 'new':
                $scope.user={};
                $scope.adding=true;
                break;
            case 'edit':
                $scope.user={};
                var oParamsUser={};
                oParamsUser.id=id;
                $scope.apiUser.get(oParamsUser,function (user) {     
                    $scope.user=user;
                    $scope.editing=true;		
                },function(err){
                    toaster.pop("error","GET USER",angular.toJson(err));
                });
                break;
            case 'delete':
                var oParamsUser={};
                oParamsUser.id=id;
                $scope.apiUser.delete(oParamsUser,function (result) {     
                    //$scope.optionsFormCampaign.show=false;
                    if(result.success){
                        var idxUser=_.findIndex($scope.users,{'id':result.data.id  });
                        $scope.users.splice(idxUser,1);
                    }	
                },function(err){
                    toaster.pop("error","DELETE USER",angular.toJson(err));
                });
                break;
            
            
            
          }
       
    }



	
});
