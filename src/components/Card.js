import React from "react";

const Card = ({id, name, email}) => {
    return (
        <div className="bg-light-green dib br3 pa ma2 grow bw3 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?100*100/`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;