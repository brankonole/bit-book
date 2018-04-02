import React, { Component } from "react";

import "./css/Login.css"

class LoginRegister extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="container white z-depth-2">
				<ul className="tabs teal">
					<li className="tab col s3"><a className="white-text active" href="login">login</a></li>
					<li className="tab col s3"><a className="white-text" href="#register">register</a></li>
				</ul>
				<div id="login" className="col s12">
					<form className="col s6">
						<div className="form-container">
							<h3 className="teal-text">Hello</h3>
							<div className="row">
								<div className="input-field col s12">
									<input id="email" type="email" className="validate" />
									<label for="email">Email</label>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<input id="password" type="password" className="validate" />
									<label for="password">Password</label>
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
				<div id="register" className="col s12">
					<form className="col s12">
						<div className="form-container">
							<h3 className="teal-text">Welcome</h3>
							<div className="row">
								<div className="input-field col s12">
									<input id="last_name" type="text" className="validate" />
									<label for="last_name">First Name</label>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<input id="email" type="email" className="validate" />
									<label for="email">Email</label>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<input id="password" type="password" className="validate" />
									<label for="password">Password</label>
								</div>
							</div>
							<center>
								<button className="btn waves-effect waves-light teal" type="submit" name="action">Submit</button>
							</center>
						</div>
					</form>
				</div>
			</div>


		)
	}
}


export default LoginRegister;