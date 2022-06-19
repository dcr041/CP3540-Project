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
            animals: {
                right: 0,
                wrong: 0,
            },
            geography: {
                right: 0,
                wrong: 0,
            },
            sports: {
                right: 0,
                wrong: 0,
            }
        }
        localStorage.setItem("user", JSON.stringify(user));
    }

  }