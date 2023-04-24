import React from 'react';
import { NavLink } from "react-router-dom";

const Card = ({ 
    imgsrc,
    title,
    url,
    text
}) => {

    return (
        <>
            <div className="col-md-3 col-10 mx-auto">
                <div className="card">
                    <img src={imgsrc} className="card-img-top" id="coverImg" alt="card" />
                    <div className="card-body">
                        <div>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{text}</p>
                        </div>
                        <NavLink to={url} className="btn btn-primary">Oyna</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
