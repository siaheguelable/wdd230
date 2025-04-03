const linkURL = "https://siaheguelable.github.io/wdd230/data/links.json";

async function getLink() {
    try {
        const response = await fetch(linkURL);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        console.log(data);
        displayLink(data);
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

const displayLink = (weeks) => {
    const section = document.querySelector(".sections"); // Ensure this exists in your HTML

    weeks.forEach(week => {
        const weekCard = document.createElement("section");
        weekCard.classList.add("card");

        // Add the week title
        const title = document.createElement("h2");
        title.textContent = week.week;

        // Create the list
        const ul = document.createElement("ul");

        week.links.forEach(link => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = link.name;
            a.href = link.url;
            li.appendChild(a);
            ul.appendChild(li);
        });

        // Append to the section
        weekCard.appendChild(title);
        weekCard.appendChild(ul);
        section.appendChild(weekCard);
    });
}

getLink();
