import React from 'react';
import Accordion from '../../../accordion/accordion';
import Filter from '../../../cards/component/filtercard/Filter';
import {
    FullWrap,
    CardHeader,
    ImgBox,
    CardTitle,
    ReportWrap,
    Cards
} from "./styles";
const Reports = () => {
    return (
        <FullWrap>
            <CardHeader>
                <ImgBox>
                    <img src="static/images/greenfile.svg" alt="card" />
                </ImgBox>
                <CardTitle>
                    Publications that match your input.
                </CardTitle>
            </CardHeader>
            <ReportWrap>
                <Cards>
                    <Accordion />
                </Cards>
                <Cards>
                <Filter />
                </Cards>
            </ReportWrap>
        </FullWrap>
    );
};

export default Reports;