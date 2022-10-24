let mail = ["pippo@gmail.com", "pinco@gmail.com", "pallino@gmail.com"];


const inputMail = document.getElementById("exampleInputEmail1");



function iscriviti() {
    let soldato = 0;
    let valueMail = inputMail.value;
    // ^console.log(valueMail);

    for (let i = 0; i < mail.length; i++) {
        console.log(mail[i]);

        if (mail[i] === valueMail) {
            soldato = 1;

        }

    }

    if (soldato == 1) {
        document.getElementById("rispostaSistema").innerHTML = `<div class="iscritto">Risulti essere iscritto</div>`;
    }
    else {
        document.getElementById("rispostaSistema").innerHTML = `<div class="nonIscritto">Non sei iscritto</div>`;
    }


}





// ^-----------------DADI----------------


// ^Genera numero Utente e lo stampa
function generaNumeri() {
    let numeroRandomicoUtente = Math.floor(Math.random() * 6) + 1;
    // ^console.log(numeroRandomico);

    document.getElementById("numeroUtente").innerHTML = numeroRandomicoUtente;
    let numeroRandomicoComputer = Math.floor(Math.random() * 6) + 1;
    // ^console.log(numeroRandomico);

    document.getElementById("numeroComputer").innerHTML = numeroRandomicoComputer;
    if (numeroRandomicoUtente > numeroRandomicoComputer) {
        document.getElementById("vincitore").innerHTML = "Utente Vince";
    }
    else if(numeroRandomicoUtente == numeroRandomicoComputer){
        document.getElementById("vincitore").innerHTML = "Pareggio";
    }
    else{
        document.getElementById("vincitore").innerHTML = "Computer Vince";
    }
}


















