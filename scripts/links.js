const href = document.querySelector('a');

const linkURL = "https://siaheguelable.github.io/wdd230/data/links.json"; // Your JSON file URL

async function getLink() {
    try {
        const response = await fetch(linkURL);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        console.log(data);
        displayLink(data.weeks); // Accessing the 'weeks' array
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

const displayLink = (weeks) => {
    const listItems = document.querySelectorAll(".sections ul li"); // Select all existing <li> elements

    weeks.forEach((week, index) => {
        if (listItems[index]) { // Ensure there's a matching <li> element
            const anchor = listItems[index].querySelector("a"); // Find the <a> tag inside <li>

            if (anchor && week.link.length > 0) {
                anchor.href = week.link[0].url; // Set the actual link
                anchor.innerHTML = `<span>${week.link[0].title}</span>`; // Wrap the text inside <span>
            }
        }
    });
}

getLink();
