import TextPost from '../entities/TextPost';
import ImagePost from '../entities/ImagePost';
import VideoPost from '../entities/VideoPost';

const url = 'http://bitbookapi.azurewebsites.net/api/';

class DataService {
    fetchPosts() {
        return fetch(`${url}/Posts`, {
            headers: {
                // 'Access-Control-Allow-Origin':'http://localhost:3000',
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            }
        })
            .then(response => {
                let myJSON = response.json();
                
                return myJSON;
            })
            .then(response => {
                console.log(response)
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
            })
    }

    uploadNewTextPost(data) {
        return fetch(`${url}/TextPosts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94',
                'Accept': "aplication/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            return res.json()
        })
    }

    uploadNewVideoPost(data) {
        return fetch(`${url}/VideoPosts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94',
                'Accept': "aplication/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            return res.json()
        })
    }

    uploadNewImagePost(data) {
        return fetch(`${url}/ImagePosts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94',
                'Accept': "aplication/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            return res.json()
        })
    }

}

export const dataService = new DataService;