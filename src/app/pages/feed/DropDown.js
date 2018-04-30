import React from 'react';
import { Button, Dropdown } from 'react-materialize';

const DropDown = (props) => {
    return (
        <div >
            <Dropdown trigger={<Button>ALL POSTS</Button>}>
                <li onClick={() => props.filter("video")}>Video</li>
                <li onClick={() => props.filter("image")}>Image</li>
                <li onClick={() => props.filter("text")}>Text</li>
                <li onClick={props.antifilter}>All Posts</li>
            </Dropdown>
        </div>
    )
}

export default DropDown;