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
			passInputVal: ''
		}
	}

	//pokupiti vrednosti pakovati u objekat kad pozovemo Login Register prosledimo objekat

	registerUser = () => {
		let data = {
			"username": this.state.emailInputVal,
			"password": this.state.passInputVal,
			"name": this.state.firstNameInputVal,
			"email": this.state.emailInputVal
		}

		dataService.fetchRegister(data)
			.then(res => {
				sessionStorage.setItem('user', JSON.stringify(res));
			})
	}

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
		console.log(this.state.firstNameInputVal);
		
		return (
			<div className="container white z-depth-2">

				<Tabs className='tab-demo z-depth-1'>
					<TabList className='tabs tab-demo z-depth-1'>
						<Tab className='tab'><Link to='/login' className='LoginRegister-link'>Login</Link></Tab>
						<Tab className='tab'><Link to='/register' className='LoginRegister-link'>Register</Link></Tab>
					</TabList>
					<TabPanel>
						<div id="login" className="col s12">
							<form className="col s6">
								<div className="form-container">
									<h3 className="teal-text">Hello</h3>
									<div className="row">
										<div className="input-field col s12">
											<input type="email" className="validate" />
											<label htmlFor="email">Email</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<input type="password" className="validate" />
											<label htmlFor="password">Password</label>
										</div>
									</div>
									<br />
									<center>
										<button className="btn waves-effect waves-light teal" type="submit" name="action">Connect</button>
										<br />
										<br />
										<a href="">Forgotten password?</a>
									</center>
								</div>
							</form>
						</div>
					</TabPanel>
					<TabPanel>
						<div id="register" className="col s12">
							<form className="col s12">
								<div className="form-container">
									<h3 className="teal-text">Welcome</h3>
									<div className="row">
										<div className="input-field col s12">
											<input id="first_name" type="text" className="validate" onChange={this.addFirstName}/>
											<label htmlFor="first_name">First Name</label>
										</div>
									</div>
									<div className="row">
										<div className="input-field col s12">
											<input id="last_name" type="text" className="validate" onChange={this.addLastName} />
											<label htmlFor="last_name">Last Name</label>
										</div>
									</div>
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
										<button className="btn waves-effect waves-light teal" type="submit" name="action" onClick={this.registerUser}>Submit</button>
									</center>
								</div>
							</form>
						</div>
					</TabPanel>
				</Tabs>
			</div>
		)
	}
}

export default LoginRegister;