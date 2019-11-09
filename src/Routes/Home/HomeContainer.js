
import React,{Component} from 'react';
import HomePresenter from "./HomePresenter";

export default class extends Component {
    render() {
        return (
            <HomePresenter
                popular={}
                upcoming={}
                nowPlaying={}
                loading={}
                error={}
            />
        );
    }
}