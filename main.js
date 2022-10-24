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




// ^Inizializzazione Arrey
    let partiteVinteUtente = [];
    let partiteVinteComputer = [];
    console.log(partiteVinteUtente);
    console.log(partiteVinteUtente);


function generaNumeri() {

    let variabile = 0;
    variabile = variabile + 1;
    // ^console.log(variabile);
   


    // ^Genera numero Utente e lo stampa
    let numeroRandomicoUtente = Math.floor(Math.random() * 6) + 1;
    // ^console.log(numeroRandomico);
    document.getElementById("numeroUtente").innerHTML = numeroRandomicoUtente;

    // ^Genera numero Computer e lo stampa
    let numeroRandomicoComputer = Math.floor(Math.random() * 6) + 1;
    // ^console.log(numeroRandomico);
    document.getElementById("numeroComputer").innerHTML = numeroRandomicoComputer;

    // ^Condizione Vincitore Pareggio
    if (numeroRandomicoUtente > numeroRandomicoComputer) {
        document.getElementById("vincitore").innerHTML = "Utente Vince";
    }
    else if (numeroRandomicoUtente == numeroRandomicoComputer) {
        document.getElementById("vincitore").innerHTML = "Pareggio";
    }
    else {
        document.getElementById("vincitore").innerHTML = "Computer Vince";
    }


    // ^Quante partiete hanno vinto Giocatore e Computer
    for (let i = 0; i < variabile; i++) {

        if (numeroRandomicoUtente > numeroRandomicoComputer) {
            partiteVinteUtente.push(i);
            // console.log("utente arrey");
            // console.log(partiteVinteUtente);
            // console.log(partiteVinteUtente.length);
            document.getElementById("partiteVinteUtente").innerHTML= partiteVinteUtente.length;
        }
        else if (numeroRandomicoUtente == numeroRandomicoComputer) {

        }
        else {
            partiteVinteComputer.push(i);
            // console.log("computer arrey");
            // console.log(partiteVinteComputer);
            // console.log(partiteVinteComputer.length);
            document.getElementById("partiteVinteComputer").innerHTML= partiteVinteComputer.length;
        }


    }


    // console.log(variabile);


}


















