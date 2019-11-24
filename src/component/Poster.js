
import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
  padding-bottom: 20px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 10px;
  right: 10px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 7px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3; //알파값
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;




const Poster = ({ id, title, rating, year, imageurl, isMovie=false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image
                    bgUrl={
                        imageurl
                            ? `https://image.tmdb.org/t/p/w300${imageurl}`
                            : require("../asset/empty.jpg")
                    }
                />
                <Rating>
                    <span role="img" aria-label="rating">⭐️</span>
                    {" "}{rating}{" "} / {" "}10
                </Rating>
            </ImageContainer>
            <Title>
                {title.length > 18 ? `${title.substring(0, 18)}…` : title}
            </Title>
            <Year>{year}</Year>
        </Container>
    </Link>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    imageurl: PropTypes.string,
    isMovie: PropTypes.bool
};

export default Poster;