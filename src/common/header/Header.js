import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import './Header.css'
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%,-50%)'
    }
}

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0 ,textAlign:'center'}}>
            {props.children}
        </Typography>

    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalIsOpen: false,
            value: 0,
            username:'',
            usernameRequired:'dispNone',
            passwordRequired:'dispNone',
            password:'',
            
            firstname:'',
            firstnameRequired:'dispNone',

            lastname:'',
            lastnameRequired:'dispNone',

            email:'',
            emailRequired:'dispNone',

            registerPassword:'',
            registerPasswordRequired:'dispNone',

            contactNumber:'',
            contactNumberRequired:'dispNone'

        };
    }

    openModalHandler = () => {
        
        this.setState({

            modalIsOpen: true,
            value: 0,
            usernameRequired: "dispNone",
            username: "",
            password:"",
            passwordRequired:'dispNone',
            
            firstnameRequired: "dispNone",
            firstname: "",
            lastnameRequired: "dispNone",
            lastname: "",
            emailRequired: "dispNone",
            email: "",
            registerPasswordRequired: "dispNone",
            registerPassword: "",
            contactNumberRequired: "dispNone",
            contactNumber: ""

        })
    }

    closeModalHandler = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    tabChangeHandler = (e, value) => {
        this.setState({ value })
    }


loginClickHandler=()=>{
    this.state.username === "" ? this.setState({usernameRequired:"dispBlock"}):this.setState({usernameRequired:"dispNone"})
    this.state.password === ""? this.setState({passwordRequired:"dispBlock"}):this.setState({passwordRequired:"dispNone"})
 }

 registerClickHandler=()=>{
     this.state.firstname==="" ?this.setState({firstnameRequired:"dispBlock"}):this.setState({firstnameRequired:"dispNone"})
     this.state.lastname==="" ?this.setState({lastnameRequired:"dispBlock"}):this.setState({lastnameRequired:"dispNone"})
     this.state.email==="" ?this.setState({emailRequired:"dispBlock"}):this.setState({emailRequired:"dispNone"})
     this.state.registerPassword==="" ?this.setState({registerPasswordRequired:"dispBlock"}):this.setState({registerPasswordRequired:"dispNone"})
     this.state.contactNumber=="" ?this.setState({contactNumberRequired:"dispBlock"}):this.setState({contactNumberRequired:"dispNone"})
 }

inputUsernameChangeHandler=(e)=>{
 this.setState({username: e.target.value})
}

inputPasswordChangeHandler=(e)=>{
    this.setState({password:e.target.value})
}


inputFirstnameChangeHandler=(e)=>{
    this.setState({firstname:e.target.value})
}

inputLastnameChangeHandler=(e)=>{
    this.setState({lastname:e.target.value})
}

inputEmailChangeHandler=(e)=>{
    this.setState({email:e.target.value})
}

inputRegisterPasswordChangeHandler=(e)=>{
    this.setState({registerPassword:e.target.value})
}

inputContactChangeHandler=(e)=>{
    this.setState({contactNumber:e.target.value})
}
    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt='logo' />
                    <div className="login-btn">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                    </div>
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler} style={customStyles}>
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>

                   {this.state.value === 0 &&
                    <TabContainer >
                        <FormControl required style={{marginTop:10, padding:2}}>
                            <InputLabel htmlFor="username" style={{margin:5 ,padding:1}}>Username</InputLabel>
                            <Input type="text" id="username" style={{margin:5, padding :7 ,width:350}} username={this.state.username} onChange={this.inputUsernameChangeHandler}/>
                            
                            <FormHelperText className={this.state.usernameRequired}>
                                <span className="red">
                                    required
                                </span>
                            </FormHelperText>
                         
                         </FormControl>
                        <br/><br/>

                       
                       
                        <FormControl required >
                            <InputLabel htmlFor="password"style={{margin:5 ,padding:0}} >Password</InputLabel>
                            <Input type="password" id="password" style={{margin:5, padding :7,width:350}} password={this.state.password} onChange={this.inputPasswordChangeHandler}/>
                            <FormHelperText className={this.state.passwordRequired}>
                                <span className="red">
                                    required
                                </span>
                            </FormHelperText>
                        </FormControl><br/> <br/>
                        <Button  variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>

                    </TabContainer>
                   }

                   {this.state.value ===1 &&
                   <TabContainer>
                       <FormControl required >
                           <InputLabel htmlFor="firstname" >First Name </InputLabel>
                           <Input type="text" id="firstname" firstname={this.state.firstname} onChange={this.inputFirstnameChangeHandler}/>
                           <FormHelperText className={this.state.firstnameRequired}>
                                <span className="red">
                                    required
                                </span>
                            </FormHelperText>
                           </FormControl><br/><br/>
                          
                           <FormControl required >
                           <InputLabel htmlFor="lastname" >Last Name </InputLabel>
                           <Input type="text" id="lastname" lastname={this.state.lastname} onChange={this.inputLastnameChangeHandler}/>
                           <FormHelperText className={this.state.lastnameRequired}>
                                <span className="red">
                                    required
                                </span>
                            </FormHelperText>
                           </FormControl><br/><br/>

                           <FormControl required >
                           <InputLabel htmlFor="email" >Email </InputLabel>
                           <Input type="text" id="email" email={this.state.email} onChange={this.inputEmailChangeHandler}/>
                           <FormHelperText className={this.state.emailRequired}>
                                <span className="red">
                                    required
                                </span>
                            </FormHelperText>
                           </FormControl><br/><br/>

                           <FormControl required >
                           <InputLabel htmlFor="registerPassword" >Password</InputLabel>
                           <Input type="password" id="registerPassword" password={this.state.registerPassword} onChange={this.inputRegisterPasswordChangeHandler}/>
                           <FormHelperText className={this.state.registerPasswordRequired}>
                                <span className="red">
                                    required
                                </span>
                            </FormHelperText>
                           </FormControl><br/><br/>

                           <FormControl required >
                           <InputLabel htmlFor="contactNumber" >Contact Number</InputLabel>
                           <Input type="password" id="contactNumber" password={this.state.contactNumber} onChange={this.inputContactChangeHandler}/>
                           <FormHelperText className={this.state.contactNumberRequired}>
                                <span className="red">
                                    required
                                </span>
                            </FormHelperText>
                           </FormControl><br/><br/>
                           <Button  variant="contained" color="primary" onClick={this.registerClickHandler}>REGISTER</Button>
                           </TabContainer>}
                </Modal>
            </div>
        )
    }
}

export default Header
