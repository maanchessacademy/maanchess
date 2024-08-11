import React from 'react'
import "./Cardb.css";

const Cardb = ({ title, description, image }) => {
    return (
        <>
            <div className="cardb">
                <div className="cardb_content">
                    <div className='cardb_head'>
                        <img src={image} alt="avatar" />
                        <p className='cardb_title'>{title}</p>
                    </div>
                    <p className="cardb_para">
                        {description}
                    </p>
                </div>
            </div>

        </>
    )
}

export default Cardb