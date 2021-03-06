import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { loadDetailGame, loadScreenshots } from "../actions/detailActions";
import { smallImage } from "../util";
import { Link } from "react-router-dom";

const Game = ({ name, id, image }) => {
  const dispatch = useDispatch();
  const loadGame = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetailGame(id));
  };
  return (
    <StyledGame onClick={loadGame}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled.div`
  cursor: pointer;
  width: 100%;
  height: 15rem;
  background: white;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  transition: 0.5s ease;
  box-shadow: 5px 5px 15px 5px #000000;
  &:hover {
    transform: scale(1.05);
  }
  h3 {
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    z-index: 2;
    position: absolute;
    width: 100%;
  }

  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.05);
  }

  @media (max-width: 500px) {
    height: 10rem;
  }
`;

export default Game;
