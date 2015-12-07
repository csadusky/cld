  var yourScore = 0;
  var totalQuestions = 3;

  function checkForm(){

      if(myForm.questionOne.value ==="Blue"){
        yourScore ++;
        $('#score').text(yourScore);
      }
      if(myForm.questionTwo.value ==="Red" && "Green" && "Yellow"){
        yourScore ++;
        $('#score').text(yourScore);
      }
      if(myForm.questionThree.value ==="Blue" || "blue"){
        yourScore ++;
        $('#score').text(yourScore);
      }

      if(yourScore == totalQuestions) {
        alertText = "you so smart! You got all the questions right!";
        totalQuestions = totalQuestions + 3;

     }else {
        alertText = "you got " + yourScore + " out of " + totalQuestions + " correct!";
        totalQuestions = totalQuestions + 3;
     };

     alert(myForm.playerName.value + ", " + alertText);
     $('#score').text(yourScore);
     return false;

  };










