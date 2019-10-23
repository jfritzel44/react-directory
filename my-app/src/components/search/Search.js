import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listing: this.props.listing,
            step: ""
        };
    }

    render() {
        return <div> 
            Search: <input onChange={evt => this.updateInputValue(evt)}/>
        </div>
    }    

    updateInputValue(evt) {
        this.search(evt.target.value);
        this.props.refresh(this.state.listing);
    }

    search(searchText) {
        let listing = this.state.listing;
        this.findFile(listing, searchText);
        
        this.setState({
            listing: listing
        })
    }

    findFile(row, searchText) {
        if (!row) {
            return;
        }

        for (var i = 0; i < row.length; i++) {
            if (row[i].name === searchText) {
                row[i].highlight = true;
            } else {
                row[i].highlight = false;
            }

            if (row[i].contents) {
                this.findFile(row[i].contents, searchText);
            }
        }
    }
}

export default Search