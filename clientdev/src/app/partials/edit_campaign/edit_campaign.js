angular.module('app.edit_campaign', [ 'ngRoute']);

angular.module('app').requires.push('app.edit_campaign');

angular.module('app.edit_campaign')
.config(function config($routeProvider) {
	$routeProvider.when('/campaign/:id', {
		templateUrl: 'app/partials/edit_campaign/edit_campaign.tpl.html',
		controller:'editCampaignCtrl'
	});
}).controller('editCampaignCtrl', function($rootScope,$scope,$routeParams,Session, $location,$window,toaster,dataFactoryApp,toaster) {
    $rootScope.showNavBar=true;
	
	//---------------------------------------------------------------------
	//  API REST
	//---------------------------------------------------------------------	
	var uriCampaigns="/api/campaigns/:id";
	$scope.apiCampaigns=dataFactoryApp(uriCampaigns,'');
	
	//---------------------------------------------------------------------
	//  DATA
	//---------------------------------------------------------------------	
        $scope.campains={};
        
	var getData=function(){
			var oParamsCampaigns={};
                        oParamsCampaigns.id=$routeParams.id; //$location.search().id;
                        $scope.apiCampaigns.get(oParamsCampaigns,function (data) {
                                $scope.campaign=data;	
                                $scope.qrimg="/qr-png/"+$scope.campaign.id;
                        },function(err){
                            toaster.pop("error","GET CAMPAIGN",angular.toJson(err));
                            console.log('error:'+err);
                        });
     }
	 
    getData();
    
    
    $scope.cancel=function(){ 
         $location.path('/campaigns');
    }
    
    $scope.save=function(){ 
            $scope.apiCampaigns.update($scope.campaign,function (result) {     
                                                                        if(result.success){
                                                                            $location.path('/campaigns');
                                                                        }	
                                                                    },function(err){
                                                                        toaster.pop("error","UPDATE CAMPAIGNS",angular.toJson(err));
                                                                        console.log("err:"+angular.toJson(err));
                                                                        
                                                                    });
    }
  	
});
