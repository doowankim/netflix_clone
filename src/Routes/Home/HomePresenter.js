
import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import loader from "../../component/loader";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ popular, upcoming, nowPlaying, loading, error }) =>
    loading ? (
        <loader />
    ) : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <div>
                    {nowPlaying.map(movie =>
                        <span key={movie.id}>{movie.title}</span>
                    )}
                </div>
            )}
            {popular && popular.length > 0 && (
                <div>
                    {popular.map(movie =>
                        <span key={movie.id}>{movie.title}</span>
                    )}
                </div>
            )}
            {upcoming && upcoming.length > 0 && (
                <div>
                    {upcoming.map(movie =>
                        <span key={movie.id}>{movie.title}</span>
                    )}
                </div>
            )}
        </Container>
    );

HomePresenter.propTypes = {
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    nowPlaying: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;