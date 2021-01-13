import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import logo from './logo.svg';
import trt from './papuk_xaxaliq.jpg'
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// or less ideally
import { Button, Carousel } from 'react-bootstrap';

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



            <br></br><br></br><br></br><br></br><Carousel>
              <Carousel.Item>
                <div >
                <img
                  className="d-block w-100"
                  src="https://umslon.ru/image/cache/09dc5f296e1a60643dcb0813cbd9b040.jpg"
                  alt="First slide"
                  style={{padding: '20px', height : '620px'}}
                />
                </div>
                <Carousel.Caption>
                  <h3>Payte Mec Tun</h3>
                  <p>Payte mec tun@ hatuk paytic</p>           
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://rubankov.ru/workshop/wp-content/uploads/2018/01/kurs-wooden-toys_0.jpg"
                  alt="Third slide"
                  style={{padding: '20px', height: '620px'}}
                />

                <Carousel.Caption>
                  <h3>Payte Inqnatir</h3>
                  <p>Payte Inqnatir patrastvac hatuk paytic</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://md-eksperiment.org/images/posts/3a1bd685-3076-4213-9e5e-89a506e323d8.jpeg"
                  alt="Third slide"
                  style={{padding: '20px', height: '620px'}}
                />

                <Carousel.Caption>
                  <h3>Payte avto meqena </h3>
                  <p>Payte avto meqena patrastvac hatuk paytic</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

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
                <a class="btn btn-outline-primary" href="#" style={{position : 'absolute', left: '65.5%', margin: '5px'}}>{q.login_text}</a>
                <form class="d-flex" style={{padding : '47px', position : 'absolute', top: '-80%', left : '0'}}>
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

            {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={logo} class="d-block w-100" alt="wdw"/>
                </div>
                <div class="carousel-item">
                  <img src={trt} class="d-block w-100" alt="dwd"/>
                </div>
                <div class="carousel-item">
                  <img src={logo} class="d-block w-100" alt="ddw"/>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </a>
            </div> */}






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