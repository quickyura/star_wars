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
      return res.results.map(this._catalogPeople);

    }

    async getPeople(id) {
         const people = await this.getResorce(`/people/${id}/`);
         return this._catalogPeople(people)
    }

    async getAllPlanets() {
        const res = await  this.getResorce('/planets/');
        return res.results.map(this._catalogPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResorce(`/planets/${id}/`);
        return this._catalogPlanet(planet);
    }

    async getAllStarships() {
        const res = await this.getResorce('/starships/');
        return res.results.map(this._catalogStarships)
    }

    async getStarships(id) {
        const ships = this.getResorce(`/starships/${id}/`);
        return this._catalogStarships(ships)
    }
    _catalogPeople =(people)=>{
        return{
            id: this.redExp(people),
            name:people.name,
            mass:people.mass,
            gender:people.gender,
            birthYear:people.birth_year,
            hairColor:people.hair_color,
            height:people.height

        }
    };

    _catalogPlanet=(planet)=> {

        return {
            id: this.redExp(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }

    };

    _catalogStarships=(ships)=>{
        return{
            id: this.redExp(ships),
            name: ships.name,
            cargoCapacity:ships.cargo_capacity,
            consumables:ships.consumables,
            cost_in_credits:ships.cost_in_credits,
            crew:ships.crew,
            length:ships.length,
            maxAtmospheringSpeed:ships.max_atmosphering_speed,
            passengers:ships.passengers

        }

    };

    redExp = (item) => {
        const idReg = /\/([0-9]*)\/$/;

        return item.url.match(idReg)[1]
    }
}

export default Service;