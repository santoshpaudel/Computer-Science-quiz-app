(function(){
	angular
	.module("turtleFacts")
	.controller("listCtrl",ListController);
	ListController.$inject=['quizMetrics','dataService'];
	
	

	function ListController(quizMetrics,dataService){
	 var vm=this;
      vm.data=dataService.turtlesData;
       vm.quizMetrics=quizMetrics;	  
       vm.search="";
	  vm.activeTurtle={};
	  vm.changeActiveTurtle = changeActiveTurtle;
	function changeActiveTurtle(index)
	{
		vm.activeTurtle=index;
	}
vm.activateQuiz=activateQuiz;
function activateQuiz()
{
	quizMetrics.changeState("quiz",true);
}	
	}
})();