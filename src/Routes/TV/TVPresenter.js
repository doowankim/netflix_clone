import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const TVPresenter = ({popular, topRated, airingToday, loading, error}) =>
    <h1>{popular}</h1>;

TVPresenter.propTypes = {
    popular: PropTypes.array,
    topRated: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default TVPresenter;