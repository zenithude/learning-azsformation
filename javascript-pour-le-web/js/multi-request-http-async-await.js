async function requetes() {
    var getResultats = await Promise.all([get(url1), get(url2)]);
    var postResultat = await post(url3);
    return [getResultats, postResultat];
}

requetes().then((resultats) => {
    // ici nous avons accompli nos requêtes
});
