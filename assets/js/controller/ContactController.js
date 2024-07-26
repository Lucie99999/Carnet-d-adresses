let listContacts = [];
const nom = prompt("Quel est votre nom ?");
const prenom = prompt("Quel est votre prenom ?");
const telephone = prompt("Quel est votre numéro de téléphone?");

import {Contact} from "assets/js/models/Contact.js";

function ajouterContact(nom, prenom, telephone) {

    /**
     * new_contact est une instance de Contact.
     * @type {Contact}
     */
    const new_contact=new Contact(nom, prenom, telephone);
    listContacts.push(new_contact);
}

ajouterContact(nom, prenom, telephone);

function afficherContacts(){
    //à compléter
}

function rechercherContact(nom){

}

function supprimerContact(index){

}