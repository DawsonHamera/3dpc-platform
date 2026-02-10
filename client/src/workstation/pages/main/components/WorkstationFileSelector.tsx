import { useRef, useState } from "react";
import {
    useAddFileMutation,
    useGetFilesQuery,
    type File,
} from "../../../../shared/features";
import "./WorkstationFileSelector.css";

export interface WorkstationFileSelectorProps {
    selectedFileId?: number;
    onFileSelect: (fileId: number | undefined) => void;
    fileType?: "image" | "model" | "document" | "texture" | "other";
    label?: string;
    allowUpload?: boolean;
}

const WorkstationFileSelector: React.FC<WorkstationFileSelectorProps> = ({
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
        event: React.ChangeEvent<HTMLInputElement>,
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
            return "🖼️";
        }
        if (file.type === "model") {
            return "📦";
        }
        return "📄";
    };

    const isSelected = (fileId: number) => fileId === selectedFileId;

    return (
        <div className="ws-file-selector">
            <div className="ws-file-selector-header">
                <span className="ws-file-selector-label">{label}</span>
                {selectedFileId && (
                    <button
                        type="button"
                        className="ws-file-clear-btn"
                        onClick={() => onFileSelect(undefined)}
                    >
                        Clear
                    </button>
                )}
            </div>

            <div className="ws-file-selector-container">
                {isLoading ? (
                    <div className="ws-file-selector-loading">
                        <div className="ws-spinner"></div>
                    </div>
                ) : (
                    <>
                        {/* Upload button */}
                        {allowUpload && (
                            <div className="ws-file-selector-item">
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
                                <div
                                    className="ws-file-selector-card ws-file-upload-card"
                                    onClick={handleUploadClick}
                                >
                                    {isUploading ? (
                                        <div className="ws-spinner"></div>
                                    ) : (
                                        <>
                                            <div className="ws-file-upload-icon">
                                                ➕
                                            </div>
                                            <span className="ws-file-upload-text">
                                                Upload
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* File list */}
                        {filteredFiles && filteredFiles.length > 0 ? (
                            filteredFiles.map((file) => (
                                <div
                                    key={file.id}
                                    className={`ws-file-selector-item ${
                                        isSelected(file.id)
                                            ? "ws-file-selector-item-selected"
                                            : ""
                                    }`}
                                >
                                    <div
                                        className="ws-file-selector-card"
                                        onClick={() => onFileSelect(file.id)}
                                    >
                                        <div className="ws-file-selector-preview">
                                            {file.type === "image" &&
                                            file.path ? (
                                                <img
                                                    src={file.path}
                                                    alt={file.original_name}
                                                    className="ws-file-selector-image"
                                                />
                                            ) : (
                                                <div className="ws-file-placeholder-icon">
                                                    {getFileIcon(file)}
                                                </div>
                                            )}
                                            {isSelected(file.id) && (
                                                <div className="ws-file-selected-overlay">
                                                    ✓
                                                </div>
                                            )}
                                        </div>
                                        <div className="ws-file-selector-info">
                                            <span className="ws-file-selector-filename">
                                                {file.original_name.length > 15
                                                    ? `${file.original_name.substring(
                                                          0,
                                                          12,
                                                      )}...`
                                                    : file.original_name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="ws-file-selector-empty">
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
                <div className="ws-file-selector-error">
                    <span>⚠️ {uploadError}</span>
                </div>
            )}
        </div>
    );
};

export default WorkstationFileSelector;
