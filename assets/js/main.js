/**
 * Code de gestion du formulaire
 */

const btnConnecter = document.querySelector("button.login100-form-btn"); // sélectionner le button submit
const emailInput = document.getElementsByName("email")[0]; // sélectionner le champs par son type email(cible premier résultat)
const passwordInput = document.getElementsByName("pass")[0];//sélectionner le champs par son type password(cible premier résultat)
const messageReponse = document.querySelector("div.message");//sélectionner le méssage de réponse 
const formulaire = document.forms[0]; //selectionner le premier élément (balise)form du body

btnConnecter.addEventListener('click', function(event){ // écouter l'évenement au click

    event.preventDefault();//désactiver le comportement par défaut de l'évenement 

    let email = emailInput.value;//on donne à email la valeur de l'email
    let password = passwordInput.value;//on donne à password la valeur du mot de passe saisi

    messageReponse.classList.add("message-visible");//Ajouter une classe message-visible au message de reponse 

    if(!verifierEmail(email)) //si fonction renvoie false
    {   
        messageReponse.textContent ="Email incorrect !"; //contenu du message
    }
    else if(password.length < 8) // si la taille du mot de passe < 8 
    {
        messageReponse.textContent ="Mot de passe  incorrect !"; //contenu du message

    }
    else //si non 
    {
        messageReponse.classList.remove("message-visible");// le message disparait
        formulaire.style.backgroundColor = "#a7ff3342";//Et le formulaire change de couleur
    };
    
});
