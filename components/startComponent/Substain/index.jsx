import React from "react";
import styles from "styles/startSubstain.module.css";
import { BsChevronDown } from "react-icons/bs";
import { Wrapper, Title } from "./styles";

const StartSubstain = () => (
  <>
    <Wrapper>
      <Title>
        The<br></br>
        Sustainable
        <span className="energy">Energy</span>
        <br></br>
        for All<br></br>
        <span className="knowledge">Knowledge</span> Hub
      </Title>
      <p className={styles.subTitle}>
        The Sustainable Energy for All Knowledge Hub is an interactive platform
        that will help/support policy makers in developing conducive policy and
        regulatory frameworks for sustainable energy. The knowledge hub provides
        key resource material for each step of the decision-making process.
        Currently the platform supports the user journey for electricity access.
      </p>

      <p className={styles.subTitle}>
        Find relevant guidelines, tools and templates on electricity access
        based on your country’s assessment and matching your needs by answering
        the following questions. Scroll down to get started…
      </p>
      <div className={styles.downIcon}>
        <BsChevronDown />
      </div>
    </Wrapper>
  </>
);

export default StartSubstain;
