const url = "https://siaheguelable.github.io/wdd230/chamber/data/members.json";
/* this part is for grid and list in the Dom */

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const container = document.querySelector('#container');





async function getMyData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayinfo(data.members);
    } else {
        console.error("Failed to fetch data");
    }
}

const displayinfo = (members) => {

    container.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card'); // optional for styling

        const icon = document.createElement('img');
        icon.setAttribute('src', member.icon);
        icon.setAttribute('alt', `Logo of ${member.name}`);
        icon.setAttribute('loading', 'lazy');

        const name = document.createElement('p');
        name.textContent = member.name;

        const address = document.createElement('p');
        address.textContent = `Address: ${member.addresses}`;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;

        const email = document.createElement('p');
        email.textContent = `Email: ${member.email}`;

        const website = document.createElement('a');
        website.href = member.website;
        website.textContent = " Website";
        website.target = "_blank";

        // Add everything to the card
        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(email);
        card.appendChild(website);

        // Add card to container
        container.appendChild(card);
    });
};

gridButton.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");

    gridButton.classList.add("active");
    listButton.classList.remove("active");


});

listButton.addEventListener("click", showList) // example using defined function

function showList() {
    container.classList.add("list");
    container.classList.remove("grid");
    listButton.classList.add("active");
    gridButton.classList.remove("active");
};



getMyData();


