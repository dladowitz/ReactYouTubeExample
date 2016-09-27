// library imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// component imports
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// test API key - DISABLE or move to ENV Var
const API_Key = 'AIzaSyCae9rBWFqOXviUYTU1qB0XHmL1y5NMiMM'


// Create a new compent to produce hTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [
        {id: {videoId: 1}, etag: 1, snippet: {title: "Die Hard", description: "Bruce Willis Kills Terrorists", thumbnails: { default: {url: "./images/zebra.jpg"} }}},
        {id: {videoId: 1}, etag: 2, snippet: {title: "Die Hard 2", description: "Bruce Willis Kills Some More Terrorists With A Nail Gun", thumbnails: { default: {url: "./images/mountain_lion.jpg"} }}},
        {id: {videoId: 1}, etag: 3, snippet: {title: "Die Hard 3", description: "Someone Dies I'm pretty Sure", thumbnails: { default: {url: "./images/bridge.jpg"} }}}
      ],
      selectedVideo: null
    };

    this.state.selectedVideo = this.state.videos[0]

    console.log(this.state)

    YTSearch({key: API_Key, term: 'surfboards'}, (videos) => {d
      if(vidoes){
        console.log("Found Videos")
        this.setState({
          videos: videos,
          selectedVideo: vidoes[0]
        });

      }else{
        console.log("Can't find videos")
        this.setState({ videos: ["Die Hard", "Die Hard 2", "Die Hard 3"]})
      }
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => {this.setState({selectedVideo})
                                            console.log("Someone clicked me!")} }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Take this compent's generated HTML and put into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
