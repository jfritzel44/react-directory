import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './DeleteFile.css'

function DeleteFileButton(props) {
    return (
        <span className="delete-file-prompt">
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </span>
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
            return (<DeleteFileButton></DeleteFileButton>)
        }

        return (null);
    }    
}

export default DeleteFile


