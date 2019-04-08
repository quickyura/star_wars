import React, {Component} from 'react';
import './All_index.scss';
import Service from '../src/Service/service';
import Header from './Header/header';
import Planets from './Planets/planets';
import ItemList from './ItemList/itemlist';
import PersonalDetails from './Personal-details/PersonalDetails'

class App extends Component {
    state = {
        personalInformation: 1
    };
    fullDanie = (id) => {
        console.log(this.state.personalInformation)
        this.setState({
            personalInformation: id
        });

    };

    render() {
        return (
            <div className="start_Db">
                <Header/>
                <Planets/>
                <section>
                    <ItemList fullDanie={this.fullDanie}/>
                    <PersonalDetails personDet = {this.state.personalInformation}/>
                </section>

            </div>
        )
    }
}

export default App;


