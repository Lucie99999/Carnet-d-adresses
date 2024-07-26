let contacts = [];
const nom = prompt("Quel est votre nom ?");
const prenom = prompt("Quel est votre prenom ?");
const telephone = prompt("Quel est votre numéro de téléphone?");
console.log(nom, prenom, telephone);

import {Contact} from "assets/js/models/Contact.js";

function ajouterContact(nom, prenom, telephone) {

    /**
     * new_contact est une instance de Contact.
     * @type {Contact}
     */
    const new_contact=new Contact(nom, prenom, telephone);

}

ajouterContact(nom, prenom, telephone);

function afficherContacts(){
    //à compléter
}

function rechercherContact(nom){

}

function supprimerContact(index){

}