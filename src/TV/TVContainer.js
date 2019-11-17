import React,{Component} from 'react';
import TVPresenter from "./TVPresenter";
import {tvApi} from "../api";

export default class extends Component {

    //1. 상태값 지정
    state = {
        popular: null,
        topRated: null,
        airingToday: null,
        loading: true,
        error: null
    };
    //2. 네트워크 데이터 불러오기
    async componentDidMount() {
        try {
            const {
                data: {results: popular}
            } = await tvApi.popular();

            const {
                data: {results: topRated}
            } = await tvApi.topRated();

            const {
                data: {results: airingToday}
            } = await tvApi.airingToday();



            this.setState({
                popular, topRated, airingToday
            });
        }
        catch {
            this.setState({
                error: "can't get tvdata"
            });
        }
        finally {
            this.setState({
                loading: false
            });
        }
    }


    render() {
        //3. 상태값 상수화
        const {popular, topRated, airingToday, loading, error} = this.state;
        return (
            //4. 화면에 표현
            <TVPresenter
                popular={popular}
                topRated={topRated}
                airingToday={airingToday}
                loading={loading}
                error={error}
            />
        );
    }
}