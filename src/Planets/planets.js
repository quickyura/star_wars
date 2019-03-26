import React, {Component} from 'react';
import Service from '../Service/service'


class Planets extends Component {
    service = new Service();
    state = {
        planet:{}

    };
    constructor() {
        super();
        this.loadPlenets()

    }

    loadPlenets() {
        const id = Math.floor(Math.random() * 20) + 2;
        this.service
            .getPlanet(id)
            .then((planet)=>this.setState({planet}))
    }

    render() {
        console.log(this.state)
        const { planet:{id,name, population, rotationPeriod, diameter}} = this.state;

        return (
            <div className="wrapAllPlanet">
                <img className="planet_img" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
                <div className="wrap_planet_span">
                    <h2>{name}</h2>
                    <span className="planet_span">population:<span>{population}</span></span>
                    <span className="planet_span">rotationPeriod:<span>{rotationPeriod}</span></span>
                    <span className="planet_span">diameter:<span>{diameter}</span></span>

                </div>
            </div>
        )
    }
}

export default Planets;