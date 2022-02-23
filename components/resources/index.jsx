import React from 'react';
import Filter from '../../components/cards/component/filtercard/Filter';
import Accordion from '../accordion/accordion';
import SearchBar from '../searchBar/search';
import {
    Full,
    Header,
    Heading,
    SubHeading,
    ReportWrap,
    Cards,
    Inner,
    FilterCard,
    BorderWrap,
    Border
} from "./styles";
const ResouceStep = () => {
    return (
        <Full>
            <Header>
                <Heading>Browse all resources</Heading>
                <SubHeading>Explore our resource database </SubHeading>
            </Header>
            <Inner>
                <ReportWrap>
                    <Cards>
                        <SearchBar />
                        <Accordion title={"Select country"} />
                        <Accordion title={"Select Region"} />
                        <Accordion title={"Select Region"} />
                        <Accordion title={"Segment"} />
                        <Accordion title={"Resource type"} />
                        <Accordion title={"year"} />
                    </Cards>
                    <FilterCard>
                        <Filter
                            style={{ height: 66, width: 66 }}
                            mainImg={"static/images/videoicon.svg"}
                            title={"A review of microgrid development in the United States – A decade of progress on policies, demonstrations, controls, and software tools"}
                            file={"static/images/USAflag.svg"}
                            countryname={"USA"}
                            area={'North America '}
                            item={" IRENA"}
                            date={"2017"}
                        />
                        <Filter
                            style={{ height: 66, width: 66 }}
                            mainImg={"static/images/greenfile.svg"}
                            title={"A review of microgrid development in the United States – A decade of progress on policies, demonstrations, controls, and software tools"}
                            file={"static/images/USAflag.svg"}
                            countryname={"USA"}
                            area={'North America '}
                            item={" IRENA"}
                            date={"2017"}
                        />
                        <BorderWrap>
                            <Border></Border>
                            <Border></Border>
                        </BorderWrap>
                        <Filter
                            style={{ height: 66, width: 66 }}
                            mainImg={"static/images/yellowfile.svg"}
                            title={"A review of microgrid development in the United States – A decade of progress on policies, demonstrations, controls, and software tools"}
                            file={"static/images/USAflag.svg"}
                            countryname={"USA"}
                            area={'North America '}
                            item={" IRENA"}
                            date={"2017"}
                        />
                    </FilterCard>
                </ReportWrap>
            </Inner>
        </Full>
    );
};

export default ResouceStep;