/**
 * Fonctions de travail
 */

const verifierEmail = (email) => {//fonction de vérification de l'adresse email
    
    let resultat = /\w+@\w+\.\w+/;// Expression régulière de vérification de l'email
    let test = resultat.test(email);//vérifier le paramettre 

    if(test)
        return true;
    else
        return false;
};
