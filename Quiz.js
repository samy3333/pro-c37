class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("red");

    //write code to show a heading for showing the result of Quiz
    text("The Results:", 200, 500);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();


    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("*Note: Contestants who answered the correct answer is highlited in green.", 130, 230);
      for (var plr in allContestants){
        var correctAns= "2";
        if(correctAns==contestant.answer){
          fill("white")
          text(contestant+": 2", 200, 300);
        }
        else if(correctAns!==contestant.answer){
          fill("white");
          text(contestant+": 5"+ contestant.answer, 200, 300);
        }
      }
    }

    //write code to add a note here
   
    //write code to highlight contest who answered correctly

    
  }

}
