import React from "react";
import {
    LoaderWrap,
} from "./styles";
import { Spinner } from "reactstrap";

const Loader = ({ height, width }) => {
    return (
        <LoaderWrap>
            <Spinner style={{ height: height, width: width }}>Loading...</Spinner>
        </LoaderWrap>
    );
};

export default Loader;
