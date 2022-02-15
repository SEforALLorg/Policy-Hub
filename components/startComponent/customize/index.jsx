import React from 'react';
import styles from "../../../styles/customize.module.css";
import BlueButton from "../../buttons/BlueButton";
import {FiInfo } from "react-icons/fi";

const Customize = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.imgBox}>
                    <img src="static/images/customIcon1.png" alt="icon" className={styles.customIcon} />
                    <img src="static/images/customIcon2.png" alt="icon" className={styles.customIconGrn} />
                </div>
                <div>
                <p className={styles.cardTitle}>
                    Assess your country’s situation and customize the decision-making process.
                </p>
                </div>
            </div>
            <p className={styles.detail}>
                Is there an up-to-date National
                Electrification Strategy (NES)?
                <FiInfo/>
            </p>
            <div className={styles.btnGrp}>
                <BlueButton title="yes"/>
                <BlueButton title="no"/>
            </div>
        </div>
    );
};

export default Customize;