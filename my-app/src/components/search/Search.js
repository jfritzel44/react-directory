import React, {Component} from 'react'
import Directory from '../../components/directory/Directory';
import listing from '../../assets/listing.json';

class Search extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        listing: listing
      };
    }
  
    render() {
        return <div>
            <div className="mb-30"> Search: <input onChange={evt => this.updateInputValue(evt)}/></div>
            <Directory listing = {this.state.listing}></Directory>
        </div>
    }

    updateInputValue(evt) {
        this.search(evt.target.value);
    }

    search(searchText) {
        let listing = this.state.listing;
        
        this.findFile(listing, searchText);
        
        this.setState({
            listing: listing
        })
    }

    findFile(level, searchText) {
        if (!level) {
            return;
        }

        for (var i = 0; i < level.length; i++) {
            if (level[i].name === searchText) {
                level[i].highlight = true;
            } else {
                level[i].highlight = false;
            }

            if (level[i].contents) {
                this.findFile(level[i].contents, searchText);
            }
        }
    }
}

export default Search;

