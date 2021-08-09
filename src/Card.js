import React from 'react';
const card = ({ name, email, id }) => {
    return (
        <div className="tc bg-light-green dib br4 pa3 ma2 grow pw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default card;