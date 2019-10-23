import React from 'react';
import styled from 'styled-components';
import { faFile, faFolder, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DirectoryTools from '../directory-tools/DirectoryTools'; 
import './DirectoryRow.css'

const Highlight = styled.span`
    font-weight: bold;
    `

class DirectoryRow extends React.Component {
    constructor(props) {
        super(props);
        this.clickRow = this.clickRow.bind(this);
        this.saveFile = this.saveFile.bind(this);

        this.state = {
            selected: '',
            showTools: false
        }
    }

    clickRow(row) {
        this.props.clickRow(row);
    }

    getType(row) {
        if (row.type === 'file') {
            return <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>  
        } else if (row.type === 'directory') {
            return <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon> 
        }
    }

    getCarotIcon(row) {
        if (row.type === 'file') 
            return null;
        else if (row.type === 'directory' && row.expand) {
            return <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> 
        } else if (row.type === 'directory' && !row.expand) {
            return <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon> 
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
        this.hideTools();
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

    getSelectedClass() {
        if (this.props.row.selected) {
            return 'selected';
        }

        return '';
    }

    render() {
        return  <div onMouseEnter={() => this.showTools()} onMouseLeave={() => this.hideTools()} 
                    className={"pointer " + this.props.color}>

                <div className="directory-row" onClick={() => this.clickRow(this.props.row)}>
                    {this.getCarotIcon(this.props.row)} <span className={this.getSelectedClass()}>{this.getRowName(this.props.row)}</span> 
                </div>

                <DirectoryTools showTools={this.state.showTools} row={this.props.row} saveFile={this.saveFile}></DirectoryTools>
        </div>
    }    
}

export default DirectoryRow