import React, {Component} from 'react';
import Service from '../Service/service';
import Spinner from '../Spinner/spinner'

class PersonalDetails extends Component {
    servicePerson = new Service();
    state = {
        person: null,
        error: false
    };

    componentDidMount() {
        this.updatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.personDet !== prevProps.personDet) {
            this.updatePerson()
        }
    }

    updatePerson() {

        const {personDet} = this.props;
        if (!personDet) return;
        this.servicePerson
            .getPeople(personDet)
            .then((person) => {
                this.setState({person})
            })
            .catch(this.error)

    }

    error() {
        this.setState({
            error: true
        })
    }

    render() {
        const {person, error} = this.state;
        const content = error ? <MessageError/> : <Person person={person}/>;
        return (

            <div className="wrapAllPersonnalDet">
                {content}
            </div>

        )
    }


}

export default PersonalDetails;

const MessageError = () => {
    return (
        <React.Fragment>
            <span className="messagError">the person is in no reach zone</span>
        </React.Fragment>
    )
};


const Person = ({person}) => {

    if (!person) {
        return <Spinner/>
    }
    return (
        <React.Fragment>
            <img className="wrapAllPersonnalDet_img"
                 src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`} alt=""/>
            <div className="wrap_PersonnalDet_span">
                <h2>{person.name}</h2>
                <span className="PersonnalDet_span">{person.hairColor}</span>
                <span className="PersonnalDet_span">{person.birthYear}</span>
                <span className="PersonnalDet_span">{person.height}</span>
                <span className="PersonnalDet_span">{person.mass}</span>
            </div>
        </React.Fragment>
    )
};