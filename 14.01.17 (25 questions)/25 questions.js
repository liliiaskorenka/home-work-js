var quiz = [
    {
        'question': 'Який зараз рік?',
        'correct_answer': '2017',
        'users_answer': '',
    },
    {
        'question': 'Як мене звати?',
        'correct_answer': 'javascript',
        'users_answer': '',
    },
    {
        'question': 'Whats up?',
        'correct_answer': 'okay',
        'users_answer': '',
    }
];

var current_question = -1;

function showNextQuestion(){
    current_question += 1;
    if (current_question == quiz.length ){
        showResult();
        return;
    }
    console.log('Showing ' + current_question + 'question');
    document.getElementById("question").innerHTML = quiz[current_question].question;
}


function submitAnswer(){
    //write answer to array
    var answer = document.getElementById("answer").value;
    quiz[current_question].users_answer = answer;
    //clear input
    document.getElementById("answer").value = "";
    //show next question
    showNextQuestion();
}

showNextQuestion();

function showResult() {
    var count_correct = 0;
    for(var i = 0; i < quiz.length; i++) {
        if (quiz[i].correct_answer == quiz[i].users_answer) {
            count_correct += 1;
        }
    }

    document.getElementById("result").innerHTML = "Ви правильно відповіли на " + count_correct + " питання.";
}





















