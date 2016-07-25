angular.module('app.campaigns', [ 'ngRoute']);

angular.module('app').requires.push('app.campaigns');

angular.module('app.campaigns')
.config(function config($routeProvider) {
	$routeProvider.when('/campaigns', {
		templateUrl: 'app/partials/campaigns/campaigns.tpl.html',
		controller:'campaignsCtrl'
	});
}).controller('campaignsCtrl', function($rootScope,$scope,Session, $location,$window,toaster,dataFactoryApp) {
    $rootScope.showNavBar=true;
	
	//---------------------------------------------------------------------
	//  API REST
	//---------------------------------------------------------------------	
	var uriCampaigns="/api/campaigns/:id";
	$scope.apiCampaigns=dataFactoryApp(uriCampaigns,'');
	
	//---------------------------------------------------------------------
	//  DATA
	//---------------------------------------------------------------------
    $scope.campaigns=[];
    $rootScope.campaign={};
    $scope.showForm=false;
    $scope.adding=false;
    $scope.editing=false;
       
	var getData=function(){
			var oParamsCampains={};
			$scope.apiCampaigns.getAll({},function (data) {     
				$scope.campaigns=data;		
			},function(err){
                            toaster.pop("error","GET CAMPAIGNS",angular.toJson(err));
                        });
      }
	 
      getData();
    
      $scope.save=function(){ 
        if($scope.adding){
            $scope.apiCampaigns.insert($rootScope.campaign,function (result) {     
                if(result.success){
                    $rootScope.campaign.id=result.data.id;
                    $scope.campaigns.push($rootScope.campaign);
                    $scope.campaigns=_.sortBy($scope.campaigns,'id');
                }else{
                    toaster.pop("error","INSERT CAMPAIGN",angular.toJson(err));
                }
                $scope.adding=false;
            },function(err){
                toaster.pop("error","INSERT CAMPAIGN",angular.toJson(err));
                $scope.adding=false;
            });
        }else if($scope.editing){
            $scope.apiCampaigns.update($rootScope.campaign,function (result) {     
                if(result.success){
                    var campaign=_.find($scope.campaigns,{'id':result.data.id  });
                    campaign.name=result.data.name;
                    campaign.description=result.data.description;
                }else{
                    toaster.pop("error","UPDATE CAMPAIGN",angular.toJson(err));
                }
                $scope.editing=false;
            },function(err){
                toaster.pop("error","UPDATE CAMPAIGN",angular.toJson(err));
                $scope.editing=false;
            });
        }         
     }
    
     $scope.cancel=function(){ 
        $scope.adding=false;
        $scope.editing=false;
    }
     
    //-----------------------------------------------------------------------------
    // navegation
    //-----------------------------------------------------------------------------
     
    $scope.navbar={};
    $scope.navbar.home={show:true,active:true};
    $scope.navbar.qr={show:false,active:false};
    $scope.navbar.editweb={show:false,active:false};
    $scope.navbar.statistics={show:false,active:false};
    $scope.navbar.users={show:true,active:false};
    

    $scope.onAction=function(action,id){
        
        
          switch(action) {
            case 'delete':
               $scope.apiCampaigns.delete({'id': id},function (result) {     
                    if(result.success){
                        var idxCamp=_.findIndex($scope.campaigns,{'id':result.data.id});
                        $scope.campaigns.splice(idxCamp,1);
                    }	
               },function(err){
                    toaster.pop("error","DELETE CAMPAIGNS",angular.toJson(err));
                });
                break;
            case 'new':
                $rootScope.campaign={};
                $scope.adding=true;
                break;
            case 'edit':
                $rootScope.campaign={};
                var oParamsCampaign={};
                oParamsCampaign.id=id;
                $scope.apiCampaigns.get(oParamsCampaign,function (campaign) {     
                        $rootScope.campaign=campaign;
                        $scope.editing=true;		
                },function(err){
                    toaster.pop("error","GET CAMPAIGN",angular.toJson(err));
                });
                break;
            case 'qr':
                $rootScope.campaign={};
                var oParamsCampaign={};
                oParamsCampaign.id=id;
                $scope.apiCampaigns.get(oParamsCampaign,function (campaign) {     
                        $rootScope.campaign=campaign;
                        $location.path('/qr/'+id);		
                },function(err){
                    toaster.pop("error","GET CAMPAIGN",angular.toJson(err));
                });
                break
               
                break;
            case 'download':
                $location.path('/download/'+id);
                break;
            case 'config':
                $location.path('/config/'+id);
                break;
            case 'editweb':
                $rootScope.campaign={};
                var oParamsCampaign={};
                oParamsCampaign.id=id;
                $scope.apiCampaigns.get(oParamsCampaign,function (campaign) {     
                        $rootScope.campaign=campaign;
                        $location.path('/editweb/'+id);	
                },function(err){
                    toaster.pop("error","GET CAMPAIGN",angular.toJson(err));
                });
                
                break;
            case 'statistics':
                $rootScope.campaign={};
                var oParamsCampaign={};
                oParamsCampaign.id=id;
                $scope.apiCampaigns.get(oParamsCampaign,function (campaign) {     
                        $rootScope.campaign=campaign;
                        $location.path('/statistics/'+id);
                },function(err){
                    toaster.pop("error","GET CAMPAIGN",angular.toJson(err));
                });
                  
                
                break;
            case 'users':
                $location.path('/users/'+$rootScope.user.id);
                break;
            case 'home':
                //$location.path('/campaigns');
                break;
          }
       
    }



	
});
