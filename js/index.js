var data = [
			{name:"新列表1",
			color:"#2C40D3",
			id:1,
			don:[		]
		}];
var app = angular.module("app",[]);
	var colors = ["#2C40D3","#08F208","#D63E0D","#AA17BC","#EAA01C","#7E5A3B","#F21755"];
	var colorse = ["#6776F5","79FC79","#D63E0D","#BF6AC4","#EDB755","#FCCBA5","#FF6A93"];

app.controller("odd",function($scope,$interval){
	$scope.color = ["#2C40D3","#08F208","#D63E0D","#AA17BC","#EAA01C","#7E5A3B","#F21755"];
	$scope.xin = "新项目..."	
	$scope.num = 1;
	$scope.list = data;
	$scope.index = 0;
	$scope.lists = [];
	$scope.datashow = false;
	$scope.datashoe = false;
	$scope.dis = '';
	console.log($scope.dis)
	$scope.inde = 0;
	// 获取当前
	$scope.che = function($index){
		$scope.index = $index;
	}
	// 增加列表
	$scope.zeng = function(){
		$scope.index=$scope.list.length
		$scope.list.push(
			{name:"新列表"+($scope.index+1),
			color:colors[$scope.list.length%7],
			bck:colorse[$scope.list.length%7],
			id:$scope.index,
			don:[]
		})

	}
	$scope.clo = function($index){
		$scope.inde = $index
	}
	// 修改项目
	$scope.xiugai = function(e,v){
		console.log(e.target.innerText)
		 if (!e) e = window.event;
            if ((e.keyCode || e.which) == 13) {
            	v.title=e.target.innerText
		console.log(v.title)
            }
            // console.log(v.title)
            // console.log(e.innerText)
	}
	// 添加项目
	$scope.xiang =function(){
			$scope.list[$scope.index].don.push(
					{title:'',
					dine:false,
					id:$scope.inde
					}
						)
			$scope.list[$scope.index].don.length
	};
	// 选项
	$scope.clibor=function(){
		$scope.colors = $scope.list[$scope.index].color
		$scope.datashow=!$scope.datashow
		$scope.listname = $scope.list[$scope.index].name

	}
	$scope.mod = function(){
		
	}
	// 选项中颜色
	$scope.clo = function(v){
		$scope.colors = v;

	}
	// 删除列表
	$scope.del = function(){
		$scope.list.splice($scope.index,1);
		$scope.index = 0;
	}
	// 删除项目
	$scope.dels = function(v){
		console.log(v)
		$scope.list[$scope.index].don.splice(v,1)
	}
	// 完成
	$scope.go = function(){
		$scope.datashow =  false;
		$scope.list[$scope.index].name= $scope.listname		
		$scope.list[$scope.index].color = $scope.colors
	}
	// 删除已完成项目
	$scope.lists=function(v){
		v.dine=true;
	}

	$scope.$watch("list",function(){
		$scope.len = $scope.list[$scope.index].don.length;
	},true)
})

