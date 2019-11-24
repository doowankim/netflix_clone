import React,{Component} from 'react';
import SearchPresenter from "./SearchPresenter";
import {moviesApi, tvApi} from "../../api";

export default class extends Component {

    state = {
        movieResults: null,
        tvResults: null,
        error: null,
        loading: true,
        searchTerm: ""
    };

    handleSubmit = () => {
        const { searchTerm } = this.state;
        if(searchTerm !== ""){

        }
    };

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({ loading: true }); //검색했을때 불러와야 되기 때문에 loading은 true
        try {
            const {
                data: { results: tvResults }
            } = await tvApi.search(searchTerm);
            const {
                data: { results: movieResults }
            } = await moviesApi.search(searchTerm);

            this.setState({ tvResults, movieResults });

        }
        catch {
            this.setState({ error: "Can't find results"});
        }
        finally {
            this.setState({ loading: false });
        }
    };


    render() {
        const {movieResults, tvResults, error, loading, searchTerm} = this.state;
        return (
            <SearchPresenter
                loading={loading}
                handleSubmit={}
                movieResults={movieResults}
                tvResults={tvResults}
                error={error}
                searchTerm={searchTerm}
            />
        );
    }
}