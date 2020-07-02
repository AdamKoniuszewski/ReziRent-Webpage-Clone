import React from "react";
import "./CustomLink-comp.scss";

const CustomLink = ({name, urlName1, url1, urlName2, url2, phone}) => {
    return (
        <div className={url2? "grid CustomLink": "CustomLink"}>
            <h2>{name}</h2>
            <a href={url1}>{urlName1? urlName1:url1}</a>
            {phone? (<h3>{phone}</h3>):null} <br/>
            {url2? (<a href={url2}>{urlName2}</a>) : null }
        </div>
    ) 
};
export default CustomLink;