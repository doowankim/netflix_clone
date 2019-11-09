
import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const HomePresenter = ({ popular, upcoming, nowPlaying, loading, error }) =>
    <h1>{popular}</h1>;

HomePresenter.propTypes = {
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    nowPlaying: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;