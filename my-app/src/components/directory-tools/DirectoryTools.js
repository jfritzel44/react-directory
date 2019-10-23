import React from 'react';
import AddFile from '../add-file/AddFile'; 
import DeleteFile from '../delete-file/DeleteFile';

class DirectoryTools extends React.Component {
    constructor(props) {
        super(props);
        this.saveFile = this.props.saveFile.bind(this);

        this.state = {
            showTools: false,
            hoverEvent: null,
        }
    }
    render() {
        if (this.props.showTools) {
            return <div>
                    <AddFile saveFile={this.saveFile}></AddFile>
                    <DeleteFile row={this.props.row}></DeleteFile>
                </div>
        } else {
            return "";
        }
    }    
}

export default DirectoryTools