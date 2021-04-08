

window.onload = () => {
    const names = document.getElementById('names');
    const fonction = document.getElementById('fonction')
    fetch("http://localhost:3000/identity").then(function (response) {
        
        return response.json();
    }).then(function (data){        
        for (const iterator of data) {            
            names.textContent = iterator.nom + " " + iterator.prenom
            fonction.textContent = iterator.fonction;
        }
        
    });
}