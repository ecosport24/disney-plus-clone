import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp href="#">GET ALL THERE</SignUp>
        <Description>
          The tickets for One Piece Film: Red are now available for purchase the
          same day as the start of the New York Comic Con. Toei Animation
          invited "fans, cosplayers, convention attendees, visitors, and New
          Yorkers" to take over New York's Times Square on Oct. 8 to celebrate
          the anime film.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    content: "";
    background-position: top;
    background-size: cover;
    opacity: 0.7;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

const CTA = styled.div`
  margin-top: 100px;
  width: 80%;
  max-width: 650px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img`
  width: 90%;
`;

const SignUp = styled.a`
  text-decoration: none;
  color: white;
  background-color: #0063e5;
  padding: 20px 0;
  width: 100%;
  text-align: center;
  border-radius: 4px;
  letter-spacing: 1.5px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 18px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 11px;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;
