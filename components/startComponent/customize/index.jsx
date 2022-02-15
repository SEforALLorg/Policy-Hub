import React from 'react';
import BlueButton from "../../buttons/BlueButton";
import { FiInfo } from "react-icons/fi";
import { Wrapper, CardHeader, ImgBox, CardTitle, CardSubTitle, ButtonGrp ,Border} from "./styles";
const Customize = () => {
    return (
        <Wrapper>
            <CardHeader>
                <ImgBox>
                    <img src="static/images/cards.svg" alt="card" />
                </ImgBox>
                <CardTitle>
                    Assess your country’s situation and customize the decision-making process.
                </CardTitle>
            </CardHeader>
            <Border></Border>
            <CardSubTitle>
                Is there an up-to-date National
                Electrification Strategy (NES)?
                <FiInfo />
            </CardSubTitle>
            <ButtonGrp>
                <BlueButton title="yes" />
                <BlueButton title="no" />
            </ButtonGrp>
        </Wrapper>
        // <div className={styles.card}>
        //     <div className={styles.cardHeader}>
        //         
        //         <div>
        //         <p className={styles.cardTitle}>
        //             Assess your country’s situation and customize the decision-making process.
        //         </p>
        //         </div>
        //     </div>
        //     <p className={styles.detail}>
        //         Is there an up-to-date National
        //         Electrification Strategy (NES)?
        //         <FiInfo/>
        //     </p>
        //     <div className={styles.btnGrp}>
        //         <BlueButton title="yes"/>
        //         <BlueButton title="no"/>
        //     </div>
        // </div>
    );
};

export default Customize;