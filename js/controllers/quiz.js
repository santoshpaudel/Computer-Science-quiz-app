(function () {
    angular
    .module("cscFacts")
    .controller("quizCtrl", QuizController);
    QuizController.$inject = ['quizMetrics','dataService'];
    function QuizController(quizMetrics, dataService) {
        var vm = this;
        vm.quizMetrics = quizMetrics;
        vm.dataService = dataService;
        vm.activeQuestion = 0;
        vm.questionAnswered = questionAnswered;
        vm.numAnswered = 0;
        vm.setActiveQuestion = setActiveQuestion;
        vm.selectAnswer = selectAnswer;
        vm.error = false;
        vm.finalise = false;
        vm.finaliseAnswers = finaliseAnswers;
        //function that finalizes the quiz and change quiz mode to result
        function finaliseAnswers() {
            //resetting everything
            vm.activeQuestion = 0;
            vm.finalise = false;
            vm.numAnswered = 0;
            quizMetrics.markQuiz();
            quizMetrics.changeState("quiz", false);
            quizMetrics.changeState("result", true);
        }


        //assign the selected index of answer to the selected property of JSON data
        function selectAnswer(index) {
            dataService.quizQuestions[vm.activeQuestion].selected = index;
        }
        // changes the question in the view page
        function setActiveQuestion(index) {
            if (index === undefined) {

                var quizLength = dataService.quizQuestions.length - 1;
                var breakOut = false;
                while (!breakOut) {
                    vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0;
                    if (vm.activeQuestion === 0) {
                        vm.error = true;
                    }
                    if (dataService.quizQuestions[vm.activeQuestion].selected === null) {
                        breakOut = true;
                    }

                }
            } else {
                vm.activeQuestion = index;
            }

        }
        
        //checks whether all the questions have been answered or not. If not set active question to next available unanswered question
        function questionAnswered()
        {
            numAnswered=0;
            var quizLength = dataService.quizQuestions.length;
            for(var x = 0; x < quizLength; x++){
                if (dataService.quizQuestions[vm.activeQuestion].selected !== null) {

                    vm.numAnswered++;
                    if (vm.numAnswered >= quizLength) {
                        // finalize quiz
                        for (var i = 0; i < quizLength; i++) {
                            if (dataService.quizQuestions[i].selected === null) {
                                vm.setActiveQuestion(i);
                                return;
                            }
                        }
                        vm.error = false;
                        vm.finalise = true;
                        return;

                    }
                }
                
            }
            vm.setActiveQuestion();
            
        }

    }
})();