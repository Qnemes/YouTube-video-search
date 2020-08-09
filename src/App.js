import React from 'react';
import './App.css';
import SearchBar from './components/searchBar'
import youtube from './API/youtube'
import VideoList from './components/videoList'
import VideoDetail from './components/videoDetail'

export default class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  componentDidMount() {
    this.handleInputSubmit("")
  }
  handleInputSubmit = async input => {
    const response = await youtube.get('/search', {
      params: {
        q: input
      }
    })
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }
  handleVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }
  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.handleInputSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}