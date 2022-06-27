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

    console.log(countCorrectAnswers);
    if (todaysCategory === "Sports"){
        user.sports.right = user.sports.right + countCorrectAnswers;
        user.sports.wrong = user.sports.wrong + 5;
    } else if (todaysCategory === "Board Games"){
        user.boardGames.right = user.boardGames.right + countCorrectAnswers;
        user.boardGames.wrong = user.boardGames.wrong + 5;
    } else if (todaysCategory === "Video Games") {
        user.videoGames.right = user.videoGames.right + countCorrectAnswers;
        user.videoGames.wrong = user.videoGames.wrong + 5;
    } else if (todaysCategory === "Music, Musicals & Theatre"){
        user.music.right = user.music.right + countCorrectAnswers;
        user.music.wrong = user.music.wrong + 5;
    } else if (todaysCategory === "Celebrities"){
        user.celebrities.right = user.celebrities.right + countCorrectAnswers;
        user.celebrities.wrong = user.celebrities.wrong + 5;
    } else if (todaysCategory === "Art") {
        user.art.right = user.art.right + countCorrectAnswers;
        user.art.wrong = user.art.wrong + 5;
    } else if (todaysCategory === "Science & Nature"){
        user.scienceNature.right = user.scienceNature.right + countCorrectAnswers;
        user.scienceNature.wrong = user.scienceNature.wrong + 5;
    } else if (todaysCategory === "Geography"){
        user.geography.right = user.geography.right + countCorrectAnswers;
        user.geography.wrong = user.geography.wrong + 5;
    } else if (todaysCategory === "Animals") {
        user.animals.right = user.animals.right + countCorrectAnswers;
        user.animals.wrong = user.animals.wrong + 5;
    } else if (todaysCategory === "Vehicles"){
        user.vehicles.right = user.vehicles.right + countCorrectAnswers;
        user.vehicles.wrong = user.vehicles.wrong + 5;
    } else if (todaysCategory === "Mathematics"){
        user.mathematics.right = user.mathematics.right + countCorrectAnswers;
        user.mathematics.wrong = user.mathematics.wrong + 5;
    } else if (todaysCategory === "Gadgets & Computers") {
        user.gadgetsComputers.right = user.gadgetsComputers.right + countCorrectAnswers;
        user.gadgetsComputers.wrong = user.gadgetsComputers.wrong + 5;
    } else if (todaysCategory === "Politics"){
        user.politics.right = user.politics.right + countCorrectAnswers;
        user.politics.wrong = user.politics.wrong + 5;
    } else if (todaysCategory === "History & Mythology"){
        user.historyMythology.right = user.historyMythology.right + countCorrectAnswers;
        user.historyMythology.wrong = user.historyMythology.wrong + 5;
    } else if (todaysCategory === "General Knowledge") {
        user.generalKnowledge.right = user.generalKnowledge.right + countCorrectAnswers;
        user.generalKnowledge.wrong = user.generalKnowledge.wrong + 5;
    } else if (todaysCategory === "Film"){
        user.film.right = user.film.right + countCorrectAnswers;
        user.film.wrong = user.film.wrong + 5;
    } else if (todaysCategory === "Cartoons & Animation"){
        user.cartoonsAnimation.right = user.cartoonsAnimation.right + countCorrectAnswers;
        user.cartoonsAnimation.wrong = user.cartoonsAnimation.wrong + 5;
    } else if (todaysCategory === "Television") {
        user.television.right = user.television.right + countCorrectAnswers;
        user.television.wrong = user.television.wrong + 5;
    } else if (todaysCategory === "Comics"){
        user.comics.right = user.comics.right + countCorrectAnswers;
        user.comics.wrong = user.comics.wrong + 5;
    } else if (todaysCategory === "Books"){
        user.books.right = user.books.right + countCorrectAnswers;
        user.books.wrong = user.books.wrong + 5;
    } else if (todaysCategory === "Japanese Anime & Manga") {
        user.animeManga.right = user.animeManga.right + countCorrectAnswers;
        user.animeManga.wrong = user.animeManga.wrong + 5;
    }
    
    localStorage.setItem("user", JSON.stringify(user));
}