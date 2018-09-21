//result controller for working with results after all  the questions have been answered
(function () {
    angular
	.module("cscFacts")
	.controller("resultCtrl", ResultController);
    //Dependency injection-- injecting two factories
    ResultController.$inject = ['quizMetrics', 'dataService'];

    function ResultController(quizMetrics,dataService) {
        //create a view model for use in html page
        var vm = this;
        vm.quizMetrics = quizMetrics;
        vm.dataService = dataService;
        // initialize activeQuestion to 0 at first
        vm.activeQuestion = 0;
        vm.getAnswerClass = getAnswerClass;
        vm.getPercent = getPercent;
        vm.startAgain = startAgain;

        function startAgain() {
            quizMetrics.changeState("result", false);
            quizMetrics.numCorrect = 0;
        
           
            for(var i = 0; i < dataService.quizQuestions.length; i++) {
                var data = dataService.quizQuestions[i];
                data.selected = null;
              
                data.correct = null;
             

            }
        }

        function getPercent() {

            return quizMetrics.numCorrect / dataService.quizQuestions.length * 100;

        }
        //function that returns class based on answered question is correct or not
        function getAnswerClass(index) {
            if (index === quizMetrics.correctAnswers[vm.activeQuestion])
                return "bg-success";
            else if (index === dataService.quizQuestions[vm.activeQuestion].selected)
                return "bg-danger";
            else
                return false;
        }
    }

})();