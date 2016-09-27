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
          {id: {videoId: 1}, etag: 1, snippet: {title: "Zebra Mix", description: "Have Zebra Have Horse", thumbnails: { default: {url: "./images/zebra.jpg"} }}},
          {id: {videoId: 1}, etag: 2, snippet: {title: "Wild Mountain Lions", description: "Dusty's Cousin", thumbnails: { default: {url: "./images/mountain_lion.jpg"} }}},
          {id: {videoId: 1}, etag: 3, snippet: {title: "Ye Ole Bridge", description: "Old School Bridge", thumbnails: { default: {url: "./images/bridge.jpg"} }}}
        ],
      selectedVideo: {id: {videoId: 1}, etag: 1, snippet: {title: "Zebra Mix", description: "Have Zebra Have Horse", thumbnails: { default: {url: "./images/zebra.jpg"} }}},
    };

    console.log("Current state: ")
    console.log(this.state)

    // YTSearch({key: API_Key, term: 'surfboards'}, (videos) => {d
    //   if(vidoes){
    //     console.log("Found Videos")
    //     this.setState({
    //       videos: videos,
    //       selectedVideo: vidoes[0]
    //     });
    //
    //   }else{
    //     console.log("Can't find videos")
    //     this.setState({ videos: ["Die Hard", "Die Hard 2", "Die Hard 3"]})
    //   }
    // });
  }

  videoSearch(term){
    console.log("You searched for: " + term)
    var videos = []
    var matched = false

    if(term === 'ranch'){
      console.log("Matched 'ranch'");
      videos = [
        {id: {videoId: 1}, etag: 1, snippet: {title: "Zebra Mix", description: "Have Zebra Have Horse", thumbnails: { default: {url: "./images/zebra.jpg"} }}},
        {id: {videoId: 1}, etag: 2, snippet: {title: "Wild Mountain Lions", description: "Dusty's Cousin", thumbnails: { default: {url: "./images/mountain_lion.jpg"} }}},
        {id: {videoId: 1}, etag: 3, snippet: {title: "Ye Ole Bridge", description: "Old School Bridge", thumbnails: { default: {url: "./images/bridge.jpg"} }}}
      ]
      matched = true
    } else if(term === 'climbing') {
      console.log("Matched 'climbing'")
      videos = [
        {id: {videoId: 1}, etag: 1, snippet: {title: "Success", description: "We Did It", thumbnails: { default: {url: "./images/success.jpg"} }}},
        {id: {videoId: 1}, etag: 2, snippet: {title: "Top", description: "At the top of the mountain", thumbnails: { default: {url: "./images/top.jpg"} }}},
        {id: {videoId: 1}, etag: 3, snippet: {title: "Giant", description: "Looks like a giant", thumbnails: { default: {url: "./images/giant.jpg"} }}}
      ]
      matched = true
    }

    if(matched){
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    }

    console.log("Current state: ")
    console.log(this.state)
  }

  render() {
    console.log("I' rendering the index page!")
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => {
                                            this.setState({selectedVideo})
                                            console.log("Someone clicked me!")
                                          }
                        }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Take this compent's generated HTML and put into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
