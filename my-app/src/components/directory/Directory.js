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
        this.clickRow = this.clickRow.bind(this);
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

    clickRow(row) {
        this.props.clickRow(row);
    }

    render() {
        return <MarginWrapper> 
           {this.props.listing.map((row) => {
               if (!row.expand) {
                return <div>
                    <DirectoryRow saveFile={this.saveFile} clickRow={this.clickRow} row={row}></DirectoryRow>
                    {this.hasContent(row) && <Directory clickRow={this.clickRow} listing={row.contents}></Directory>}
                </div>
               } {
                return <DirectoryRow color="gray" clickRow={this.clickRow} row={row}></DirectoryRow>
               }
            })
            }
        </MarginWrapper>
    }    
}

export default Directory


