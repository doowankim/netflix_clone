import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../component/Loader";
import Section from "../../component/Section";
import Message from "../../component/Messages";
import Poster from "../../component/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 0px 10px;
`;

const TVPresenter = ({popular, topRated, airingToday, loading, error}) => (
    <>
        <Helmet>
            <title>TV Shows | Netflix_clone</title>
        </Helmet>
        { loading ? (
                <Loader />
            ) : (
                <Container>
                    {popular && popular.length > 0 && (
                        <Section title="TV Popular">
                            {popular.map(tv => (
                                <Poster
                                    key={tv.id}
                                    id={tv.id}
                                    title={tv.name}
                                    year={tv.first_air_date}
                                    rating={tv.vote_average}
                                    imageurl={tv.poster_path}
                                />
                            ))}
                        </Section>
                    )}
                    {topRated && topRated.length > 0 && (
                        <Section title="TV topRated">
                            {topRated.map(tv => (
                                <Poster
                                    key={tv.id}
                                    id={tv.id}
                                    title={tv.name}
                                    year={tv.first_air_date}
                                    rating={tv.vote_average}
                                    imageurl={tv.poster_path}
                                />
                            ))}
                        </Section>
                    )}
                    {airingToday && airingToday.length > 0 && (
                        <Section title="TV airingToday">
                            {airingToday.map(tv => (
                                <Poster
                                    key={tv.id}
                                    id={tv.id}
                                    title={tv.name}
                                    year={tv.first_air_date}
                                    rating={tv.vote_average}
                                    imageurl={tv.poster_path}
                                />
                            ))}
                        </Section>
                    )}
                    {error && <Message color="#e74c3c" text={error} />}
                </Container>
            )}
    </>
);

TVPresenter.propTypes = {
    popular: PropTypes.array,
    topRated: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TVPresenter;