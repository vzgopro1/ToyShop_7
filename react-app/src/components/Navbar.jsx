import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';

function Navbar() {
    //csrf token
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

    // HTTP request
    const [people2, setPeople2] = useState([])

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/serializers/Language1/',
        }).then(response => {
            setPeople2(response.data)
            console.log(response.data.login_text)
        })
    }, [])

    return(
        <div>

            {people2.map(q => (
                <header>
                    <div className="dws-menu2">
                        <div><a className="btn btn-outline-primary" href="#" style={{position : 'absolute', left: '80%', margin: '5px'}}>{q.signup_text}</a></div>
                        <a class="btn btn-outline-primary" href="login/" style={{position : 'absolute', left: '65.5%', margin: '5px'}}>{q.login_text}</a>
                        <form class="d-flex" style={{padding : '47px', position : 'absolute', top: '-80%', left : '-40px'}}>
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <a class="btn btn-outline-primary" href="#">Search</a>
                    </form>
                    </div>

                    <div className="dws-menu3">
                        <b style={{fontSize: '20px', position : 'absolute', left: '5%', margin: '10px'}}>ToyShop</b>

                    </div>


                    <nav class="dws-menu" style={{position: 'absolute', top: '0', left:'20%'}}>
                        <ul>
                        <li><a href="#"><i className="fa fa-home"></i>{q.menu_text1}</a></li>
                        <li><a href="#"><i className="fa fa-shopping-cart"></i>{q.menu_text3}</a>
                            <ul>
                            <li><a href="#">{q.category_text}</a>
                                <ul>
                                <li><a href="#">{q.category_name}</a></li>
                                <li><a href="#">{q.category_name2}</a></li>
                                <li><a href="#">{q.category_name3}</a></li>
                                </ul>
                            </li>
                            {/* <li><a href="#"></a>
                                <ul>
                                <li><a href="#">Камеры</a></li>
                                <li><a href="#">Компьютеры</a></li>
                                <li><a href="#">Телефоны</a>
                                    <ul>
                                    <li><a href="#">Samsung</a></li>
                                    <li><a href="#">Flf</a></li>
                                    <li><a href="#">Apple</a></li>
                                    </ul>
                                </li>
                                </ul>
                            </li> */}
                            <li><a href="#">text5</a></li>
                            <li><a href="#">text6</a></li>
                            <li><a href="#">text7</a></li>
                            </ul>
                        </li>
                        <li><a href="#">{q.menu_text2}</a>
                            <ul>
                            <li><a href="#">text10</a></li>
                            <li><a href="#">{q.category_name2}</a></li>
                            <li><a href="#">{q.category_name3}</a></li>
                            </ul>
                        </li>
                        <li><a href="#"><i className="fa fa-th-list"></i>test8</a></li>
                        <li><a href="#"><i className="fa fa-envelope-open"></i>text9</a></li>
                        </ul>
                    </nav>
                </header>
            ))}
        </div>
    )
}

export default Navbar