

const dataUrl = 'https://siaheguelable.github.io/wdd230/chamber/data/members.json';

async function getdata() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);




    }

}


getdata();