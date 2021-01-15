import React, { Component,  componentDidUpdate, useState } from "react";
import axios from 'axios';

class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            passworld: '',
            people3: [],
            submi: false,
            username_error: '',
        };
        this.handleUsenameChange = this.handleUsenameChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePassworldChange = this.handlePassworldChange.bind(this)
    }

    

    handleSubmit(event){
        // event.preventDefault();
        console.log('form is submitedd', event.target.value) ;
        // this.state.submi = true;

        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

    
        // // HTTP request
        // // const [people3, setPeople3] = useState([])
    
        
        // axios({
        //     method: 'POST',
        //     url: 'http://127.0.0.1:8000/serializers/MaterialsCategory/',
        //     data: {
        //         title: event.target.value
        //     }
        // }).then(response => {
        //     // this.setState({ people3: this.state.people3 = response.data})
        //     // console.log(response.data.login_text)
        // })
    }

    handlePassworldChange(event, ){
        this.setState({passworld: event.target.value});
        const passw = event.target.value;
        console.log(event.target.value);
    }

    handleUsenameChange(event, ){
        if (this.state.passworld != ''){
            this.setState({username: event.target.value});
        }else{
            console.log('skzbum lracreq username n');
            this.setState({username_error: <div style={{color: 'red'}}>skzbum lracreq username n</div>})
        }
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        

    
        // HTTP request
        // const [people3, setPeople3] = useState([])
    
        if (this.state.passworld != ''){
            this.setState({username: event.target.value});
        
            axios({
                method: 'POST',
                url: 'http://127.0.0.1:8000/serializers/MaterialsCategory/',
                data: {
                    status: event.target.value,
                    address: this.state.passworld
                }
            }).then(response => {
                // this.setState({ people3: this.state.people3 = response.data})
                // console.log(response.data.login_text)
            })
        }
    }


    render(){
        return(
            // <form onSubmit={this.handleSubmit} style={{margin: '300px', }}>
            //     <input type="text" placeholder="username" value={this.state.passworld} onChange={this.handlePassworldChange}></input><br></br>
            //     <input type="text" placeholder="passworld" value={this.state.username} onChange={this.handleUsenameChange}></input><br></br>
            //     { this.state.username_error }
            //     <button>Login</button><br></br>
            // </form>

   
                <form onSubmit={this.handleSubmit} style={{margin: '540px', marginTop: '200px'}}>
                {/* <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
                <h1 class="h3 mb-3 fw-normal">Please log in</h1>
                <label for="inputEmail" class="visually-hidden"></label>
                <input type="text" placeholder="username" value={this.state.passworld} onChange={this.handlePassworldChange} id="inputEmail" class="form-control"/>
                <label for="inputPassword" class="visually-hidden">Password</label>
                <input placeholder="passworld" value={this.state.username} onChange={this.handleUsenameChange} type="password" id="inputPassword" class="form-control"/>
                <div class="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p class="mt-5 mb-3 text-muted">© 2017-2021</p>
                </form>

        );
    }
}



export default Login

