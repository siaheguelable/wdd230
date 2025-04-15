async function loadSpotlights() {
    const response = await fetch('data/members.json');
    const members = await response.json();

    // Filter Silver and Gold
    const qualified = members.filter(m => m.level === 'silver' || m.level === 'gold');

    // Shuffle and pick 2-3
    const shuffled = qualified.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2);

    const container = document.getElementById('spotlights');
    container.innerHTML = '';

    selected.forEach(member => {
        const card = document.createElement('div');
        card.className = 'spotlight-card';
        card.innerHTML = `
      <img src="${member.logo}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.description}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadSpotlights);
