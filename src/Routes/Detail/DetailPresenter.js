import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const DetailPresenter = ({result, loading, error}) =>
    <h1>{result}</h1>;


DetailPresenter.propTypes = {
    result: PropTypes.array, // result: 코드 전체를 뜻함
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;