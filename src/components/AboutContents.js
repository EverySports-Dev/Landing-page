import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import SplashImg from "../img/splash.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1325px;

  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 700px;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

const SplashDesc = styled.div`
  width: 350px;
  font-weight: bold;
  color: #495057;
  @media screen and (max-width: 767px) {
    h2 {
      font-size: 1.25em;
    }
    p {
      font-size: 0.875rem;
    }
  }
`;

const Splah = styled.img`
  width: 300px;
  @media screen and (max-width: 767px) {
    width: 150px;
  }
`;

const BackgroundStyles = styled.div`
  width: 100%;
  height: 150px;
  background: #96f2d7;
  position: absolute;
  transform: translate(0, 270%);
  z-index: -1;
`;

const AboutContents = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <Container>
      <BackgroundStyles />
      <Contents data-aos="fade-up">
        <SplashDesc>
          <h2>Hi melo 팀원을 소개합니다.</h2>
          <button onClick={() => console.log("123123")} value="김성진">
            <p>김성진</p>
          </button>
          <p>정원영</p>
          <p>이태민</p>
          <p></p>
        </SplashDesc>
        <Splah src={SplashImg} />
      </Contents>
    </Container>
  );
};

export default AboutContents;
