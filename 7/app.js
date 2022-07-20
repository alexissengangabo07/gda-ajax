const elt = (value)=>{
    return Object.assign(document.createElement("td"), {textContent: value})
}

fetch("../data/developers.json")
    .then(Response => Response.json())
    .then(datas => {
            let maxProjects =0;
                 for (let i = 0; i < datas.length; i++) {
                       
                    if(maxProjects<datas[i].released_projects){
                            maxProjects = datas[i].released_projects;
                    }
                 }
        for (let i = 0; i < datas.length; i++) {
            if(datas[i].released_projects === maxProjects){
                const ligne = document.createElement("tr");
                  ligne.append(

                    elt(i+1),
                    elt(datas[i].first_name),
                    elt(datas[i].last_name),
                    elt(datas[i].birthday),
                    elt(datas[i].role),
                    elt(datas[i].experience),
                    elt(datas[i].released_projects)
                    )
                document.querySelector("table").appendChild(ligne);
            }
        }
    });