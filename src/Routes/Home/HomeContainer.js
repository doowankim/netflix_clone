
import React,{Component} from 'react';
import HomePresenter from "./HomePresenter";
import {moviesApi} from "../../api";

export default class extends Component {
    //상태값 초기설정
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    };


    // lifecycle (networking) function
    async componentDidMount() {
        //네트워크 태운것
        try {
            const {
                data: { results: nowPlaying }
            } = await moviesApi.nowPlaying();

            const {
                data: { results: upcoming }
            } = await moviesApi.upcoming();

            const {
                data: { results: popular }
            } = await moviesApi.popular();



            this.setState({
                nowPlaying, upcoming, popular
            });
        }
        catch {
            this.setState({
                error: "can't get moviedata"
            });
        }
        finally {
            this.setState({
                loading: false
            });
        }
    }


    render() {

        const {nowPlaying, upcoming, popular, error, loading} = this.state;

        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }
}