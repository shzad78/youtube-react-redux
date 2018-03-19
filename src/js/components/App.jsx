import React from 'react';
import {connect} from 'react-redux';

import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import {getVideos} from '../actions';




export default class App extends React.Component {
 
  render() {
    let { selectedVideo, videoList } = this.state;

    return (
      <div className="app">
        <Nav />
        <div className="col-md-7">
          <VideoPlayer  />
        </div>
        <div className="col-md-5">
          <VideoList />
        </div>
      </div>
    )
  }

  componentDidMount() {
    const {getVideos}=this.props;
    this.getVideos('javascript', true);
  }



};