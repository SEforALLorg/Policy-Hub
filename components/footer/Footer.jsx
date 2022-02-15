import React from 'react';
import styles from "../../styles/footer.module.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
    return (
        <div>
        <div className={styles.footerWrap}>
            <div className={styles.iconsWrap}>
                <div className={styles.icons}>
                    <FaFacebookF />
                </div>
                <div className={styles.icons}>
                    <BsTwitter />
                </div>
                <div className={styles.icons}>
                    <FaLinkedinIn />
                </div>
                <div className={styles.icons}>
                    <FaInstagram />
                </div>
                <div className={styles.icons}>
                    <FaYoutube />
                </div>
            </div>
            <div className={styles.infoWrap}>
                <p className={styles.footDetail}>
                    Powered by Sustainable Energy For All
                </p>
                <p className={styles.footDetail}>
                    View Resources
                </p>
                <p className={styles.footDetail}>
                    Download Decision Tree
                </p>
            </div>
        </div>
            <div className={styles.border}></div>
            <div className={styles.footerWrap}>
                <p className={styles.copyRight}>
                Copyright 2022 Sustainable Energy for All
                </p>
                <div className={styles.imgBox}>
                    <img src="static/images/forall.svg" alt="all"/>
                    <img src="static/images/founder.svg" alt="founder"/>
                    <img src="static/images/star.svg" alt="star"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;