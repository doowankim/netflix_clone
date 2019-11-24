import React,{Component} from 'react';
import SearchPresenter from "./SearchPresenter";
import {moviesApi, tvApi} from "../../api";

export default class extends Component {

    state = {
        movieResults: null,
        tvResults: null,
        error: null,
        loading: false,
        searchTerm: ""
    };

    handleSubmit = () => {
        const { searchTerm } = this.state;
        if(searchTerm !== ""){ //검색창이 빈칸이 아니라면 searchByTerm을 네트워크에 태움
            this.searchByTerm();
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

    // 검색창에 키워드를 쓸 수 있게 함
    updateTerm = event => {
        const {
            target: { value }
        } = event;
        this.setState({
            searchTerm: value
        });
    };

    render() {
        const {movieResults, tvResults, error, loading, searchTerm} = this.state;
        return (
            <SearchPresenter
                loading={loading}
                handleSubmit={this.handleSubmit}
                movieResults={movieResults}
                tvResults={tvResults}
                error={error}
                searchTerm={searchTerm}
                updateTerm={this.updateTerm}
            />
        );
    }
}