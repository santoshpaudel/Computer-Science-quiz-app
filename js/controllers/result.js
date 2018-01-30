(function(){
	angular
	.module("turtleFacts")
	.controller("resultCtrl",ResultController);
	ResultController.$inject=['quizMetrics','dataService'];
	
	function ResultController(quizMetrics,dataService){
		var vm=this;
		vm.quizMetrics=quizMetrics;
		vm.dataService=dataService;
		vm.activeQuestion=0;
		vm.getAnswerClass=getAnswerClass;
		vm.getPercent=getPercent;
		
		function getPercent(){
			return ((quizMetrics.numCorrect/dataService.quizQuestions.length)*100);
		}
		
		function getAnswerClass(index){
			if(index===quizMetrics.correctAnswers[vm.activeQuestion])
				return "bg-success";
			else if(index===dataService.quizQuestions[vm.activeQuestion].selected)
				return "bg-danger";
			else
				return false;
		}
	}
	
})();