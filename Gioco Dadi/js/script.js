

let myButton = document.getElementById("my-button");
myButton.addEventListener("click",
    function () {

        
        let userChoice = ""
        let result = document.querySelector(".result");

        userChoice =Math.floor(Math.random() * 7) + 1;
        console.log(userChoice)
        

        const computerChoice = Math.floor(Math.random() * 7) + 1;
        console.log(computerChoice)


        if (userChoice == computerChoice) {
            result.innerHTML=`Hai pareggiato! Hai scelto ${userChoice} e il computer ha scelto ${computerChoice} riprova!`
            console.log("Pareggio")
        }else if (userChoice > computerChoice){
            result.innerHTML=`Hai vinto! Bravo! Hai scelto ${userChoice} e il computer ha scelto ${computerChoice}!`

            console.log("hai vinto")
        }else{
            result.innerHTML=`Ops! Hai perso! Hai scelto ${userChoice} e il computer ha scelto ${computerChoice} riprova!`

            console.log("hai perso")
        }

       
    }
)