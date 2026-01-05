import React, { useState, useRef } from "react";
import {
    IonButton,
    IonIcon,
    IonSpinner,
    IonChip,
    IonLabel,
    IonCard,
} from "@ionic/react";
import {
    imageOutline,
    documentOutline,
    addOutline,
    checkmarkCircle,
    closeCircle,
} from "ionicons/icons";
import {
    useGetFilesQuery,
    useAddFileMutation,
    type File,
} from "../../../../member-app/features/files/filesApi";
import "./FileSelector.css";

export interface FileSelectorProps {
    selectedFileId?: number;
    onFileSelect: (fileId: number | undefined) => void;
    fileType?: "image" | "model" | "document" | "texture" | "other";
    label?: string;
    allowUpload?: boolean;
}

const FileSelector: React.FC<FileSelectorProps> = ({
    selectedFileId,
    onFileSelect,
    fileType,
    label = "Select File",
    allowUpload = true,
}) => {
    const { data: files, isLoading } = useGetFilesQuery();
    const [addFile, { isLoading: isUploading }] = useAddFileMutation();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadError, setUploadError] = useState<string>("");

    // Filter files by type if specified
    const filteredFiles = files?.filter((file) => {
        if (!fileType) return true;
        return file.type === fileType;
    });

    const handleFileUpload = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setUploadError("");
        const formData = new FormData();
        formData.append("file", file);

        try {
            const result = await addFile(formData).unwrap();
            onFileSelect(result.id);
        } catch (error) {
            setUploadError("Failed to upload file. Please try again.");
        }

        // Reset input
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const getFileIcon = (file: File): string => {
        if (file.type === "image" || file.mime_type?.startsWith("image/")) {
            return imageOutline; // Fallback icon
        }
        if (file.type === "model") {
            return documentOutline;
        }
        return documentOutline;
    };

    const isSelected = (fileId: number) => fileId === selectedFileId;

    return (
        <div className="file-selector">
            <div className="file-selector-header">
                <span className="file-selector-label">{label}</span>
                {selectedFileId && (
                    <IonButton
                        size="small"
                        fill="clear"
                        color="medium"
                        onClick={() => onFileSelect(undefined)}
                    >
                        Clear Selection
                    </IonButton>
                )}
            </div>

            <div className="file-selector-container">
                {isLoading ? (
                    <div className="file-selector-loading">
                        <IonSpinner />
                    </div>
                ) : (
                    <>
                        {/* Upload button */}
                        {allowUpload && (
                            <div className="file-selector-item file-selector-upload">
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    onChange={handleFileUpload}
                                    style={{ display: "none" }}
                                    accept={
                                        fileType === "image"
                                            ? "image/*"
                                            : fileType === "model"
                                            ? ".stl,.obj,.gcode,.3mf,.glb"
                                            : "*"
                                    }
                                />
                                <IonCard
                                    className="file-selector-card file-selector-upload-card"
                                    onClick={handleUploadClick}
                                    button
                                >
                                    {isUploading ? (
                                        <IonSpinner />
                                    ) : (
                                        <>
                                            <IonIcon
                                                icon={addOutline}
                                                className="file-selector-upload-icon"
                                            />
                                            <span className="file-selector-upload-text">
                                                Upload
                                            </span>
                                        </>
                                    )}
                                </IonCard>
                            </div>
                        )}

                        {/* File list */}
                        {filteredFiles && filteredFiles.length > 0 ? (
                            filteredFiles.map((file) => (
                                <div
                                    key={file.id}
                                    className={`file-selector-item ${
                                        isSelected(file.id)
                                            ? "file-selector-item-selected"
                                            : ""
                                    }`}
                                >
                                    <IonCard
                                        className="file-selector-card"
                                        onClick={() => onFileSelect(file.id)}
                                        button
                                    >
                                        <div className="file-selector-preview">
                                            {file.type === "image" &&
                                            file.path ? (
                                                <img
                                                    src={file.path}
                                                    alt={file.original_name}
                                                    className="file-selector-image"
                                                />
                                            ) : (
                                                <IonIcon
                                                    icon={getFileIcon(file)}
                                                    className="file-selector-placeholder-icon"
                                                />
                                            )}
                                            {isSelected(file.id) && (
                                                <div className="file-selector-selected-overlay">
                                                    <IonIcon
                                                        icon={checkmarkCircle}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <div className="file-selector-info">
                                            <span className="file-selector-filename">
                                                {file.original_name.length > 15
                                                    ? `${file.original_name.substring(
                                                          0,
                                                          15
                                                      )}...`
                                                    : file.original_name}
                                            </span>
                                        </div>
                                    </IonCard>
                                </div>
                            ))
                        ) : (
                            <div className="file-selector-empty">
                                <p>
                                    No files available. Upload one to get
                                    started!
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>

            {uploadError && (
                <div className="file-selector-error">
                    <IonIcon icon={closeCircle} />
                    <span>{uploadError}</span>
                </div>
            )}
        </div>
    );
};

export default FileSelector;
