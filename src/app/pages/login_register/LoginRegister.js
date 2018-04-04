import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { dataService } from '../../../services/DataService';

import "./css/Login.css"

class LoginRegister extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstNameInputVal: '',
			lastNameInputVal: '',
			emailInputVal: '',
			passInputVal: '',
			loginEmailInputVal: '',
			loginPasswordInputVal: ''
		}
	}

	//pokupiti vrednosti pakovati u objekat kad pozovemo Login Register prosledimo objekat

	registerUser = () => {
		const data = {
			"username": this.state.emailInputVal,
			"password": this.state.passInputVal,
			"name": this.state.firstNameInputVal,
			"email": this.state.emailInputVal
		}

		dataService.fetchRegister(data)
			.then(res => {
				// je l' sve proslo kako treba
			})
	}

	loginUser = () => {
		const data = {
			"username": this.state.loginEmailInputVal,
			"password": this.state.loginPasswordInputVal
		}

		dataService.fetchLogin(data)
			.then(response => {
				this.props.loggedIn(true);
			})
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
			<div className="container white z-depth-2">

				<Tabs className='tab-demo z-depth-1'>
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
											<input type="email" className="validate" onChange={this.inputAddEmail}/>
											<label htmlFor="email">Email</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<input type="password" className="validate" onChange={this.inputAddPassword} />
											<label htmlFor="password">Password</label>
										</div>
									</div>
									<br />
									<center>
										<button className="btn waves-effect waves-light teal" type="button" name="action" onClick={this.loginUser}>Connect</button>
										<br />
										<br />
										<a href="">Forgotten password?</a>
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
											<input id="first_name" type="text" className="validate" onChange={this.addFirstName}/>
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
											<input type="email" className="validate" onChange={this.addEmail}/>
											<label htmlFor="email">Email</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<input type="password" className="validate" onChange={this.addPassword}/>
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

export default LoginRegister;