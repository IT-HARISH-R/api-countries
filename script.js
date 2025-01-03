const url = 'https://restcountries.com/v3.1/all';
const datalist = [];

function feeddata(d) {
    datalist.push(...d);
}

function dispayAll() {
    const loading = document.getElementById('loading');
    loading.classList.add('hidden');
    const root = document.getElementById('root');
    root.innerHTML = '';
    datalist.sort((a,b)=> b.population - a.population).forEach(contry => {
        const cord = root.appendChild(document.createElement("div"));
        const img = cord.appendChild(document.createElement('img'));
        img.src = contry.flags.svg;
        const name = cord.appendChild(document.createElement('h2'));
        name.textContent = contry.name.common;
        name.classList.add("text-2xl", "font-bold", "text-center", "text-gray-800", "text-white", "dark:text-black", "mt-2");
        img.classList.add("w-64", "h-40", "object-cover", "rounded-lg", "shadow-lg", "mb-4");
        cord.classList.add("bg-gray-800", "dark:bg-white", "rounded-lg", "shadow-lg", "p-4", "flex", "flex-col", "items-center", "justify-center", "w-64", "h-80", "mx-auto", "my-4");
        const capital = cord.appendChild(document.createElement('p'));
        capital.textContent= `Capital: ${contry.capital}`;
        capital.classList.add("mt-2");
        const population = cord.appendChild(document.createElement("p"));
        population.textContent= `population: ${contry.population}`;
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

