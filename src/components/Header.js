import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg"></Logo>
      <NavMenu>
        <a href="#">
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a href="#">
          <img src="/images/watchlist-icon.svg" />
          <span>watchlist</span>
        </a>
        <a href="#">
          <img src="/images/original-icon.svg" />
          <span>originals</span>
        </a>
        <a href="#">
          <img src="/images/movie-icon.svg" />
          <span>movie</span>
        </a>
        <a href="#">
          <img src="/images/series-icon.svg" />
          <span>series</span>
        </a>
      </NavMenu>

      <div>
        <UserImage profileImg="me.jpg" />
      </div>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    padding: 0 12px;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImage = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-image: ${(props) => `url('/images/${props.profileImg}')`};
  background-position: top-center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
