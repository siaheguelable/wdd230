const container = document.querySelector('#container');
const url = "https://siaheguelable.github.io/wdd230/chamber/data/members.json";

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
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card'); // optional for styling

        const icon = document.createElement('img');
        icon.setAttribute('src', member.icon);
        icon.setAttribute('alt', `Logo of ${member.name}`);
        icon.setAttribute('loading', 'lazy');

        const name = document.createElement('h2');
        name.textContent = member.name;

        const address = document.createElement('p');
        address.textContent = `Address: ${member.information.addresses}`;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone
            }`;

        const email = document.createElement('p');
        email.textContent = `Email: ${member.information.email}`;

        const website = document.createElement('a');
        website.href = member.website;
        website.textContent = "Visit Website";
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

getMyData();
