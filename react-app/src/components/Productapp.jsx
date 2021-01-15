import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';

function Productapp(props) {
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

    const [people, setPeople] = useState([])
    const BuyText = 'Buy now'
    useEffect(() => {
        axios({ 
          method: 'GET',
          url: 'http://127.0.0.1:8000/serializers/Product/',
        }).then(response => {
          setPeople(response.data)
        })
    }, [])
    return(
    
        <div>
        {people.map(p => (
                
            
            <div>
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
    </div>
    )
}

export default Productapp