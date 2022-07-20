const getUsers = async function () {
  let response = await fetch("../data/developers.json");
  if (response.ok) {
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
      dev = data[i];
      if (dev.experience < 3 && dev.released_projects > 5) {
        let newItem = document.createElement("tbody");
        newItem.innerHTML = `<tr>
    <td data-label="Account" class="prenom">👨${dev.first_name}</td>
    <td data-label="Due Date" class="nom">${dev.last_name}</td>
    <td data-label="Amount" class="experience">${dev.experience}</td>
    <td data-label="Period" class="projet">${dev.released_projects}</td>
  </tr> `;
        document.querySelector(".tableau").appendChild(newItem);
      }
    }
  } else {
    console.error(response.status);
  }
};
getUsers();
