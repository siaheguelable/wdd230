

const url = "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml";

async function getData() {
    const response = await fetch(url);
    const data = await response.text();
    console.log(data);

}

getData();