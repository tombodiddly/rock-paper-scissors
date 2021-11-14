function computerPlay (play) {
    play = Math.floor((Math.random() * 100) + 1);
    console.log(play);
    if (play < 34){
        console.log("rock");
    }else if (play > 33 && play < 67){
        console.log("paper");
    }else {
        console.log("scissors");
    }   
}
computerPlay();