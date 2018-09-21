(function () {
    angular
    .module("cscFacts")
    .factory("quizMetrics", QuizMetrics);
    QuizMetrics.$inject = ['dataService'];

    function QuizMetrics(dataService) {
        var quizObj = {
            activeQuiz: false,
            resultsActive:false,
            changeState: changeState,
            correctAnswers: [],
            markQuiz: markQuiz,
            numCorrect: 0,
            startOver:false
           

    };
        return quizObj;
        //change state to quiz or result based on click event. If start quiz option is clicked, quiz mode is on else if all the answers are submitted, result mode is on
        function changeState(metric, state) {
            if (metric === "quiz") {
                quizObj.activeQuiz = state;
            } else if (metric === "result") {
                quizObj.resultsActive = state;
            }
            else {
                return false;
            }
        }
        //function that checks whether the selected answer is correct or not
        function markQuiz() {
            quizObj.correctAnswers = dataService.correctAnswers;
            for (var i = 0; i < dataService.quizQuestions.length; i++) {
                if (dataService.quizQuestions[i].selected === dataService.correctAnswers[i]) {
                    dataService.quizQuestions[i].correct = true;
                    quizObj.numCorrect++;
                } else {
                    dataService.quizQuestions[i].correct = false;
                }
            }

        }
    }
})();