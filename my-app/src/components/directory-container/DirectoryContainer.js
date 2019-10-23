import React, {Component} from 'react'
import Directory from '../directory/Directory';
import Search from '../search/Search';
import listing from '../../assets/listing.json';
import { thisTypeAnnotation } from '@babel/types';

class DirectoryContainer extends React.Component {
    constructor(props) {
      super(props);

      let path = [];

      this.state = {
        currSelected: null,
        listing: listing,
        path: path,
      };

      this.clickRow = this.clickRow.bind(this);
      this.refresh = this.refresh.bind(this);
    }
  
    render() {
        return  <div className="mb-30">
                    <div className="d-flex flex-row mt-5 mb-3">
                        <Search listing = {this.state.listing} refresh={this.refresh}></Search>
                        <button onClick={() => this.closeAll()} className="btn btn-info btn-sm ml-2">Close All</button>
                        <button onClick={() => this.expandAll()} className="btn btn-info btn-sm ml-2">Expand All</button>
                    </div>

                    <Directory listing = {this.state.listing} clickRow={this.clickRow}></Directory>
                </div>
    }

    expandAll() {
        this.expandAllFromRow(this.state.listing, false);
        this.refresh(this.state.listing);
    }

    closeAll() {
        this.expandAllFromRow(this.state.listing, true);
        this.refresh(this.state.listing);
    }

    refresh(listing) {
        this.setState({
            listing: listing
        })
    }

    expandAllFromRow(row, expand) {
        for (var i = 0; i < row.length; i++) {
            if (row[i].type != 'file') {
                row[i].expand = expand;
            }

            if (row[i].contents) {
                this.expandAllFromRow(row[i].contents);
            }
        }   
    }

    setSelected(row) {
        if (this.currSelected) {
            this.currSelected.selected = false;
            row.selected = true;
        } else {
            row.selected = true;
        }
        
        this.currSelected = row;

        this.setState({
            listing: this.state.listing
        })

        console.log("listing now: ");
        console.log(this.state.listing);
    }


    clickRow(row) { 
        
        this.setSelected(row);


        if (row.type === 'file') {
            return;
        }

        if (!row.expand) {
            row.expand = true;
        } else {
            row.expand = false;
        }

        this.setState({
            listing: this.state.listing
        })


    }
}

export default DirectoryContainer;

