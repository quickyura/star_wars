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
        return res.results.map(this._catalog)

    }

    async getPeople(id) {
        const people = this.getResorce(`/people/${id}/`);
        return this._catalog(people)
    }

    async getAllPlanets() {
        const res = await  this.getResorce('/planets/');
        return res.results.map(this._catalogPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResorce(`/planets/${id}/`);
        return this._catalog(planet);
    }

    async getAllStarships() {
        const res = await  this.getResorce('/starships/');
        return res.results.map(this._catalog)
    }

    async getStarships(id) {
        const ships = this.getResorce(`/starships/${id}/`);
        return this._catalog(ships)
    }


    _catalog(planet) {

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