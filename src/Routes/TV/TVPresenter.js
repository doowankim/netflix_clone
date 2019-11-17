import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../component/Loader";
import Section from "../../component/Section";
import Message from "../../component/Messages";

const Container = styled.div`
  padding: 0px 10px;
`;

const TVPresenter = ({popular, topRated, airingToday, loading, error}) =>
    loading ? (
        <loader />
    ) : (
        <Container>
            {popular && popular.length > 0 && (
                <Section title="TV Popular">
                    {popular.map(tv =>
                        <span key={tv.id}>{tv.name}</span>
                    )}
                </Section>
            )}
            {topRated && topRated.length > 0 && (
                <Section title="TV topRated">
                    {topRated.map(tv =>
                        <span key={tv.id}>{tv.name}</span>
                    )}
                </Section>
            )}
            {airingToday && airingToday.length > 0 && (
                <Section title="TV airingToday">
                    {airingToday.map(tv =>
                        <span key={tv.id}>{tv.name}</span>
                    )}
                </Section>
            )}
            {error && <Message color="#e74c3c" text={error} />}
        </Container>
    );

TVPresenter.propTypes = {
    popular: PropTypes.array,
    topRated: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TVPresenter;