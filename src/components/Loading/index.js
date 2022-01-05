import React,{ Fragment } from "react";
import Icons from "../../assets/Icons";

import "./Loading.css"

export default function Loading() {
    return(
        <Fragment>
            <div className="Loadind__container">
                <div className="Loading_icon">
                    <Icons 
                        name="Roll" 
                        fill="#01d277" 
                        stroke="#01d277" 
                        className="12"
                    />
                </div>
            </div>
        </Fragment>
    )
}