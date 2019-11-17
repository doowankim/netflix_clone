
import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import loader from "../../component/Loader";
import Section from "../../component/Section";
import Message from "../../component/Messages";
import Poster from "../../component/Poster";

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
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            year={movie.release_date}
                            rating={movie.vote_average}
                            imageurl={movie.poster_path}
                            isMovie={true}
                        />
                    )}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Movie Popular">
                    {popular.map(movie =>
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            year={movie.release_date}
                            rating={movie.vote_average}
                            imageurl={movie.poster_path}
                            isMovie={true}
                        />
                    )}
                </Section>
            )}
            {upcoming && upcoming.length > 0 && (
                <Section title="Movie Upcoming">
                    {upcoming.map(movie =>
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            year={movie.release_date}
                            rating={movie.vote_average}
                            imageurl={movie.poster_path}
                            isMovie={true}
                        />
                    )}
                </Section>
            )}
            {error && <Message color="#e74c3c" text={error} />}
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