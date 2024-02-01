
// console.log(emails)
const emails = [
    "jimoyoh589@alibrs.com",
    "dab1a165bbad96@cashbenties.com",
    "53695265bbada1@crankymonkey.info",
    "2a5a3c65bbada8@crankymonkey.info",
    "c3bef965bbadb0@cashbenties.com",
    "206ad665bbadb8@cashbenties.com",
    "72841c65bbadc1@cashbenties.com",
    "ea8c9f65bbadc9@cashbenties.com",
    "94cb1165bbadd1@cashbenties.com",
    "e5dd0965bbade1@cashbenties.com",
    "08447665bbade9@crankymonkey.info"

];

console.log(emails)



let myButtonElement = document.querySelector(".btn");
myButtonElement.addEventListener("click",
    function () {
        let userChoice = document.getElementById("emailRequest").value;
        console.log(userChoice)
       
        let researchElement = false;
        for(let i = 0; i < emails.length; i ++){
            if(userChoice === emails [i]){
                researchElement = true;
                console.log("l'email é corretta")
            } 
        }

        if (researchElement) {
            console.log("Bentornato!");
            document.getElementById("result").innerHTML = "Bentornato!";
        } else {
            console.log("Nessuna corrispondenza trovata");
            document.getElementById("result").innerHTML = "Non esiste nessun utente con questa email";
        }

    




    }
)   


