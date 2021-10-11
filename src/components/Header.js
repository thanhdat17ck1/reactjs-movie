import React, { Component}  from 'react';
import axios from 'axios';
import logo from './../assets/img/logo.png';


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
        return(
            <div>
                <nav className="c-header">
                    <div className="c-header__logo">
                        <a href="#logo">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div class="c-header__nav">
                        <ul>
                            <li>
                                <a href="">
                                    Lịch Chiếu Phim
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Cụm Rạp
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Tin Tức
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Ứng Dụng
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header