import React from "react";
import { Spinner } from "reactstrap";

const Loader = ({ height, width }) => {
    return (
        <div className="loader-wrap">
            <Spinner style={{ height: height, width: width }}>Loading...</Spinner>
        </div>
    );
};

export default Loader;
