import React,{Component} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loader from "../../component/Loader";
import Section from "../../component/Section";
import Poster from "../../component/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

class SearchPresenter extends Component {
    render() {
        const {movieResults, tvResults, error, loading, searchTerm, handleSubmit, updateTerm} = this.props;
        return (
            <Container>
                <Helmet>
                    <title>Search | Netflix_clone</title>
                </Helmet>
                <Form onSubmit={handleSubmit}>
                    <Input
                        placeholder="Search Movies or TV Shows..." //html의 input
                        value={searchTerm}
                        onChange={updateTerm}
                    />
                </Form>

                {loading ? (
                    <Loader />
                ) : (
                    <>
                        {movieResults && movieResults.length > 0 && (
                            <Section title="Movie Results">
                                {movieResults.map(movie => (
                                    <Poster
                                        key={movie.id}
                                        id={movie.id}
                                        title={movie.title}
                                        year={movie.release_date}
                                        rating={movie.vote_average}
                                        imageurl={movie.poster_path}
                                        isMovie={true}
                                    />
                                ))}
                            </Section>
                        )}
                        {tvResults && tvResults.length > 0 && (
                            <Section title="TV Results">
                                {tvResults.map(tv => (
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
                    </>
                )}
            </Container>
        );
    }
};

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    searchTerm: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;