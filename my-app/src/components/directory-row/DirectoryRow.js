import React from 'react';
import styled from 'styled-components';
import { faFile, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DirectoryTools from '../directory-tools/DirectoryTools'; 
import './DirectoryRow.css'

const Highlight = styled.span`
    font-weight: bold;
    `

class DirectoryRow extends React.Component {
    constructor(props) {
        super(props);
        this.expand = this.expand.bind(this);
        this.saveFile = this.saveFile.bind(this);

        this.state = {
            showTools: false
        }
    }

    expand(row) {
        this.props.expand(row);
    }

    getType(row) {
        if (row.type === 'file') {
            return <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>  
        } else if (row.type === 'directory') {
            return <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon> 
        }
    }

    getRowName(row) {
        if (row.highlight) {
            return <Highlight>{row.name}</Highlight>
        } else {
            return row.name;
        }
    }

    saveFile(fileName) {
        this.props.saveFile(this.props.row.contents, fileName);
        this.hideDirectoryTools();
    }

    hideAddFileInput() {
        this.setState({
            showAddFileInput: false
        })
    }

    showTools() {
        if (this.props.row.expand) {
            return;
        }

        let hoverEvent = setTimeout(() => {
            if (this.props.row.type === 'directory') {
                this.setState({
                    showTools: true
                }) 
            }}, 300)

        this.setState({
            hoverEvent: hoverEvent
        })
    }

    hideTools() {
        clearTimeout(this.state.hoverEvent);

        this.setState({
            showTools: false,
            hoverEvent: null
        }) 
    }

    render() {
        return  <div onMouseEnter={() => this.showTools()} onMouseLeave={() => this.hideTools()} 
                    className={"pointer " + this.props.color}>

                <div onClick={() => this.expand(this.props.row)}>
                    {this.getType(this.props.row)} {this.getRowName(this.props.row)} 
                </div>

                <DirectoryTools showTools={this.state.showTools} row={this.props.row} saveFile={this.saveFile}></DirectoryTools>
        </div>
    }    
}

export default DirectoryRow