
import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.div``;

const Rating = styled.span``;

const Title = styled.span``;

const Year = styled.span``;




const Poster = ({ id, title, rating, year, imageurl, isMovie=false }) => (
    <Container>
        <ImageContainer>
            <Image>
                <Rating>
                    <span role="img" aria-label="rating">⭐️</span>{" "}{rating / 10}
                </Rating>
            </Image>
            <Title>{title}</Title>
            <Year>{year}</Year>
        </ImageContainer>
    </Container>
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