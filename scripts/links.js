const baseURL = "https://github.com/siaheguelable/wdd230";
const linkURL = "https://github.com/siaheguelable/wdd230/links.json";

async function getLink() {
    const response = await fetch(linkURL);
    const data = await response.json();

    console.log(data);
    displayLink(data);

}
const displayLink = (weeks) => {
    weeks.forEach(week => {


    });
}


getLink();