// import TextPost from '../entities/TextPost';
// import ImagePost from '../entities/ImagePost';
// import VideoPost from '../entities/VideoPost';

// const url = 'http://bitbookapi.azurewebsites.net/api';

// class DataService {

//     //fetching all posts
//     fetchPosts() {
//         return fetch(`${url}/Posts`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Key': 'bitbook',
//                 'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94',
//                 'Accept': "aplication/json"
//             }
//         })
//             .then(response => {
//                 let myJSON = response.json();
                
//                 return myJSON;
//             })
//             .then(response => {
//                 return response.map(e => {
//                     if (e.type === 'image') {
//                         return new ImagePost(e);
//                     }
//                     else if (e.type === 'video') {
//                         return new VideoPost(e);
//                     } else {
//                         return new TextPost(e);
//                     }
//                 })
//             })
//     }
// // creating fetch for single post  //
//     fetchSinglePost(type, id) {
//         let urlType;

//         //transforming type (video, image, text) to url that API expects //
       
//         if (type === "video") {
//             urlType = "VideoPosts"
//         } else if(type === "text") {
//             urlType = "TextPosts"
//         }
//         else {
//             urlType = "ImagePosts"
//         }

        
//         return fetch(`${url}/${urlType}/${id}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Key': 'bitbook',
//                 'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
//             }})
//             .then(response => {
//                 let myJson = response.json()
//                 return myJson
//             })
// }
//     //fetch comments

//     fetchComments(id) {
//         return fetch(`${url}/Comments?postId=${id}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Key': 'bitbook',
//                 'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94',
//                 'Accept': "aplication/json"
//             }
//         })
//             .then(response => {
//                 let res = response.json();                
//                 return res;
//             })   
//     }

//     //fetching single profile

//     fetchingUser(id){
//         return fetch(`${url}/users/${id}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Key': 'bitbook',
//                 'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94',
//                 'Accept': "aplication/json"}
//         }
//     )
//     .then(response => {
//         let a = response.json();   
//           return a;
//     })   
// }

// // sending comments on server

// sendComment(postId,  data) {
//     return fetch(`${url}/Comments`, {
//         method: "POST",
//         headers: { 
//             'Content-Type': 'application/json',
//             'Key': 'bitbook',
//             'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
//         },
//        body: JSON.stringify({       
//         "body": data,
//         "postId": postId,
//       })
//     })
    
// }

// }

// export const dataService = new DataService;