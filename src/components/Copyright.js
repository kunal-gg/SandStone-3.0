import React from "react";
import { Link } from "react-router-dom";

export default function Copyright() {
    return (
        <div className="copyright-main">

            <div className="copyright-content">
                <p>Created by the <span>
                    <a><Link to={'/webdevteam'}>Web Development Team</Link></a>
                </span> of Sandstone-22</p>
            </div>

        </div>
    )
}