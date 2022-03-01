import React from 'react';
import Accordion from '../../../accordion/accordion';
import Report from '../../../cards/component/filtercard/Filter';
import {
    FullWrap,
    CardHeader,
    ImgBox,
    CardTitle,
    ReportWrap,
    Cards,
} from "./styles";
const Reports = () => {
    return (
        <FullWrap>
            <CardHeader>
                <ImgBox>
                    <img src={"static/images/greenfile.svg"} alt="card" />
                </ImgBox>
                <CardTitle>
                    Publications that match your input.
                </CardTitle>
            </CardHeader>
            <ReportWrap>
                <Cards>
                    <Accordion title={" Select Country "} />
                </Cards>
                <Cards>
                    <Report
                        countryName={"USA"}
                        area={'North America '}
                        item={" IRENA"}
                        date={"2017"}
                        file={"static/images/USAflag.svg"}
                        title={"A review of microgrid development in the United States – A decade of progress on policies, demonstrations, controls, and software tools"}
                    />
                </Cards>
            </ReportWrap>
        </FullWrap>
    );
};

export default Reports;