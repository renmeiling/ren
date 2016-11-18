 angular.module("zouApp",[]).directive('auto',function(){
    return{
    	restrict:'ECMA',
    	template:'<div class="bigbox"> <ul class="list">  <li ng-repeat="i in fdata">{{i.title|substr}}<> </ul> <div class="center"> <p class="word">新闻图片</p> <img ng-repeat="j in sdata" ng-src="{{j.img}}" /> </div> <div class="righta"> <p class="word">新闻图片</p> <div class="boximg"><img ng-repeat="j in sdata" ng-src="{{j.img}}" /></div><ul class="lista"><li ng-repeat="i in fdata">{{i.title|substr}}<></ul> </div> </div>',
     	replace:true,
     	scope:{fdata:'=adata',sdata:'=bdata'},
     	link:function(scope,element,attr){
     		scope.b = attr['a']
     	}
    };
}).service('getdata',function($http){
	return{		
		ajax:function(url,method,callback){
			$http({
				url:url,
				method:method,				
			}).success(function(e){
				callback(e)
			})
		}
	}
}).filter("substr",function(){
	return function(e){
		if(e.length>5){
			return e.slice(0,5)+"..."
		}else{
			return e
		}
	}

})
