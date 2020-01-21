import React from "react";
import "./menu-item.sass";

export const MenuItem = ({title, imgUrl, size}) => (
    <div  className={`${size} menu-item`}>
        <div className="background-img"
            style={{
                backgroundImage: `url(${imgUrl})`
            }} />
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);