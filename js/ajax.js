

window.onload = () => {

    // my identity
    const names = document.getElementById('names');
    const fonction = document.getElementById('fonction')

    fetch("https://my-json-server.typicode.com/ChrisMwanya/MyPortFolio/identity").then(function (response) {
        
        return response.json();
    }).then(function (data){        
        for (const iterator of data) {            
            names.textContent = iterator.nom + " " + iterator.prenom
            fonction.textContent = iterator.fonction;
        }
        
    });

    //about Me

    const greating = document.getElementById('greating');

    fetch("https://my-json-server.typicode.com/ChrisMwanya/MyPortFolio/about").then(function (response) {
        
        return response.json();
    }).then(function (data){        
        for (const iterator of data) {            
           greating.textContent = iterator.biography
        }
        
    });
}