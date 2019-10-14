import React, {Component} from 'react'
import styled from 'styled-components';
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Highlight = styled.span`
    background-color: red;
    `

const MarginWrapper = styled.div`
    margin-left: 20px;
    `

class Directory extends React.Component {
    constructor(props) {
        super(props);
    }

    getType(level) {
        if (level.type === 'file') {
            return <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>  
        } else if (level.type === 'directory') {
            return <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon> 
        }
    }

    getHighlight(level) {
        if (level.highlight) {
            return <Highlight>{level.name}</Highlight>
        } else {
            return level.name;
        }
    }

    hasContent(listing) {
        if (listing.contents) {
            return true;
        }

        return false;
    }

    render() {
        return <MarginWrapper>
           {this.props.listing.map((level) => {
               return <div>
                    {this.getType(level)} {this.getHighlight(level)}      
                    {this.hasContent(level) && <Directory listing={level.contents}></Directory>}
                </div>
            })}
        </MarginWrapper>
    }    
}

export default Directory