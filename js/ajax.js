

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
    const greatingFname = document.createElement('span');
    const welcomeMessage = document.createElement('span');
    const nextLine = document.createElement('br');
    const biography = document.createElement('p');

    fetch("https://my-json-server.typicode.com/ChrisMwanya/MyPortFolio/about").then(function (response) {
        
        return response.json();
    }).then(function (data){   
            
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
    const containerTechno = document.getElementById('containerTechno');
    const containerIcons = document.createElement('div'); 
    // containerIcons.classList.add('centered');
    const line = document.createElement('div');
    line.classList.add('text--medium');
    line.classList.add('text--blue');
    // line.classList.add('section--row-centered');
    

    fetch("http://localhost:3000/technos").then(function (response) {
        
        return response.json();
    }).then(function (data){   
        
        for (const iterator of data) {           
            const elements = Object.values(iterator);
            for (const element of elements) {
                const icon = document.createElement('i');
                icon.classList.add('fab');
                // icon.classList.add('image');
                icon.classList.add('section');
                icon.classList.add('section--margin-bottom');
                let classElement = "fa-"
                switch (element) {
                    case "Html": classElement += "html5"
                        
                        break;
                    case "Css": classElement += "css3"
                        
                        break;
                    case "Sass": classElement += "sass"
                        
                        break;
                    case "Javascript": classElement += "js-square"
                        
                        break;
                    case "database": classElement += "database"
                        
                        break;
                    default:
                        break;
                }
                icon.classList.add(classElement);
                line.appendChild(icon);
            }
            containerIcons.appendChild(line);
            // containerTechno.appendChild(containerIcons);

        }
        
    });
}