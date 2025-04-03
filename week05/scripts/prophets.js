const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector('#card');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    /*console.table(data.prophets);*/

    displayProphets(data.prophets);

}

const displayProphets = (prophets) => {


    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement("img");
        // Build the h2 content out to show the prophet's full name

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        // Build the image portrait by setting all the relevant attributes

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');


        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);




    });

}


getProphetData();
