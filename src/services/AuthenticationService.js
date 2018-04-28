import { dataService } from "../services/DataService";

const url = 'http://bitbookapi.azurewebsites.net/api';
const key = 'ABD7540';

class AuthenticationService {
    //Login
    fetchLogin(data) {
        return fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Key': key,
                'Accept': "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            console.log(res);

            let myJSON = res.json();
            return myJSON;
        })
        .then(response => {
            if (!response.error) {
                sessionStorage.setItem('userInfo', JSON.stringify(response));
                dataService.fetchMyProfile()
                .then(myInfo => {
                    sessionStorage.setItem('myId', JSON.stringify(myInfo.userId));
                })
                .catch(error => {
                    throw new Error('Please insert correct email and password!');
                    
                })
            }
            
            return response;
        })
    }

    //Register
    fetchRegister(data) {
        return fetch(`${url}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Key': key,
                'Accept': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                let myJSON = res.json();
                return myJSON;
            })
    }

    getSessionId() {
        if (sessionStorage != null && sessionStorage.getItem("userInfo")) {
            return JSON.parse(sessionStorage.getItem("userInfo")).sessionId;
        }

        return '';
    }
}

export const authenticationService = new AuthenticationService();