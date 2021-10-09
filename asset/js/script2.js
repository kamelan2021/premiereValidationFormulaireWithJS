





let password = document.getElementById('password');
let messagePassword = document.getElementById('passwordMessage');

let passConf = document.getElementById('passwordConfirm');


let myForm = document.getElementById('myForm');


myForm.addEventListener('submit', function(e){
    //control sur le nom
    let nom = document.getElementById('name').value;
    let messageNom = document.getElementById('mes-nom');
    nomRegex = /^[a-zA-Z-'éè\s]+$/;
    if(nom.trim() === ""){
        messageNom.innerText = "Veillez svp saisir votre nom"
        e.preventDefault();
    } else if(nomRegex.test(nom) === false){
        messageNom.innerText = "Le nom est invalide";
        e.preventDefault();
    }else if(nom.trim().length  < 2){
        messageNom.innerText = "Le nom doit comporter au moins deux caractères";
        e.preventDefault();
    }else{

    }
    //control sur l'email
    let email = document.getElementById('email').value;
    let messageEmail = document.getElementById('mes-email');
    let gmail = "@gmail.com";
    let yahoo = "@yahoo.com";
    let mail = "@ymail.com";
    let outlook = "@outlook";


    
    
    if(email === ""){
        messageEmail.textContent = "Vous devez entrer un email";
        e.preventDefault();
    } else if (email.indexOf(gmail) <= 0 && email.indexOf(yahoo) <=0 && email.indexOf(mail) <=0 && email.indexOf(outlook) <=0 ){
        messageEmail.textContent = "l'email n'est pas au bon format";
        e.preventDefault();
    }



    
    let password = document.getElementById('password').value;
    let messagePassword = document.getElementById('passwordMessage');
    if(password === "" ){
        messagePassword.textContent = "le mot de pass doit etre saisi";
        e.preventDefault();
    }else if(password.length < 8){
        messagePassword.textContent = "le mot de pass doit avoir au moins huit caractères";
        e.preventDefault();
    }

    let passConf = document.getElementById('passwordConfirm').value;
    let passwordMessageconf = document.getElementById('passwordMessageconf');
    if(passConf === "" ){
        passwordMessageconf.textContent = "le mot de pass de confirmation doit etre saisi";
        e.preventDefault();
    }else if(passConf.length < 8){
        passwordMessageconf.textContent = "le mot de pass de confirmation doit avoir au moins huit caractères";
        e.preventDefault();
    }

    if(password !== "" && passConf !== "" && password !== passConf ){
        messagePassword.textContent = "les mots de pass ne correspondent pas";
        passwordMessageconf.textContent = "les mots de pass ne correspondent pas";
        e.preventDefault();
    }
    
    
});