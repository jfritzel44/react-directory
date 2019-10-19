import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './DeleteFile.css'

function DeleteFileButton(props) {
    return (
        <div className="delete-file-prompt">
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Delete File
        </div>
    )
}

class DeleteFile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showButton: this.props.showButton
        }
    }

    render() {
        if (this.props.row.type === 'file') {
            return (<div> <DeleteFileButton isFile={this.props.row.type === 'file'}></DeleteFileButton></div>)
        }

        return (null);
    }    
}

export default DeleteFile


