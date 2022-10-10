import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="https://images6.alphacoders.com/124/1248742.jpg" />
      </Background>
      <ImageTitle src="https://dx35vtwkllhj9.cloudfront.net/crunchy-roll/one-piece-film-red/images/regions/intl/tt.png">
        {/* <img src="https://dx35vtwkllhj9.cloudfront.net/crunchy-roll/one-piece-film-red/images/regions/intl/tt.png" /> */}
      </ImageTitle>

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
        2022 • 1h 55m • Action • Animation • Adventure • Fantasy
      </SubTitle>
      <Description>
        <p>
          For the first time ever, Uta - the most beloved singer in the world -
          will reveal herself to the world at a live concert. The voice that the
          whole world has been waiting for is about to resound.
        </p>{" "}
        <p>
          Uta - the most beloved singer in the world. Her voice, which she sings
          with while concealing her true identity, has been described as
          "otherworldly." She will appear in public for the first time at a live
          concert. As the venue fills with all kinds of Uta fans - excited
          pirates, the Navy watching closely, and the Straw Hats led by Luffy
          who simply came to enjoy her sonorous performance - the voice that the
          whole world has been waiting for is about to resound. The story begins
          with the shocking fact that she is "Shanks' daughter."
        </p>
      </Description>
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
  opacity: 0.6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  //   height: 25vh;
  margin-top: 20px;
  height: 250px;
  //   width: 35vw;
  width: 300px;
  background-image: ${(props) => `url('${props.src}')`};
  background-position: top-center;
  background-size: cover;
  background-repeat: no-repeat;
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
`;
