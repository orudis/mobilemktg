angular.module('app.new_campaign', [ 'ngRoute']);

angular.module('app').requires.push('app.new_campaign');

angular.module('app.new_campaign')
.config(function config($routeProvider) {
	$routeProvider.when('/campaign', {
		templateUrl: 'app/partials/new_campaign/new_campaign.tpl.html',
		controller:'newCampaignCtrl'
	});
}).controller('newCampaignCtrl', function($rootScope,$scope,$routeParams,Session, $location,$window,toaster,dataFactoryApp,toaster) {
    $rootScope.showNavBar=true;
	
    //---------------------------------------------------------------------
    //  API REST
    //---------------------------------------------------------------------	
    var uriCampaigns="/api/campaigns/:id";
    $scope.apiCampaigns=dataFactoryApp(uriCampaigns,'');
    
    //---------------------------------------------------------------------
    //  DATA
    //---------------------------------------------------------------------	
        
    $scope.campaign={};
    
    $scope.save=function(){ 
        $scope.apiCampaigns.insert($scope.campaign,function (result) {     
                                                                        if(result.success){
                                                                            $location.path('/campaigns');
                                                                        }
                                                                    },function(err){
                                                                        toaster.pop("error","INSERT CAMPAIGNS",angular.toJson(err));
                                                                        console.log("err:"+angular.toJson(err));
                                                                        
                                                                    });
    }
    
    $scope.delete=function(){ 
        $scope.apiCampaigns.delete({'id': $scope.campaign.id},function (result) {     
                                                                                                                                                //$scope.optionsFormCampaign.show=false;
                                                                        if(result.success){
                                                                           $location.path('/campaigns');
                                                                        }	
                                                                    },function(err){
                                                                        toaster.pop("error","DELETE CAMPAIGNS",angular.toJson(err));
                                                                        console.log("err:"+angular.toJson(err));
                                                                        
                                                                    });
    }
    
    $scope.cancel=function(){ 
        $location.path('/campaigns');
    }
    
    
  
});
