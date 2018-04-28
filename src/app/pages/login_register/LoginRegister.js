import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { authenticationService } from '../../../services/AuthenticationService';

import "./css/Login.css"

const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

class LoginRegister extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstNameInputVal: '',
			lastNameInputVal: '',
			emailInputVal: '',
			passInputVal: '',
			loginEmailInputVal: '',
			loginPasswordInputVal: '',
			isEmailEmptyLogin: true,
			isEmailValidateLogin: true,
			isPasswordValidateLogin: true,
			isNameValidate: true,
			isEmailEmpty: true,
			isEmailValidate: true,
			isPassEmpty: true,
			isPassValidate: true,
			tabIndex: props.tabIndex || 0,
			loginFailed: false
		}
	}

	//pokupiti vrednosti pakovati u objekat kad pozovemo Login Register prosledimo objekat

	registerUser = () => {
		this.setState({
			isNameValidate: true,
			isEmailEmpty: true,
			isEmailValidate: true,
			isPassEmpty: true,			
			isPassValidate: true
		})

		let firstNameInputValue = this.state.firstNameInputVal;
		let emailInputValue = this.state.emailInputVal;
		let passInputValue = this.state.passInputVal;

		const data = {
			"username": emailInputValue,
			"password": passInputValue,
			"name": firstNameInputValue,
			"email": emailInputValue
		}

		if (firstNameInputValue.charCodeAt(0) === 32 || firstNameInputValue.length === 0) {
			this.setState({
				isNameValidate: false
			})
		} else if (emailInputValue.charCodeAt(0) === 32 || emailInputValue.length === 0) {
			this.setState({
				isEmailEmpty: false
			})
		} else if (!re.test(emailInputValue.toLowerCase())) {
			this.setState({
				isEmailValidate: false
			})
		} else if (passInputValue.charCodeAt(0) === 32 || passInputValue.length === 0) {
			this.setState({
				isPassEmpty: false
			})
		} else if (passInputValue.length > 0 && passInputValue.length < 6) {
			this.setState({
				isPassValidate: false
			})
		} else {
			authenticationService.fetchRegister(data)
				.then(res => {
					// je l' sve proslo kako treba
				})

				this.setState({
					tabIndex: 0
				})

				this.props.history.push('/login')
		}
	}

	registerUserWithEnter = (e) => {
		if (e.keyCode === 13) {
			this.registerUser();
		}
	}

	loginUser = () => {
		this.setState({
			isEmailEmptyLogin: true,
			isEmailValidateLogin: true,
			isPasswordValidateLogin: true
		})

		let loginEmailInputValue = this.state.loginEmailInputVal;
		let loginPassInputValue = this.state.loginPasswordInputVal;

		const data = {
			"username": loginEmailInputValue,
			"password": loginPassInputValue
		}

		if (loginEmailInputValue.charCodeAt(0) === 32 || loginEmailInputValue.length === 0) {
			this.setState({
				isEmailEmptyLogin: false
			})
		} else if (!re.test(loginEmailInputValue.toLowerCase())) {
			this.setState({
				isEmailValidateLogin: false
			})
		} else if (loginPassInputValue.charCodeAt(0) === 32 || loginPassInputValue.length === 0) {
			this.setState({
				isPasswordValidateLogin: false
			})
		} else {
			console.log(data);
			
			authenticationService.fetchLogin(data)
				.then(response => {
					if (response.error) {
						this.props.loggedIn(false);
						this.setState({
							loginFailed: true
						})
					} else {
						this.props.loggedIn(true);
						this.setState({
							loginFailed: false
						})
					}
				})
		}
	}

	loginUserWithEnter = (e) => {
		if (e.keyCode === 13) {
			this.loginUser();
		}
	}

	// Inputi za Login
	//*********/

	inputAddEmail = (e) => {
		this.setState({
			loginEmailInputVal: e.target.value
		})
	}

	inputAddPassword = (e) => {
		this.setState({
			loginPasswordInputVal: e.target.value
		})
	}

	//Inputi za Register
	/****** */
	addFirstName = (e) => {
		this.setState({
			firstNameInputVal: e.target.value
		})
	}

	addLastName = (e) => {
		this.setState({
			lastNameInputVal: e.target.value
		})
	}

	addEmail = (e) => {
		this.setState({
			emailInputVal: e.target.value
		})
	}

	addPassword = (e) => {
		this.setState({
			passInputVal: e.target.value
		})
	}

	render() {
		return (
			<div className="container white z-depth-2 LoginRegister-content">
				<Tabs className='tab-demo z-depth-1' selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
					<TabList className='tabs tab-demo z-depth-1'>
						<Tab className='tab'><Link to='/login' className='LoginRegister-link'>Login</Link></Tab>
						<Tab className='tab'><Link to='/register' className='LoginRegister-link'>Register</Link></Tab>
					</TabList>
					<TabPanel>
						<div id="login" className="col s12">
							<div className="col s6">
								<div className="form-container">
									<h3 className="teal-text">Hello</h3>
									<div className="row">
										<div className="input-field col s12">
											<input type="email" className="validate LoginRegister-input" value={this.state.loginEmailInputVal} onChange={this.inputAddEmail} onKeyUp={this.loginUserWithEnter} required/>
											{this.state.isEmailValidateLogin ? "" : <p className="LoginRegister-errorMsg">Invalid input!</p>}
											{this.state.isEmailEmptyLogin ? "" : <p className="LoginRegister-errorMsg">Please fill out this field!</p>}
											<label htmlFor="email">Email</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<input type="password" className="validate LoginRegister-input" value={this.state.loginPasswordInputVal} onChange={this.inputAddPassword} onKeyUp={this.loginUserWithEnter}/>
											{this.state.isPasswordValidateLogin ? "" : <p className="LoginRegister-errorMsg">Please fill out this field!</p>}
											<label htmlFor="password">Password</label>
										</div>
									</div>
									{this.state.loginFailed ? <p className="LoginRegister-errorMsg">Login failed</p> : ''}
									<br />
									<center>
										<button className="btn waves-effect waves-light teal" type="button" name="action" onClick={this.loginUser}>Connect</button>
										<br />
										<br />
										{/* <a href="">Forgotten password?</a> */}
									</center>
								</div>
							</div>
						</div>
					</TabPanel>
					<TabPanel>
						<div id="register" className="col s12">
							<div className="col s12">
								<div className="form-container">
									<h3 className="teal-text">Welcome</h3>
									<div className="row">
										<div className="input-field col s12">
											<input id="first_name" type="text" value={this.state.firstNameInputVal} required className="validate LoginRegister-input" onChange={this.addFirstName} onKeyUp={this.registerUserWithEnter}/>
											{(this.state.isNameValidate || this.state.firstNameInputVal !== '') ? "" : <p className="LoginRegister-errorMsg">Please fill out this field!</p>}
											<label htmlFor="first_name">Full Name</label>
										</div>
									</div>
									{/* <div className="row">
										<div className="input-field col s12">
											<input id="last_name" type="text" className="validate" onChange={this.addLastName} />
											<label htmlFor="last_name">Last Name</label>
										</div>
									</div> */}
									<div className="row">
										<div className="input-field col s12">
											<input type="email" value={this.state.emailInputVal} required className="validate LoginRegister-input" onChange={this.addEmail} onKeyUp={this.registerUserWithEnter}/>
											{this.state.isEmailValidate ? "" : <p className="LoginRegister-errorMsg">Invalid input!</p>}
											{(this.state.isEmailEmpty || this.state.emailInputVal !== '') ? "" : <p className="LoginRegister-errorMsg">Please fill out this field!</p>}
											<label htmlFor="email">Email</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<input type="password" value={this.state.passInputVal} required className="validate LoginRegister-input" onChange={this.addPassword} onKeyUp={this.registerUserWithEnter}/>
											{this.state.isPassValidate ? "" : <p className="LoginRegister-errorMsg">Password has to be at least 5 characters long</p>}
											{this.state.isPassEmpty ? "" : <p className="LoginRegister-errorMsg">Please fill out this field!</p>}
											<label htmlFor="password">Password</label>
										</div>
									</div>
									<center>
										<button className="btn waves-effect waves-light teal" type="button" name="action" onClick={this.registerUser}>Submit</button>
									</center>
								</div>
							</div>
						</div>
					</TabPanel>
				</Tabs>
			</div>
		)
	}
}

export default withRouter(LoginRegister);