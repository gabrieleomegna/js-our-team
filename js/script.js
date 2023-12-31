const ourTeam = [{
    nome : 'Wayne Barnett',
    ruolo : 'Founder & CEO',
    image : 'wayne-barnett-founder-ceo.jpg',
},
{
    nome : 'Angela Caroll',
    ruolo : 'Chief Editor',
    image : 'angela-caroll-chief-editor.jpg',
},
{
    nome : 'Walter Gordon',
    ruolo : 'Office Manager',
    image : 'walter-gordon-office-manager.jpg',
},
{
    nome : 'Angela Lopez',
    ruolo : 'Social Media Manager',
    image : 'angela-lopez-social-media-manager.jpg',
},
{
    nome : 'Scott Estrada',
    ruolo : 'Developer',
    image : 'scott-estrada-developer.jpg',
},
{
    nome : 'Barbara Ramos',
    ruolo : 'Graphic Designer',
    image : 'barbara-ramos-graphic-designer.jpg',
},]

const outputElement = document.querySelector('div#output');

for (let i = 0; i < ourTeam.length; i++) {
    const teamElement = ourTeam[i];
    console.log(teamElement.nome);
    console.log(teamElement.ruolo);
    console.log(teamElement.image);
    
    outputElement.innerHTML += `${teamElement.nome} , ${teamElement.ruolo} , ${teamElement.image} <br>`;
    
    let imageElement = document.createElement('img');
    imageElement.src = `./img/${teamElement.image}`;
    outputElement.appendChild(imageElement);
}