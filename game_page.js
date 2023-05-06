player1_score = 0;
player2_score = 0;
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

document.getElementById("Player1_name").innerHTML = player1_name + " : ";
document.getElementById("Player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Questionturn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answerturn - " + player2_name;
function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in LowerCase = " + word);

    Charat1 = word.charAt(1);
    console.log(Charat1);

    lengthby2 = Math.floor(word.length/2);
    Charat2 = word.charAt(lengthby2);
    console.log(Charat2);

    lengthminus1 = word.length - 1;
    Charat3 = word.charAt(lengthminus1);
    console.log(Charat3);

    remove_CharAt1 = word.replace(Charat1, "_");
    remove_CharAt2 = remove_CharAt1.replace(Charat2, "_");
    remove_CharAt3 = remove_CharAt2.replace(Charat3, "_");
    console.log(remove_CharAt3);

    question_word = "<h4 id='word_display'> Q. "+remove_CharAt3+"</h4>";
     input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
      row = question_word + input_box + check_button ;
     document.getElementById("output").innerHTML = row;
      document.getElementById("word").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lowercase " + answer);
    if (answer==word) {
        if(answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;

        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;

        }
    }
    if(question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "questionturn: " + player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "questionturn: " + player1_name;
    }
    if(answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn: " + player2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_anwer").innerHTML = "answer turn: " + player1_name;
    }
    document.getElementById("output").innerHTML = " ";
}