import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

    const [people, setPeople] = useState([])
    const [people2, setPeople2] = useState([])
    const BuyText = 'Buy now'
    const LoginText = 'login'

    useEffect(() => {
      axios({ 
        method: 'GET',
        url: 'http://127.0.0.1:8000/serializers/Product/',
      }).then(response => {
        setPeople(response.data)
      })
      axios({
        method: 'GET',
        url: 'http://127.0.0.1:8000/serializers/Language1/',
      }).then(response => {
        setPeople2(response.data)
        console.log(response.data.login_text)
      })
    }, [])
      return (
        <div className="App">




            {people.map(p => (

            <div className="App">
              {console.log(p.title)}


               <div className="productsHis"> 
                
                <div className="productHistory">{p.history}</div>
                {/* <div style={{Left : '340px', border: '1px solid #000', width: '1px', height: '380px'}}></div> */}
                
                {/* <div className="products">
                </div> */}


                
                {/* <div style={{ color: "white"}} className="productFromAge"> {p.fromAge} </div>
                <div style={{ color: "white"}} className="productMainMaterial"> {p.mainMaterial} </div> */}
                
                
                {/* <div className="ramka"></div>    */}
              </div>

              <div className="productsInfo">
                <div className="productImage">{ /* <img/> */ } IMG</div>
                <div className="productTitle"> {p.title} </div>
                <div className="productPrice"> <b>{p.price}</b> ֏</div>
                <div className="buyButton"><a className="btn btn-outline-primary" href="#">{BuyText}</a></div>
              </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


            </div>
            ))}

            {people2.map(q => (
    		    <header>
              <div className="dws-menu2">
                <div><a className="btn btn-outline-primary" href="#" style={{position : 'absolute', left: '80%', margin: '5px'}}>{q.signup_text}</a></div>
                <a class="btn btn-outline-primary" href="#" style={{position : 'absolute', left: '65%', margin: '5px'}}>{q.login_text}</a>
              </div>

              <div className="dws-menu3">
                <b style={{fontSize: '20px', position : 'absolute', left: '5%', margin: '10px'}}>ToyShop</b>
              </div>


              <nav class="dws-menu" style={{position: 'absolute', top: '0', left:'30%'}}>
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
      );
  }

export default App;


// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

// const [people, setPeople] = useState([])

// useEffect(() => {
//   axios({ 
//     method: 'POST',
//     url: 'http://127.0.0.1:8000/serializers/Trade/',
//     data: {
//       status: 'processing',
//       product: 1
//     }
//   }).then(response => {
//     setPeople(response.data)
//   })
// }, [])
//   return (
//     <div className="App">

//         {people.map(p => (
//           <div>
//             <div class="naver">{ p.title }<small class="text-muted"></small></div>
//             <div class="image"></div>
//             <div class="description">{ p.description }</div>
//           </div>
//         ))}
//     </div>
// );