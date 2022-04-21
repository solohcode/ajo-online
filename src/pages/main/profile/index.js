import React, { Component } from 'react'
import './index.css';

export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            telegram:'',
            name:'',
        }
    }

    handleChange = (e) => {
       this.setState({
         [e.target.name] : e.target.value
       })     
    };
  render() {
    return (
      <div>
          <div>
            <h4 className='text' >Profile</h4>
         </div>
          <div className='row p-2'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div className='mt-3 p-5 bg-white rounded con1'>
                            <div>
                            <label for="username" class="form-label">Username:</label>
                            <input className='users bg-white' type="text"  name='username' value={this.state.username} placeholder='ABCDEFGH'  onChange={this.handleChange}/>
                            </div>
                            
                            <div>
                            <label for="email" class="form-label">Email:</label>
                            <input className='users bg-white' type="email"  name='email' value={this.state.email}  placeholder='azharisrailova@gmail.com' onChange={this.handleChange}/>
                            </div>
                            
                            <div> 
                            <label for="telegram" class="form-label">Telegram id:</label>
                            <input className='users bg-white' type="telegram"  name='telegram' value={this.state.telegram} placeholder='720443189'   onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12'>
                      <div className='mt-3 p-5 bg-white rounded con2'>

                      </div>
                    </div>

                </div>

                <div className='row p-2'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div className='mt-3 p-5 bg-white rounded conc3'>
                        <p className='text-center'>
                            DEPOSIT DETAILS
                        </p>
                            <div>
                            <label for="name" class="form-label">Name of depositor:</label>
                            <input className='users bg-white' type="text"  name='name' value={this.state.name}  onChange={this.handleChange}/>
                            </div>

                            <div>
                            <label for="name" class="form-label">Name of depositor:</label>
                            <input className='users bg-white' type="text"  name='name' value={this.state.name}  onChange={this.handleChange}/>
                            </div>

                            <div>
                            <label for="name" class="form-label">Name of depositor:</label>
                            <input className='users bg-white' type="text"  name='name' value={this.state.name}  onChange={this.handleChange}/>
                            </div>

                            <div>
                            <label for="name" class="form-label text-light">Name of depositor:</label>
                            <input className='users bg-white' type="text"  name='name' value={this.state.name}  onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12'>
                      <div className='mt-3 p-5 bg-white rounded conc'>

                      </div>
                    </div>
                </div>
      </div>
    )
  }
}

