import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import tmbd from "../tmbd";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const getPosterPath = (poster, isPoster = true) => {
    const imgSize = isPoster ? "w500" : "original";
    return `https://www.themoviedb.org/t/p/${imgSize}/${poster}`;
  };

  const timeFormat = (runtimeInMinutes) => {
    const hour = Math.floor(runtimeInMinutes / 60);
    const min = runtimeInMinutes % 60;
    return `${hour}h: ${min}m`;
  };

  useEffect(() => {
    const getMovie = async () => {
      const { data } = await tmbd.get(`movie/${id}`);
      if (data) {
        setMovie(data);
      }
    };
    getMovie();
  }, []);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={getPosterPath(movie.backdrop_path, false)} />
          </Background>
          <ImageTitle src={getPosterPath(movie.poster_path)}> </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>
            {new Date(movie.release_date).toLocaleDateString()} •
            {` ${timeFormat(movie.runtime)}`}
            {movie.genres.map((genre) => {
              return ` • ${genre.name} `;
            })}
            Fantasy
          </SubTitle>
          <Description>
            <p>{movie.overview}</p>
          </Description>
        </>
      )}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // object-position: top left;
  }
`;

const ImageTitle = styled.div`
  margin-top: 20px;
  // height: 25vh;
  // width: 35vw;
  height: 450px;
  width: 300px;
  background-image: ${(props) => `url('${props.src}')`};
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  border-radius: 10px;
`;
// const ImageTitle = styled.div`
//   height: 30vh;
//   min-height: 170px;
//   width: 35vw;
//   min-width: 200px;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

const Controls = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;
const PlayButton = styled.button`
  display: flex;
  align-items: center;
  background: rgb(249, 249, 249);
  border: none;
  border-radius: 4px;
  font-size: 15px;
  letter-spacing: 1.8px;
  cursor: pointer;
  margin-right: 20px;
  padding: 0 24px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  text-transform: uppercase;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);
`;
const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgb(249, 249, 249);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  margin-right: 20px;

  span {
    color: white;
    font-size: 20px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  margin-top: 20px;
  min-height: 26px;
`;
const Description = styled.div`
  color: rgb(249, 249, 249);
  font-size: 20px;
  margin-top: 16px;
  line-height: 1.4;
  max-width: 900px;
`;
