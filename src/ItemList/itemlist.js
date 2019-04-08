import React, {Component} from 'react';
import Service from '../Service/service'

class ItemList extends Component {
    serviceApi = new Service();

    state = {
        peopleList: null
    };

    componentDidMount() {

        this.serviceApi
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            });

    }
    fullDanie(){
        console.log('test')
    }
    //
    // returnItemLi(arr){
    //
    //     const r= arr.map((people)=>{
    //         console.log(people)
    //         // return(
    //         // <li className="listItem"
    //         //     key={people.id}
    //         //     onClick={this.fullDanie(people.id)}
    //         // >{people.name}</li>
    //         // )
    //     })
    //
    // };
    r=(i)=>{
        console.log(i);
     return  this.state.peopleList.map(i=>{
         return i
     })
    };


    render() {
        const {peopleList} = this.state;

      const s= this.r(peopleList);


        return (
            <ul className="wrap_list">
                {/*{itemLi}*/}
            </ul>
        )
    }
}

export default ItemList;