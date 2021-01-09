import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

    const [people, setPeople] = useState([])

    useEffect(() => {
      axios({ 
        method: 'POST',
        url: 'http://127.0.0.1:8000/serializers/Trade/',
        data: {
          status: 'processing',
          product: 1
        }
      }).then(response => {
        setPeople(response.data)
      })
    }, [])
      return (
        <div className="App">

            {people.map(p => (
              <div>
                <div class="naver">{ p.title }<small class="text-muted"></small></div>
                <div class="image"></div>
                <div class="description">{ p.description }</div>
              </div>
            ))}
        </div>
      );
  }

export default App;