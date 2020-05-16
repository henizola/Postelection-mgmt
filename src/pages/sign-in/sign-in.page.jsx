import React from 'react';
import Form from '../../components/Form/form.component';
import  './sign-in.styles.css';

class SignIn extends React.Component{

        constructor(props){
            super(props);
            this.state={
                            email:'',
                            password:''
                        }
        }

        handleChange = event => {
            const { value, name } = event.target;
        
            this.setState({ [name]: value });
          };
        render(){
            return <div className="sign-in-container">
                      <div className="picture"/>
                        <div className="form">
                            <form>
                                <Form 
                                name='email'
                                label='Email'
                                handleChange={this.handleChange}
                                type='email'
                                value={this.state.email}
                                required
                                />
                                <Form
                                    name='password'
                                    type='password'
                                    value={this.state.password}
                                    handleChange={this.handleChange}
                                    label='password'
                                    required
                                 />

                            </form>
                        </div>
                    </div>
                    
        }


    
}

export default SignIn;