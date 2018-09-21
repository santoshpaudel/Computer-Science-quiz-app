// JavaScript source code
(function () {
    angular
	.module("cscFacts")
	.controller("listCtrl", ListController);
    ListController.$inject = ['quizMetrics','dataService'];
    function ListController(quizMetrics,dataService) {
        var vm = this;
        vm.data = dataService.factData;
        vm.search = "";
        vm.quizMetrics = quizMetrics;
        vm.activeFact = {};
        vm.changeActiveFact = changeActiveFact;

        function changeActiveFact(index) {
            vm.activeFact = index;
        }

        vm.activateQuiz = activateQuiz;
        //activate quiz controller
        function activateQuiz() {
            quizMetrics.changeState("quiz",true);
        }
    }
  
})();