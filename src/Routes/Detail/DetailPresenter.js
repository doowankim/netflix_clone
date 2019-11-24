import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../component/Loader";

const Container = styled.div`
  height: calc(100vh - 50px); //calc: 계산식
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage}); //Backdrop 안에 bgImage라는 property 생성
  background-position: center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5; //투명도
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div` //posterimage
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;


const DetailPresenter = ({result, loading, error}) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
            <Content>
                <Cover bgImage={
                    result.poster_path
                        ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                        : require("../../asset/empty.jpg")
                } />
            </Content>
        </Container>
    );


DetailPresenter.propTypes = {
    result: PropTypes.array, // result: 코드 전체를 뜻함
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;