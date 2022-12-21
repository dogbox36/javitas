document.addEventListener('DOMContentLoaded', async() => {
    document.getElementById('szerzo-input').style.display = 'none'

    loadPlanet().then((planetss) => {
        console.log(planetss.planets)
    })

    document.getElementById('all-area').addEventListener('click', () => {
        document.getElementById('szerzo-input').style.display = 'none'

        loadPlanet().then((quoteList) => {
            let out = document.getElementById('output');
            let ul = document.createElement('ul');
            out.innerHTML = ''
            console.log(quoteList)

            quoteList.planets.sort((a, b) => a.name.localeCompare(b.name))
                .forEach(e => {
                    let li = document.createElement('li');
                    if (e.dwarf) {
                        li.innerHTML = 'Bolygó: <i>' + e.name + '</i><br>' + 'terület: ' + e.area
                    } else {
                        li.innerHTML = 'Bolygó: ' + e.name + '<br>' + 'terület: ' + e.area
                    }
                    ul.append(li)
                });
            out.append(ul)
        });
    });

    document.getElementById('kozt').addEventListener('click', async() => {
        let response = await fetch('../planets.json');
        console.log(response)
        let data = await response.json();
        let min = document.getElementById('min').value;
        let max = document.getElementById('max').value;
        let inbetween = [];
        inbetween.push(data.planets.filter(planet => planet.area >= min && planet.area <= max))
        console.log(inbetween)

        let ul = document.getElementById('inbetween');
        ul.textContent = '';
        for (let i of inbetween[0]) {
            let li = document.createElement('li');
            ul.appendChild(li);

            li.innerHTML = i.name;
        }
    });
    document.getElementById('atmero').addEventListener('click', async() => {
        let response = await fetch('../planets.json');
        console.log(response)
        let data = await response.json();
        let s = "";

        let diameters = [];

        for (let p of data.planets) {
            let D = Math.sqrt(p.area / 4 * Math.PI);
            diameters.push(D);
        }

        for (let d of diameters) {
            s += d + "; ";
        }
        document.getElementById('atmeroki').innerHTML = s;

    });

    document.getElementById('darabszam').addEventListener('click', async() => {
        let response = await fetch('../planets.json');
        console.log(response)
        let data = await response.json();

        let torpe = document.getElementById('torpe').checked;

        let sumA = 0;
        let filteredPlanets = [];

        filteredPlanets.push(data.planets.filter(planet => planet.dwarf == torpe))
        for (let fp of filteredPlanets[0]) {
            sumA += fp.area;
            console.log(fp.area)
        }
        document.getElementById('darab').value = sumA;

    });

});


const loadPlanet = async() => {
    let json = await (await fetch('../planets.json')).json()
    return json
}