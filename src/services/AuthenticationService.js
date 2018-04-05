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
                sessionStorage.setItem('userInfo', JSON.stringify(response));
                dataService.fetchMyProfile()
                    .then(myInfo => {
                        sessionStorage.setItem('myId', JSON.stringify(myInfo.userId));
                    })
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
       if (sessionStorage != null)  {
           return JSON.parse(sessionStorage.getItem("userInfo")).sessionId;
       } 
    }
}

export const authenticationService = new AuthenticationService();