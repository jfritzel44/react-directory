import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddFile.css'

function AddFileButton(props) {
    if (props.visible) {
        return (
            <div onClick={() => props.showAddFileInput()} className="add-file-prompt">
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add File
            </div>
        )
    }

    return (null);
}

function AddFileInput(props) {
    if (props.visible) {
        return (
            <div className="add-file-input">
                <FontAwesomeIcon icon={faFile}></FontAwesomeIcon> 
                <input className="ml-2" onChange={evt => props.updateInputValue(evt)}/>
                <button onClick={() => props.saveFile()} className="btn btn-info btn-sm ml-2"> Save </button>
                <button onClick={() => props.hideAddFileInput()} className="btn btn-info btn-sm ml-2"> Cancel </button>
            </div>
        )
    }

    return (null);
}

class AddFile extends React.Component {
    constructor(props) {
        super(props);

        this.saveFile = this.saveFile.bind(this);
        this.showAddFileInput = this.showAddFileInput.bind(this);
        this.hideAddFileInput = this.hideAddFileInput.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);

        this.state = {
            listing: this.props.listing,
            showAddFileButton: this.props.showAddFileButton,
            showAddFileInput: this.props.showAddFileInput,
            fileInputValue: null
        }
    }

    saveFile() {
        this.props.saveFile(this.state.fileInputValue);
    }

    updateInputValue(evt) {
        this.setState({
            fileInputValue: evt.target.value
        })
    }

    showAddFileInput() {
        this.setState({
            showInput: true
        })
    }

    hideAddFileInput() {
        this.setState({
            showInput: false
        })
    }

    render() {
        return  <div>
                    <AddFileButton visible={!this.state.showInput} showAddFileInput={this.showAddFileInput}></AddFileButton>
                    <AddFileInput visible={this.state.showInput} updateInputValue={this.updateInputValue} saveFile={this.saveFile} 
                    hideAddFileInput={this.hideAddFileInput}></AddFileInput>
                </div>
    }    
}

export default AddFile


