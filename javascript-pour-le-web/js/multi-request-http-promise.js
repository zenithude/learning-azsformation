Promise.all([get(url1), get(url2)])
    .then((resultats) => {
        return Promise.all([resultats, post(url3)]);
    })
    .then((tousLesResultats) => {
        // ici nous avons accompli nos requêtes
    });