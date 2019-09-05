import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
//
class App extends React.Component {
    state = { videos: [] };  // initialize state object array 
  
    onTermSubmit = async term => {  ////  async call
       // console.log(term);
      const response =  await   youtube.get('/search', {   ////  
           params: {
            q: term  
           }
       });

       this.setState({ videos: response.data.items}); // update state to video Object array
    };


    // create callback 
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;