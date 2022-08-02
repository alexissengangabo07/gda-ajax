const tBody = document.querySelector('#tBody');
let filtredData = [];

(async function() {
    try {
        let getRequest = await fetch('../data/developers.json');
        let response = await getRequest.json();

        let filtredData = await response.filter(d => d.role == 'backend' && d.experience > 3);
        filtredData.sort((a, b) => a.first_name < b.first_name ? -1 : 1);

        filtredData.forEach(data => {
            tBody.innerHTML += `
                <tr>
                    <td>${data.first_name}</td>
                    <td>${data.last_name}</td>
                    <td>${data.birthday}</td>
                    <td>${data.role}</td>
                    <td>${data.experience}</td>
                    <td>${data.released_projects}</td>
                </tr>
            `;
        });
    } catch (err) {
        tableBody.innerHTML += err;
    }
})();