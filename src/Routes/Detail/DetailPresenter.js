import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../component/Loader";
import Helmet from "react-helmet";

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

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 13px;
  opacity: 0.7;
  line-height: 1.7;
  width: 80%;
`;

const DetailPresenter = ({result, loading, error}) =>

    loading ? (
        <>
            <Helmet>
                <title>Loading | Netflix_clone</title>
            </Helmet>
            <Loader />
        </>
    ) : (
        <Container>
            <Helmet>
                <title>
                    {result.original_title ? result.original_title : result.original_name}{" "}
                    | Netflix_clone
                </title>
            </Helmet>
            <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
            <Content>
                <Cover bgImage={
                    result.poster_path
                        ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                        : require("../../asset/empty.jpg")
                } />
                <Data>
                    <Title>
                        {result.original_title
                            ? result.original_title
                            : result.original_name}
                    </Title>
                    <ItemContainer>
                        <span>
                            {result.release_date
                                ? result.release_date.substring(0, 10) //10번째 자리에서 substring(잘라낸다)
                                : result.first_air_date.substring(0, 10)}
                        </span>
                        <Divider>•</Divider>
                        <span>
                            {result.runtime ? result.runtime : result.episode_run_time[0]} min
                        </span>
                        <Divider>•</Divider>
                        <span>
                            {result.genres &&
                            result.genres.map((genre, index) => //genre로 구분해주고 index로 리턴
                                index === result.genres.length - 1 //result에 genres가 없다면
                                    ? genre.name
                                    : `${genre.name} / `
                            )}
                        </span>
                    </ItemContainer>
                    <Overview>{result.overview}</Overview>
                </Data>
            </Content>
        </Container>
    );


DetailPresenter.propTypes = {
    result: PropTypes.array, // result: 코드 전체를 뜻함
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;