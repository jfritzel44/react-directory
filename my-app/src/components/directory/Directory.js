import React from 'react';
import styled from 'styled-components';
import DirectoryRow from '../directory-row/DirectoryRow'; 

import './Directory.css'

const MarginWrapper = styled.div`
    margin-left: 20px;
    `

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.expand = this.expand.bind(this);
        this.saveFile = this.saveFile.bind(this);

        this.state = {
            listing: this.props.listing
        }
    }

    hasContent(listing) {
        if (listing.contents) {
            return true;
        }

        return false;
    }

    saveFile(row, fileName) {
        
        row.unshift({
                "type": "file",
                "name": fileName
        })

        this.setState({
            listing: this.state.listing
        })
    }

    expand(row) {
        this.props.expand(row);
    }

    render() {
        return <MarginWrapper> 
           {this.props.listing.map((row) => {
               if (!row.expand) {
                return <div>
                    <DirectoryRow saveFile={this.saveFile} expand={this.expand} row={row}></DirectoryRow>
                    {this.hasContent(row) && <Directory expand={this.expand} listing={row.contents}></Directory>}
                </div>
               } {
                return <DirectoryRow color="gray" expand={this.expand} row={row}></DirectoryRow>
               }
            })
            }
        </MarginWrapper>
    }    
}

export default Directory


