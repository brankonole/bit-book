import React from 'react';
import { Link } from "react-router-dom"

import "./SingleUser.css"

const SingleUser = (props) => {
    //time since last post 

    const timeSinceLastPost = (PostDate) => {
        //// eliminisanje minuta, sekundi i milisekunda iz danasnjeg datuma
        const dateNow = new Date()
        const dateNowDay = dateNow.getDate()
        const dateNowMonth = dateNow.getMonth()
        const dateNowYear = dateNow.getFullYear();
        
        /// kreiranje objekta datum iz inforamcija u vezi zadnjeg posta, "z" je dodato eto zato
        const postDate = new Date(PostDate + "z");
        
        //// transformisanje minuta i sata u format 0x, npr ako imamo 6 minut -> bice 06
        const postDateMinute = (postDate.getMinutes() < 10 ? "0" : "") + postDate.getMinutes();
        const postDateHours = (postDate.getHours() < 10 ? "0" : "") + postDate.getHours();


        const postDateDay = postDate.getDate();
        const postDateMonth = postDate.getMonth();
        const postDateYear = postDate.getFullYear();

        /// uporedjivanje vreme posta i danasnjeg datuma, da li su nastali istog dana
        /// ako jesu, prikazati vreme posta u formatu hh:mm

        if (PostDate === null) {
            return "No posts yet!!!"
        }
        else if (dateNowDay == postDateDay && dateNowMonth == postDateMonth && dateNowYear == postDateYear) {
            return (`${postDateHours}:${postDateMinute}`)
            //// ako nisu, prikazujemo datum i vreme posta
        } else {
            return (`${postDateDay}/${postDateMonth}/${postDateYear}/ ${postDateHours}:${postDateMinute}`)
        }
    }

    /// picture placeholder 
   const  avatar = (avatarUrl)=> {
        if (avatarUrl === "undefined") {
            return "https://www.syncron.com/wp-content/uploads/2017/03/img-placeholder.png"
        } else {
            return avatarUrl
        }
    }

  const  myUser= () => {
        if (props.id == JSON.parse(sessionStorage.myId)) {
            return "/profile"
        } else {
            return `/singleUser/${props.id}`
        }
    }
    return (
        <React.Fragment>
            <div className="row container center">
            <Link to={myUser()}>
                <div className="col s12 m12">
                    <div className="card horizontal hoverable">
                        {/* <i className="large material-icons">account_circle</i> */}
                        <img src={avatar(props.data.avatarUrl)} alt="" className="circle col s2 SingleUser-image" />
                        <div className="card-content left-align">
                            <p><b>{props.data.name}</b></p>
                            <p>{props.data.aboutShort}</p>
                        </div>
                        <div className=" col s4">
                            <p>Last post at <br />{timeSinceLastPost(props.data.lastPostDate)}</p>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default SingleUser;