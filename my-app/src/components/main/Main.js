import React, {Component} from 'react'
import './Main.css'
import listing from '../../assets/listing.json';
import Directory from '../../components/directory/Directory';
import Search from '../../components/search/Search';

class Main extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        return (
            <div className="container">
              <div className="ml-20 mt-30"><Search listing = {listing}></Search></div>
            </div>
          );
    }
}

export default Main;
