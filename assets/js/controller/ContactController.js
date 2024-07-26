let listContacts = [];
const nom = prompt("Quel est votre nom ?");
const prenom = prompt("Quel est votre prenom ?");
const telephone = prompt("Quel est votre numéro de téléphone?");

import {Contact} from "assets/js/models/Contact.js";

function ajouterContact(nom, prenom, telephone) {

    /**
     * newContact est une instance de Contact.
     * @type {Contact}
     */
    const newContact=new Contact(nom, prenom, telephone);
    listContacts.push(newContact);
}

//ajouterContact(nom, prenom, telephone);

function afficherContacts(){
    for (let i=0; i<listContacts.length; i++) {
        console.log("Contact n°"+i+":"+listContacts[i]);
    }
}

function rechercherContact(nom){
    for (let i=0; i<listContacts.length; i++) {
        if ((listContacts[i].nom==nom)||(listContacts[i].prenom==nom)){
            console.log(listContacts[i]);
        }
    }
}

function supprimerContact(index){
   listContacts.splice(index,1);
}