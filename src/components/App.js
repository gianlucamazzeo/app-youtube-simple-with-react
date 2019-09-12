import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
//
class App extends React.Component {
    state = { videos: [], selectedVideo: null };  // initialize state object array 
  
    componentDidMount() {
       this.onTermSubmit('Buildings');
    }

    onTermSubmit = async term => {  ////  async call
       // console.log(term);
      const response =  await   youtube.get('/search', {   ////  
           params: {
            q: term  
           }
       });

       this.setState({ 
           videos: response.data.items,
           selectedVideo: response.data.items[0]
           
        }); // update state to video Object array
    };

    

    onVideoSelect = (video) => {
        console.log(video);       
       this.setState({ selectedVideo: video });
    };

    // create callback 
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo}/>
                            </div>
                            <div className="five wide column">
                                <VideoList 
                                    onVideoSelect={this.onVideoSelect}
                                    videos={this.state.videos} />
                            </div>
                        </div>                        
                    </div>
            </div>
        );
    }
}

export default App;