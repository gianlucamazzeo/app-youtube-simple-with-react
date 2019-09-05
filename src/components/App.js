import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {

    onTermSubmit = term => {
       // console.log(term);
       youtube.get('/search', {
           params: {
            q: term  
           }
       });
    };
    // create callback 
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App;