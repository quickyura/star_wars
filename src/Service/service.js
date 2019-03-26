class Service {
    _base = ' https://swapi.co/api';

    async getResorce(url) {
        const res = await  fetch(` ${this._base}${url}`);

        if (!res.ok) {
            throw new Error(`oppaa ${url}`)
        }

        return await res.json();
    };

    async getAllPeople() {
        const res = await this.getResorce(`/people/`);
        return res.results

    }

    getPeople(id) {
        return this.getResorce(`/people/${id}/`)
    }

    async getAllPlanets() {
        const res = await  this.getResorce('/planets/');
        console.log(this._catalogPlanet())
        return res.results.map(this._catalogPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResorce(`/planets/${id}/`);
        return this._catalogPlanet(planet);
    }

    async getAllStarships() {
        const res = await  this.getResorce('/starships/');
        return res.results.map(this._catalogPlanet)
    }

    async getStarships(id) {
        const ships = this.getResorce(`/starships/${id}/`);
        return this._catalogPlanet(ships)
    }


    _catalogPlanet(planet) {

        return {
            id: this.redExp(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }

    }

    redExp = (item) => {
        const idReg = /\/([0-9]*)\/$/;

        return item.url.match(idReg)[1]
    }
}

export default Service;