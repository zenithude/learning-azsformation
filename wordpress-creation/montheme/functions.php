<?php
/**
* Nous ajoutons une fonction pour mettre en queue normalize.css
* Le premier paramètre est le nom pour la feuille de style
* Le second est l'URL, ici nous utilisons un fichier en ligne
**/

function add_normalize_CSS() {
    wp_enqueue_style("normalize-style", "https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css");
}

 
/**
* Nous ajoutons ensuite une fonction qui permettra d'ajouter 
* une zone de wiget dans la sidebar
**/
function add_widget_Support() {
    register_sidebar( array(
        "name" => "Sidebar",
        "id" => "sidebar",
        "before_widget" => "<div>",
        "after_widget" => "</div>",
        "before_title" => "<h2>",
        "after_title" => "</h2>",
    ) );
}
// Nous ajoutons un Hook pour initialiser et utiliser la fonction
add_action("widgets_init", "add_widget_Support");

/**
* Nous ajoutons ensuite une fonction qui permettra d'utiliser la fonction
* Apparence -> Menu dans la zone d'administration dans le menu apparence
**/

function add_Main_Nav() {
    register_nav_menu("header-menu", __( "Header Menu" ));
}
// Ajout du hook 
add_action("init", "add_Main_Nav");
