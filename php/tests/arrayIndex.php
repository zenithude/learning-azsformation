<?php  
/**
 * Assignement d'index automatique avec la méthode 
 * ci-dessous
 */

$fruits = array("Pomme", "Poire", "Banane", "Fraises");

// Pour compter le nombre d'éléments 
$nombreFruits = count($fruits);
echo 'il y a ' . $nombreFruits . ' dans notre tableaux';

// Parcourir le tableau avec une boucle for
for ($i = 0; $i < $nombreFruits; $i++) {
    echo $fruits[$i];
    echo '<br>';
}

/**
 * Assignement manuel des indices
 */

 $legumes = array();
 $legumes[0] = "Petits pois";
 $legumes[1] = "Haricots vert";
 $legumes[2] = "Poivrons";

 ?>