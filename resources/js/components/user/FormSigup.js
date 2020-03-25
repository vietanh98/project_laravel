import React from 'react';
import './demo.css';
import axios from 'axios';

class FormSigup extends React.Component {
    constructor(){
        super()
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state ={
            name:'',
            email:'',
            password:''
        }
    }
    onChangeUser(e){
        this.setState({name:e.target.value});
        this.setState({ email:e.target.value});
        this.setState({ password:e.target.value});        
        
    }
    onSubmit(e){
        e.preventDefault();
        const user ={
            name: this.state.name,
            emai: this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost/api/store' ,user).then(res =>{console.log(res.data);
    })
    }

    render() {
        return (
            <div className= 'col-md-6 form-sigup'>
            <h1> Demo Form Đăng ký</h1>
            <form className ='style-form' onSubmit={this.onSubmit}>
                <div className= 'col-md-4'>
                    <label className='title-input'>User Name</label>
                </div>
                <div className = 'input col-md-8'>
                    <input type='text' id='name' onChange ={this.onChangeUser} className='style-input col-md-12' placeholder='Enter User Name' />
                </div>
                {/* <div className= 'col-md-4'>
                    <label className ='title-input'>Display Name</label>
                </div>
                <div className='input col-md-8'>
                    <input type='text'  onChange ={this.onChangeUser} className='style-input col-md-12' placeholder='Enter Display Name' />
                </div> */}
                <div className= 'col-md-4'>
                    <label className ='title-input'>Email</label>
                </div>
                <div className='input col-md-8'>
                    <input type='text'  id='email' onChange ={this.onChangeUser}  className='style-input col-md-12' placeholder='Enter Email' />
                </div>
                <div className= 'col-md-4'>
                    <label className ='title-input'>Password</label>
                </div>
                <div className='input col-md-8'>
                    <input type='password'  id='password' onChange ={this.onChangeUser} className='style-input col-md-12' placeholder='Enter Password' />
                </div>
                <button type='submit' className='btn-sigup'>Đăng ký</button>
            </form>
        </div>


        );
    }

}

export default FormSigup;