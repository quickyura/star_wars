import React, {Component} from 'react';
import './All_index.scss';
import Service from '../src/Service/service';
import Header from './Header/header';
import Planets from './Planets/planets';
import ItemList from './ItemList/itemlist';
import PersonalDetails from './Personal-details/PersonalDetails'

class App extends Component {


    render() {
        return (
            <div className="start_Db">
                <Header/>
                <Planets/>
                <section>
                    <ItemList/>
                    <PersonalDetails/>
                </section>

            </div>
        )
    }
}

export default App;


