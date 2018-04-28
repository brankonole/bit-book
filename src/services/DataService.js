import TextPost from '../entities/TextPost';
import ImagePost from '../entities/ImagePost';
import VideoPost from '../entities/VideoPost';
import MyProfile from '../entities/MyProfile';
import User from "../entities/User";
import { authenticationService } from './AuthenticationService';

const url = 'https://bitbookapi.azurewebsites.net/api';
const key = 'ABD7540';
// const sessionId = "7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94";

class DataService {
    //gets
    fetchPosts() {
        return fetch(`${url}/Posts`, {
            headers: {
                // 'Access-Control-Allow-Origin':'https://localhost:3000',
                'Content-Type': 'application/json',
                'Key': key,
                'SessionId': authenticationService.getSessionId()
            }
        })
            .then(response => {
                let myJSON = response.json();
                return myJSON;
            })
            .then(response => {
                return response.map(e => {
                    if (e.type === 'image') {
                        return new ImagePost(e);
                    }
                    else if (e.type === 'video') {
                        return new VideoPost(e);
                    } else {
                        return new TextPost(e);
                    }
                })
                console.log('fetched')
            })
            
    }

    // creating fetch for single post  //
    fetchSinglePost(type, id) {
        let urlType;

        //transforming type (video, image, text) to url that API expects //
        if (type === "video") {
            urlType = "VideoPosts"
        } else if (type === "text") {
            urlType = "TextPosts"
        }
        else {
            urlType = "ImagePosts"
        }

        return fetch(`${url}/${urlType}/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': key,
                'SessionId': authenticationService.getSessionId()
            }
        })
            .then(response => {
                let myJson = response.json()
                return myJson
            })
    }
    //fetch comments

    fetchComments(id) {
        return fetch(`${url}/Comments?postId=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': key,
                'SessionId': authenticationService.getSessionId(),
                'Accept': "aplication/json"
            }
        })
            .then(response => {
                let res = response.json();
                return res;
            })
    }

    //fetching single profile

    fetchingUser(id) {
        return fetch(`${url}/users/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': key,
                'SessionId': authenticationService.getSessionId(),
                'Accept': "aplication/json"
            }
        }
        )
            .then(response => {
                let a = response.json();
                return a;
            })
    }

    // sending comments on server
    sendComment(postId, data) {
        return fetch(`${url}/Comments`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Key': key,
                'SessionId': authenticationService.getSessionId()
            },
            body: JSON.stringify({
                "body": data,
                "postId": postId,
            })
        })

    }
    fetchMyProfile() {
        return fetch(`${url}/profile`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': key,
                'SessionId': authenticationService.getSessionId()
            }
        })
            .then(response => {
                let myJSON = response.json();

                return myJSON;
            })
            .then(response => {
                console.log(response);
                
                return new MyProfile(response)
            })
    }

    //posts
    uploadNewTextPost(data) {
        return fetch(`${url}/TextPosts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Key': key,
                'SessionId': authenticationService.getSessionId(),
                'Accept': "aplication/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                let myJSON = res.json();
                return myJSON;
            })
    }

    uploadNewVideoPost(data) {
        return fetch(`${url}/VideoPosts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Key': key,
                'SessionId': authenticationService.getSessionId(),
                'Accept': "aplication/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                let myJSON = res.json();
                return myJSON;
            })
    }

    uploadNewImagePost(data) {
        return fetch(`${url}/ImagePosts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Key': key,
                'SessionId': authenticationService.getSessionId(),
                'Accept': "aplication/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                let myJSON = res.json();
                return myJSON;
            })
    }

    // fetchUploadImage(data) {
    //     return fetch(`${url}/upload`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Key': key,
    //             'SessionId': sessionId,
    //             'Accept': "aplication/json"
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => {
    //             let myJSON = res.json();
    //             return myJSON;
    //         })
    // }

    // puts
    fetchUpdateMyProfile(data) {
        return fetch(`${url}/profiles`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Key': key,
                'SessionId': authenticationService.getSessionId(),
                'Accept': "aplication/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("There's been a mistake");
                } else {
                    return res;
                }
            })
            // .catch(res => {

            // })
    }


    //// fetching all users 

    fetchAllUsers() {
        return fetch(`${url}/users`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': key,
                'SessionId': authenticationService.getSessionId(),
                'Accept': "aplication/json"
            }
        })
            .then(res => res.json())
    }

    //Delete single post

    fetchDeleteSinglePost(id) {
        return fetch(`${url}/Posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Key': key,
                'SessionId': authenticationService.getSessionId(),
                'Accept': "aplication/json"
            }
        })
        .then(res => {
            if (res.status < 200 && res.status >= 300) {
                console.log("There was some error");
            }
        })
    }

    
}

export const dataService = new DataService;