import React, {Component} from 'react';
import Service from '../Service/service'
import Spinner from '../Spinner/spinner'

class Planets extends Component {
    service = new Service();
    state = {
        planet: {},
        loader: true,
        error: false

    };


    componentDidMount(){
        this.loadPlenets();
        //setInterval( this.loadPlenets,6000);
    }

    error = () => {
        this.setState({
            error: true,
            loader: true
        })
    };

    loadPlenets =()=>{
        const id = Math.floor(Math.random() * 20) + 2;
        this.service
            .getPlanet(id)
            .then((planet) => this.setState({planet, loader: false}))
            .catch(this.error)
    };

    render() {
        const {planet, loader, error} = this.state;
        const messagError = error ? <MessageError error={error}/> : null;
        const content = loader ? <Spinner/> : <Planet planet={planet}/>;
        return (
            <div className="wrapAllPlanet">
                {messagError}
                {content}
            </div>
        )
    }
}

export default Planets;


const MessageError = (error) => {
    return (
        <React.Fragment>
            <span className="messagError">the planet is in no reach zone</span>
        </React.Fragment>
    )
};

const Planet = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;
    return (
        <React.Fragment>
            <img className="planet_img" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            <div className="wrap_planet_span">
                <h2>{name}</h2>
                <span className="planet_span">population:<span>{population}</span></span>
                <span className="planet_span">rotationPeriod:<span>{rotationPeriod}</span></span>
                <span className="planet_span">diameter:<span>{diameter}</span></span>

            </div>
        </React.Fragment>
    )
};