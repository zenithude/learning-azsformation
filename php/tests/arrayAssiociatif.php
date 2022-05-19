<?php 
/**
 * Méthode 1
 */

$fruitsPrice = array('Pomme'=>'2', 'Poire'=>'1.5', 'Banane'=>'3');

// ou Méthode 2

$legumesPrice = array();
$legumesPrice['Petits pois'] = "4";
$legumesPrice['Haricots vert'] = "2.5";
$legumesPrice['Poivrons'] = "1.85";

// Parcourir le tableaux $fruitsPrice avec une boucle foreach

foreach ($fruitsPrice as $i => $iPrice) {
    echo "Clé=" . $i . ", Valeur=" . $iPrice;
    echo "<br> Le prix au kilo pour les " . $i . " est de : " . $iPrice . "€";
    echo "<br>";
}

 ?>