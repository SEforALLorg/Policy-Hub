import React from 'react';
import {
    FullCard,
    Header,
    AddressDetail,
    PhoneDetails,
    Title,
    Number,
    InnerBody,
    AddressCard,
    BottomBody,
    Text,
    FormWrapper,
    BottomInfo,
    Button
} from "./styles";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Address from '../cards/component/addressCard';
import Checkbox from '../checkbox/index';
import Form from '../form';
import BlueButton from '../buttons/component/BlueButton';
import PrimaryButton from '../buttons/component/primaryBtn/primarybutton';

const ContactBox = () => {
    return (
        <FullCard>
            <Header>
                <AddressDetail>
                    <FaPhoneAlt />
                    <PhoneDetails>
                        <Title>Phone:</Title>
                        <Number>+43 676 846 727 200</Number>
                    </PhoneDetails>
                </AddressDetail>
                <AddressDetail>
                    <MdEmail />
                    <PhoneDetails>
                        <Title>Email</Title>
                        <Number>Info@SEforALL.org</Number>
                    </PhoneDetails>
                </AddressDetail>
            </Header>
            <InnerBody>
                <AddressCard>
                    <Address
                        style={{ height: "240px", margin: "5px" }}
                        heading={"Vienna Office"}
                        title={"Andromeda Tower 15th floor Donau City Strasse 6 1220, Vienna  Austria  Hours: 9:00 - 18:00 CET"} />
                    <Address
                        style={{ height: "240px", margin: "5px" }}
                        heading={"Washington, DC Office"}
                        title={"1750 Pennsylvania Avenue NW Suite 300 Washington, DC 20006  USA Hours: 9:00 - 18:00 ES"} />
                    <Address
                        style={{ height: "240px", margin: "5px" }}
                        heading={"New York Office"}
                        title={"420 5th Ave New York, NY 10018 USA"} />
                </AddressCard>
            </InnerBody>
            <BottomBody>
                <BottomInfo>
                    <Text>
                        For any media requests, please contact: <span>Media@SEforALL.org</span>
                    </Text>
                    <Text className="text">
                        Keep up-to-speed with what's happening at SEforALL and
                        across the sustainable energy movement. We'll send you
                        our monthly update, plus special news and event invites.
                    </Text>
                    <Checkbox label={"Subscribe to our Newsletter"} />
                </BottomInfo>
                <FormWrapper>
                    <Form field={"Name"} placeholder={"Enter your name"} style={{ width: '288px' }} />
                    <Form field={"E-mail"} placeholder={"Enter your email"} style={{ width: '288px' }} />
                    <Button>
                        <PrimaryButton title={"submit"} />
                    </Button>
                </FormWrapper>
            </BottomBody>
        </FullCard>
    );
};

export default ContactBox;