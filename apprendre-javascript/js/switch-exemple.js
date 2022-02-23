const fruit = "Banane"
/**
 * En modifiant la valeur de fruit vous verrez comment le switch est parcouru
 * selon la valeur que vous choisirez.
 */

switch (fruit) {
  case "Orange":
    console.log("Les oranges coutent 2€ le kilo");
    break;
  case "Mangue":
      console.log("Les mangues coutent 3€ le kilo");
  case "Pomme":
    console.log("Les pommes sont en promotions à 1.50€ le kilo");
    break;
  default:
    console.log(`Désolé nous n'avons plus de ${fruit} en stock.`);
}
