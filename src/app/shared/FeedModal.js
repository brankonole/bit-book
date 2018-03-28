import React from 'react';

const feedModal = props => {
    return (
        <React.Fragment>
            <h2 ref={subtitle => props.subtitle = subtitle}>Hello</h2>
            <button onClick={props.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
            </form>
        </React.Fragment>
    )
}

export default feedModal;