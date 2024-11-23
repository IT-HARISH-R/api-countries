const url = 'https://restcountries.com/v3.1/all';
const datalist = [];

function feeddata(d) {
    datalist.push(...d);
}

function dispayAll() {
    const root = document.getElementById('root');
    root.innerHTML = '';
    // flags[1];
    datalist.forEach(contry => {
        const cord = root.appendChild(document.createElement("div"));
        const img = cord.appendChild(document.createElement('img'));
        img.src = contry.flags.svg;
        const name = cord.appendChild(document.createElement('h2'));
        name.textContent = contry.name.common;
        name.classList.add("text-2xl", "font-bold", "text-center", "text-gray-800", "text-white", "dark:text-black", "mt-2");
        img.classList.add("w-64", "h-40", "object-cover", "rounded-lg", "shadow-lg", "mb-4");
        cord.classList.add("bg-gray-800", "dark:bg-white", "rounded-lg", "shadow-lg", "p-4", "flex", "flex-col", "items-center", "justify-center", "w-64", "h-80", "mx-auto", "my-4");
    })


}

async function getData(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}

getData(url).then(data => {
    feeddata(data);
    console.log(data);
    console.log(datalist);
    dispayAll();
})

