export function AddStats(countCorrectAnswers) {
    const user = JSON.parse(localStorage.getItem('user'));
    const qRight = parseInt(user.questionsRight);
    const qWrong = parseInt(user.questionsWrong);
    const totalPlayed = parseInt(user.gamesPlayed);
    var todaysCategory = user.todayCategory;
    console.log(todaysCategory);

    user.questionsRight = qRight + countCorrectAnswers;
    user.questionsWrong = qWrong + (5 - countCorrectAnswers);
    user.gamesPlayed = totalPlayed + 1;
    user.todayScore = countCorrectAnswers;
    user.date = new Date().getDay();

    if (todaysCategory === "Animals"){
        user.animals.right = user.animals.right + countCorrectAnswers;
        user.animals.wrong = user.animals.wrong + 5;
    } else if (todaysCategory === "Geography"){
        user.geography.right = user.geography.right + countCorrectAnswers;
        user.geography.wrong = user.geography.wrong + 5;
    } else if (todaysCategory === "Sports") {
        user.sports.right = user.sports.right + countCorrectAnswers;
        user.sports.wrong = user.sports.wrong + 5;
    }
    
    localStorage.setItem("user", JSON.stringify(user));
}