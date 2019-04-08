import React, {Component} from 'react';
import Service from '../Service/service'
import Spinner from '../Spinner/spinner'

class ItemList extends Component {
    serviceApi = new Service();

    state = {
        peopleList: null,
        error: false


    };

    componentDidMount() {

        this.serviceApi
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
            .catch(this.error);

    }

    error = () => {
        this.setState({
            error: true
        })
    };



    returnItemLi(peopleList) {
        return peopleList.map((people) => {
            return (
                <li className="listItem"
                    key={people.id}
                    onClick={()=>this.props.fullDanie(people.id)}
                >{people.name}
                </li>
            )
        })
    };


    render() {
        const {peopleList,error} = this.state;
        if (!peopleList) {
            return <Spinner/>
        }
        const list = this.returnItemLi(peopleList);
        const mesError = error ? <MessageError error={error}/>: null;
        return (
            <ul className="wrap_list">
                {mesError}
                {list}
            </ul>
        )
    }
}

const MessageError = () => {
    return (
        <React.Fragment>
            <li className="messagError">the person is in no reach zone</li>
        </React.Fragment>
    )
}
export default ItemList;