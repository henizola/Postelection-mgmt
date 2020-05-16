import React from 'react';
import Form from '../../components/Form/form.component';
import  './sign-in.styles.css';
import CustomButton from '../../components/custom-button/custom-button.component';

class SignIn extends React.Component{

        constructor(props){
            super(props);
            this.state={
                            email:'',
                            password:'',
                            admin:'admin@gmail.com',
                            adminpassword:'passme',
                            region:'region@gmail.com',
                            regionpassword:'passregion'
                        }
        }

        handleChange = event => {
            const { value, name } = event.target;
        
            this.setState({ [name]: value });
          };

        handleSubmit=(event)=>{
            event.preventDefault();
            if(this.state.email===this.state.admin&&this.state.adminpassword===this.state.password){
                this.props.history.push("/balot-registeration")
            }
            else if(this.state.email===this.state.region&&this.state.regionpassword===this.state.password){
                this.props.history.push("/region/Home")
            }
            else{
                alert("Wrong email or password")
            }
        }
        render(){
            return <div className="sign-in-container">
                      <div className="picture"/>
                        <div className="form">
                            <form onSubmit={this.handleSubmit}>
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
                                <CustomButton>Sign-in</CustomButton>
                            </form>
                        </div>
                    </div>
                    
        }


    
}

export default SignIn;