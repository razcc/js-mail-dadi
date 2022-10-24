let mail = ["pippo@gmail.com", "pinco@gmail.com", "pallino@gmail.com"];


const inputMail = document.getElementById("exampleInputEmail1");


function iscriviti() {
    let valueMail = inputMail.value;
    // console.log(valueMail);

    for (let i=0; i < mail.length; i++) {
        // console.log(mail[i]);

        if(mail[i] == valueMail){
            console.log("Successo");
        }
        else{
            console.log("Fail")
        }
    }
}













