<?php
/**
* Ajoute notre nouveau menu dans le panneau d'administration
**/

// Ajoute un hook d'action pour exécuter la function mp_Add_My_Admin_Link
add_action( "admin_menu", "mp_Add_My_Admin_Link" );

// Ajoute un nouveau menu de 1er niveau au panneau d'administration
function mp_Add_My_Admin_Link() {
    add_menu_page(
        "Description", // Titre de la page
        "Mon plugin", // Texte à afficher dans le menu 
        "manage_options", // Droits requis pour voir le lien
        "monplugin/includes/mp-acp-page.php" // fichier a afficher quand on clique sur le lien
    );
}

