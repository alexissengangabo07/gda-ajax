


fetch("../data/developers.json")
    .then(reponse => reponse.json()
    )
    .then((tableau) => {
let tab=tableau;
for (let i = 0; i < tab.length; i++) {
    if (tab[i].released_projects >10) {
        console.log(tab[i].first_name); 
        let afficheTab = document.createElement('tbody');
        afficheTab.innerHTML = ` <tr>
        <td data-th="Nom" id="nom">${tab[i].first_name}</td>
        <td  data-th="POST-NOM" id="post">${tab[i].last_name}</td>
        <td  data-th="PROJET" id="projet">${tab[i].released_projects}</td>
    </tr>`;
    document.querySelector('.mytab').appendChild(afficheTab);
    }
   
}

    })
    