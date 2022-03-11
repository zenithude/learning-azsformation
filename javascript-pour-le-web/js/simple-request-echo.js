fetch("https://mockbin.com/request")
    .then(function(result) {
        if (result.ok) {
            return result.json();
        }
    })
    .then(function(value) {
        console.log(value);
    })
    .catch(function(error) {
        console.log(error);
    });
    