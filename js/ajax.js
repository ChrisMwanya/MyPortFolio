

window.onload = () => {

    // my identity
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

    //about Me

    const greating = document.getElementById('greating');
    const greatingFname = document.createElement('span');
    const welcomeMessage = document.createElement('span');
    const nextLine = document.createElement('br');
    const biography = document.createElement('p');

    fetch("http://localhost:3000/about").then(function (response) {
        
        return response.json();
    }).then(function (data){   
        console.log(data) ;    
        for (const iterator of data) {            
           greating.textContent = iterator.greating;

           greatingFname.textContent = iterator.greatingfname;
           greatingFname.classList.add('text--colored');

           welcomeMessage.textContent = iterator.welcome
           welcomeMessage.classList.add('text--normal')

           biography.classList.add('text');
           biography.textContent = iterator.bio;

           greating.appendChild(greatingFname);
           greating.appendChild(nextLine);
           greating.appendChild(welcomeMessage);
           greating.appendChild(biography);
        }
        
    });

    // techno

    

    fetch("http://localhost:3000/MyWorks").then(function (response) {
        
        return response.json();
    }).then(function (data){   
        console.log(data) ;    
        for (const iterator of data) {            
           greating.textContent = iterator.greating;

           greatingFname.textContent = iterator.greatingfname;
           greatingFname.classList.add('text--colored');

           welcomeMessage.textContent = iterator.welcome
           welcomeMessage.classList.add('text--normal')

           biography.classList.add('text');
           biography.textContent = iterator.bio;

           greating.appendChild(greatingFname);
           greating.appendChild(nextLine);
           greating.appendChild(welcomeMessage);
           greating.appendChild(biography);
        }
        
    });
}