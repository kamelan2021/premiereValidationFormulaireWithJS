//nom doit etre inferieur ou egal à 60 caractère
// sinon  alert votre nom doit <=60 caractères

// l'email doit contenir @gmail.com ou @yahoo ou @ymail ou @outlook
//affiche votre email n'est pas au bon format

//les mot de pass doivent etre identique
// sinon affiche les mot de pass ne sont pas identique
function recuperer(){
    var nom = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var passwordConfirm = document.getElementById('passwordConfirm').value;

    //gestion du nom
    if(nom.length == ' '){
        var mNom = 'Vous devez saisir un nom';
    } else if( nom.length < 2){
        mNom = " votre nom doit comporter au moins deux caractères";
    }else if( nom.length > 60){
        mNom = ' Votre nom doit inférieur à 61 caractères ';
    }else{
        mNom = 'votre nom est valide';
    }

    //gestion de l'email
    var gmail = '@gmail.com' ;
    var yahoo = '@yahoo';
    var ymail =  '@ymail'; 
    var outlook =  '@outlook';

    var m_gmail = email.search(gmail);
    var m_yahoo = email.search(yahoo);
    var m_ymail = email.search(ymail);
    var m_outlook = email.search(outlook);

    if(m_gmail >= 1 || m_yahoo >= 1 || m_ymail >= 1 || m_outlook >= 1){
        mEmail = "Votre email est valide";
    }else if(email == ''){
        mEmail = "Vous devez entrer un email";
    }else{
        mEmail = "Votre email n'est pas au bon format";
    }

    //gestion du mot de pass
    if(password != '' && passwordConfirm != '' &&  password == passwordConfirm ){
        mPassword = "vos mots de pass sont identique";
    }else if(password == '' && passwordConfirm == ''){
        mPassword = "Vous devez obligatoirement entrer de mot de pass";
    }else{
        mPassword = "les mots de pass ne sont pas identique";
    }
    //message d'affichage
    
     alert(mNom + '\n' + mEmail + '\n' + mPassword);


    // alert(mEmail);
    // alert(mNom);
    
}
