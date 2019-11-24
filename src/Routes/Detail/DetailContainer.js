import React,{Component} from 'react';
import DetailPresenter from "./DetailPresenter";
import {moviesApi, tvApi} from "../../api";

export default class extends Component {
    // state = {
    //     result: null,
    //     loading: true,
    //     error: null
    // };
    constructor(props) {
        super(props); //constructor 최상위단에서 동작하는 것
        const {
            location: { pathname }
        } = props;
        this.state = {
            result: null,
            loading: true,
            error: null,
            isMovie: pathname.includes("/movie/") //isMovie가 참이면 movie로 가고 거짓이면 tv로 간다
        };
    }
    async componentDidMount() {
        const {
            match: {
                params: { id }
            },
            history: { push } //history는 어디 화면으로 넘긴다는 뜻 (밀어넣는다)
        } = this.props;
        const { isMovie } = this.state;
        const parsedId = parseInt(id); //id를 int(정수)로 바꿔준다는 뜻
        if(isNaN(parsedId)) { //isNaN = 안에 내용이 없다면
            return push("/"); //movie나 Tv로 간다는 뜻
        }
        let result = null; //결과값을 상수로 잡아줌
        try {
            if(isMovie) { //ismovie가 참이면
                ({ data: result } = await moviesApi.movieDetail(parsedId)); //movie쪽으로 네트워크 태운 것, 결과를 result에 담음
            }
            else {
                ({ data: result } = await tvApi.tvDetail(parsedId)); //tv쪽으로 네트워크 태운 것, 결과를 result에 담음
            }
        }
        catch {
            this.setState({ error: "Can't find anything"});
        }
        finally {
            this.setState({ loading: false, result });
        }
    }


    render() {
        const {result, loading, error} = this.state;

        return(
            <DetailPresenter
                result={result}
                loading={loading}
                error={error}
            />
        );
    }
}