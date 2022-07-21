const getUsers = async function () {
  let response = await fetch("../data/developers.json");
  if (response.ok) {
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
      dev = data[i];
      if (dev.experience < 3 && dev.released_projects > 5) {
        let newItem = document.createElement("tbody");
        newItem.innerHTML = `<tr>
    <td data-label="First-name" class="prenom">👨${dev.first_name}</td>
    <td data-label="Last-name" class="nom">${dev.last_name}</td>
    <td data-label="Experience(ans)" class="experience">${dev.experience}</td>
    <td data-label="Projets realises" class="projet">${dev.released_projects}</td>
  </tr> `;
        document.querySelector(".tableau").appendChild(newItem);
      }
    }
  } else {
    console.error(response.status);
  }
};
getUsers();
