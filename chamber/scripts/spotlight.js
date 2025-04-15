document.addEventListener('DOMContentLoaded', () => {
    const membersUrl = 'https://siaheguelable.github.io/wdd230/chamber/data/members.json'; // Path to your JSON file with members data
    const spotlightContainer = document.getElementById('spotlightContainer');
    const meetGreetBanner = document.getElementById('meetGreetBanner');
    const closeBannerBtn = document.getElementById('closeBanner');

    // Load and display spotlight members
    fetch(membersUrl)
        .then(res => res.json())
        .then(data => {
            const qualifiedMembers = data.members.filter(member =>
                ['silver', 'gold'].includes(member.level.toLowerCase())
            );

            // Randomly select 2-3 qualified members
            const selectedMembers = qualifiedMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

            selectedMembers.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.classList.add('member');
                memberDiv.innerHTML = `
          <h3>${member.name}</h3>
          <p>${member.description}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
        `;
                spotlightContainer.appendChild(memberDiv);
            });
        });

    // Display banner on Monday, Tuesday, or Wednesday if not dismissed
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ...
    const bannerDismissed = localStorage.getItem('bannerDismissed');

    if ([1, 2, 3].includes(today) && !bannerDismissed) {
        meetGreetBanner.classList.remove('hidden');
    }

    // Close the banner when the close button is clicked
    closeBannerBtn.addEventListener('click', () => {
        meetGreetBanner.classList.add('hidden');
        localStorage.setItem('bannerDismissed', 'true');
    });
});
