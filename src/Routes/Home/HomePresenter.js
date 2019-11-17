
import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import loader from "../../component/Loader";
import Section from "../../component/Section";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ popular, upcoming, nowPlaying, loading, error }) =>
    loading ? (
        <loader />
    ) : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                    {nowPlaying.map(movie =>
                        <span key={movie.id}>{movie.title}</span>
                    )}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular">
                    {popular.map(movie =>
                        <span key={movie.id}>{movie.title}</span>
                    )}
                </Section>
            )}
            {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming">
                    {upcoming.map(movie =>
                        <span key={movie.id}>{movie.title}</span>
                    )}
                </Section>
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