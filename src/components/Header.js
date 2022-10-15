import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  setLogin,
  setLogout,
} from "../features/user/userSlice";
import { auth, provider } from "../firebase";

const Header = () => {
  const name = useSelector(selectUserName);
  const photo = useSelector(selectUserPhoto);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const setUser = (user) => {
    dispatch(
      setLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const logIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user.multiFactor.user;
      setUser(user);
      navigate("/");
    });
  };

  const logOut = () => {
    auth.signOut().then(() => {
      dispatch(setLogout());
      navigate("/login");
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <Nav>
      <Link to={"/"}>
        <Logo src="/images/logo.svg"></Logo>
      </Link>

      {!name ? (
        <LoginContainer>
          <LoginBtn onClick={logIn}>Login</LoginBtn>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <div>
                <img src="/images/home-icon.svg" />
                <span>HOME</span>
              </div>
            </Link>
            <div href="#">
              <img src="/images/watchlist-icon.svg" />
              <span>watchlist</span>
            </div>
            <div href="#">
              <img src="/images/original-icon.svg" />
              <span>originals</span>
            </div>
            <div href="#">
              <img src="/images/movie-icon.svg" />
              <span>movie</span>
            </div>
            <div href="#">
              <img src="/images/series-icon.svg" />
              <span>series</span>
            </div>
          </NavMenu>

          <div>
            <UserImage profileImg={photo} onClick={logOut} />
          </div>
        </>
      )}
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

  div {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    padding: 0 12px;
    cursor: pointer;

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
  background-image: ${(props) => `url('${props.profileImg}')`};
  background-position: top-center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const LoginBtn = styled.div`
  padding: 8px 16px;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  background-color: rgba(0, 0, 0, 0.6);

  &:hover {
    color: #000;
    background-color: #f9f9f9;
    border-color: transparent;
  }
`;
