import React from 'react';
import './style.scss';
import { CustomButton } from '../button/Index'

export const MultiFileUploader = () => {
    return (
        <div className="multi-file-uploader-container text-center px-30 py-30">
            <p className="text-dark font-14 fw-bolder mb-2">Select your files & and upload to media. It's easy to upload.</p>
            <p className="text-muted font-14 mb-4">Unlimited uploads remaining this month.</p>
            <CustomButton
                className="btn-success font-14 border-0"
                style={{ padding: "8px 30px", borderRadius: 25 }}
            >Select files</CustomButton>
        </div>
    );
};