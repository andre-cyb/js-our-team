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
const teamContainer = document.querySelector(".team-container");
let card = '<div class="team-card"><div class="card-image"><img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett" /></div><div class="card-text"><h3>Wayne Barnett</h3><p>Founder & CEO</p></div></div>';

teamContainer.innerHTML += card;
