export function CheckNewUser() {
    const returningUser = JSON.parse(localStorage.getItem('user'));
    if (!returningUser) {
        const user = {
            date: -1,
            todayScore: 0,
            todayCategory: "",
            gamesPlayed: 0,
            questionsRight: 0,
            questionsWrong: 0,
            sports: {
                right: 0,
                wrong: 0,
            },
            boardGames: {
                right: 0,
                wrong: 0,
            },
            videoGames: {
                right: 0,
                wrong: 0,
            },
            music: {
                right: 0,
                wrong: 0,
            },
            celebrities: {
                right: 0,
                wrong: 0,
            },
            art: {
                right: 0,
                wrong: 0,
            },
            scienceNature: {
                right: 0,
                wrong: 0,
            },
            geography: {
                right: 0,
                wrong: 0,
            },
            animals: {
                right: 0,
                wrong: 0,
            },
            vehicles: {
                right: 0,
                wrong: 0,
            },
            mathematics: {
                right: 0,
                wrong: 0,
            },
            gadgetsComputers: {
                right: 0,
                wrong: 0,
            },
            politics: {
                right: 0,
                wrong: 0,
            },
            historyMythology: {
                right: 0,
                wrong: 0,
            },
            generalKnowledge: {
                right: 0,
                wrong: 0,
            },
            film: {
                right: 0,
                wrong: 0,
            },
            cartoonsAnimation: {
                right: 0,
                wrong: 0,
            },
            television: {
                right: 0,
                wrong: 0,
            },
            comics: {
                right: 0,
                wrong: 0,
            },
            books: {
                right: 0,
                wrong: 0,
            },
            animeManga: {
                right: 0,
                wrong: 0,
            }
        }
        localStorage.setItem("user", JSON.stringify(user));
    }

  }