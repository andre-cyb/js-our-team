// ricreare le card come da esempio su HTML
// creare degli array di oggetti, dove gli oggetti sarano i membri del team con name, role, image

//array(team) con oggetti(persone)
let arrayTeam =
    [
        {
            name: "Wayne Barnett",
            role: "Founder & CEO",
            image: "img/wayne-barnett-founder-ceo.jpg"
        },
        {
            name: "Angela Caroll",
            role: "Chief Editor",
            image: "img/angela-caroll-chief-editor.jpg"
        },
        {
            name: "Walter Gordon",
            role: "Office Manager",
            image: "img/walter-gordon-office-manager.jpg"
        },
        {
            name: "Angela Lopez",
            role: "Social Media Manager",
            image: "img/angela-lopez-social-media-manager.jpg"
        },
        {
            name: "Scott Estrada",
            role: "Developer",
            image: "img/scott-estrada-developer.jpg"
        },
        {
            name: "Barbara Ramos",
            role: "Graphic Designer",
            image: "img/barbara-ramos-graphic-designer.jpg"
        },
    ];

//creare elemento card in Html






for (let i = 0; i < arrayTeam.length; i++) {
    let persona = arrayTeam[i];
    console.log(persona);

    for (let key in persona) {

    }
    const teamContainer = document.querySelector(".team-container");
    let card = ` <div class="team-card">
                    <div class="card-image">
                        <img src="${persona.image}" alt="Wayne Barnett" />
                    </div>
                    <div class="card-text">
                        <h3>${persona.name}</h3>
                        <p>${persona.role}</p>
                    </div>
                </div> `;

    teamContainer.innerHTML += card;

    console.log(persona.name);
    console.log(persona.role);
    console.log(persona.image);
}








let newName = document.getElementById("name");
let newRole = document.getElementById("role");
let newImage = document.getElementById("image");

/* comsole.log(newName.value); */

const btnForm = document.getElementById("addMemberButton");

btnForm.addEventListener("click", function () {

    newName.value;
    newRole.value;
    newImage.value;
    /* console.log(newName.value); */

    let card = ` <div class="team-card">
                    <div class="card-image">
                        <img src="${newImage.value}" alt="Wayne Barnett" />
                    </div>
                    <div class="card-text">
                        <h3>${newName.value}</h3>
                        <p>${newRole.value}</p>
                    </div>
                </div> `;


    teamContainer.innerHTML += card;

});