import React from "react";

import "./404.css";

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <i className="fa fa-frown-o sad-icon" aria-hidden="true"></i>
            <h1>404! <br />Page Not Found</h1>
        </div>
    );
};

export default PageNotFound;