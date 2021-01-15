import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// or less ideally
import { Button, Carousel } from 'react-bootstrap';


function Coruselapp() {
    return(
        <div>
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
        </div>
    )
}

export default Coruselapp