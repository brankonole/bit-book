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
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94',
                'Accept': "aplication/json"
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
            })
    }
}

export const dataService = new DataService;