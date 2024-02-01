

let myButton = document.getElementById("my-button");
myButton.addEventListener("click",
    function () {

        
        let userChoice = ""
        let result = document.querySelector(".result");

        userChoice = document.getElementById("choice-User").value;
        console.log(userChoice)
        

        const computerChoice = Math.floor(Math.random() * 7) + 1;
        console.log(computerChoice)

        if (userChoice < 1 || userChoice > 6){
            result.innerHTML="Attenzione! Inserire solo numeri da 1 a 6!"
        }

        else if (userChoice == computerChoice) {
            result.innerHTML=`Hai pareggiato! Il computer ha scelto ${computerChoice} riprova!`
            console.log("Pareggio")
        }else if (userChoice > computerChoice){
            result.innerHTML=`Hai vinto! Bravo! Il computer ha scelto ${computerChoice}!`

            console.log("hai vinto")
        }else{
            result.innerHTML=`Ops! Hai perso! Il computer ha scelto ${computerChoice} riprova!`

            console.log("hai perso")
        }

       
    }
)