import React from "react";

export const AddListContact = () => {
    return <div>
        <div className="field-input-group">
            <input placeholder="Email" type="text" className="ant-input" />
        </div>
        <div className="field-input-group">
            <input placeholder="FaceBook" type="text" className="ant-input" />
        </div>
        <div className="field-input-group">
            <input placeholder="Phone" type="text" className="ant-input" />
        </div>
        <div className="modal-new-user-footer">
            <button className="ant-btn ant-btn-primary">
                Save
            </button>
            <button className="ant-btn" style={{marginLeft: 10}} >
                Cancel
            </button>
        </div>
    </div>
}