import React, {Component} from 'react'
import './Main.css'
import listing from '../../assets/listing.json';
import DirectoryContainer from '../directory-container/DirectoryContainer';

class Main extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        return (
            <div className="container">
              <div className="ml-20 mt-30">
                <DirectoryContainer listing = {listing}></DirectoryContainer>
              </div>
            </div>
          );
    }
}

export default Main;
