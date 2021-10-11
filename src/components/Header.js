import React, { Component}  from 'react';
import axios from 'axios';

class Header extends Component {
    state = {
        persons: []
      }
      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            console.log(persons)
            this.setState({ persons });
          })
      }
    Showok(){
        alert("ok");
    }
    render(){
        var menus=[
            {
                id: 1,
                name: 'Home',
            },
            {
                id: 2,
                name: 'Contact',
            }
        ];
        var listMenus = menus.map((menu, index) => {
            return  <li key={ menu.id }>
                        <a href="{#}">{ menu.name }</a>
                    </li>
            
        });
        return(
            <div>
                <ul>
                    { listMenus }
                </ul>
                <button onClick={this.Showok}>
                    Click me
                </button>
                <ul>
                    { this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default Header