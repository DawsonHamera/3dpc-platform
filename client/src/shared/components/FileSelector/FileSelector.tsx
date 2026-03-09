import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import React, { useMemo, useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { File, useAddFileMutation, useGetFilesQuery } from "../../features";
import ModelFilePreview from "../ModelFilePreview/ModelFilePreview";

const IMAGE_SIZE = 64;

type Props = {
    fileId?: number;
    filter?: (file: File) => boolean;
    onChange: (id: number) => void;
};

const FileSelector: React.FC<Props> = ({ fileId, filter = () => true, onChange }) => {
    const { data: files, isLoading, refetch } = useGetFilesQuery();
    const [addFile] = useAddFileMutation();
    const [selectedFileId, setSelectedFileId] = useState<number | null>(fileId || null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const filteredFiles = useMemo(
        () =>
            files
                ? [...files]
                      .filter((file) => filter(file))
                      .sort(
                          (a, b) =>
                              new Date(b.created_at || "").getTime() -
                              new Date(a.created_at || "").getTime(),
                      )
                : [],
        [files, filter],
    );

    const handleChange = (file: File) => {
        console.log("input!");
        setSelectedFileId(file.id);
        onChange(file.id);
    };

    const handleFileInputClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
            const uploadedFile = await addFile(formData).unwrap();
            //   await refetch();
            if (uploadedFile) {
                handleChange(uploadedFile);
            }
        } catch (error) {
            console.error("Upload failed:", error);
        } finally {
            e.target.value = ""; // Allow reselecting same file
        }
    };

    const renderMedia = (file: File) => {
        const isSelected = selectedFileId === file.id;

        if (file.mime_type?.startsWith("image/")) {
            return (
                <img
                    src={file.path}
                    alt={file.original_name}
                    style={{
                        width: IMAGE_SIZE,
                        height: IMAGE_SIZE,
                        objectFit: "cover",
                        borderRadius: 8,
                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                        border: isSelected
                            ? "2px solid var(--ion-color-primary)"
                            : "",
                        cursor: "pointer",
                    }}
                    onClick={() => handleChange(file)}
                />
            );
        }

        if (file.mime_type?.startsWith("model/")) {
            return (
                <div
                    style={{
                        width: IMAGE_SIZE,
                        height: IMAGE_SIZE,
                        borderRadius: 8,
                        overflow: "hidden",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                        background: "#f8f8f8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: isSelected
                            ? "2px solid var(--ion-color-primary)"
                            : "",
                        cursor: "pointer",
                    }}
                    onClick={() => handleChange(file)}
                >
                    <ModelFilePreview modelUrl={file.path} />
                </div>
            );
        }

        return null;
    };

    return (
        <div style={{ width: "100%" }}>
            {/* Hidden native file input */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                style={{ display: "none" }}
            />

            {isLoading ? (
                <span>Loading...</span>
            ) : (
                <Swiper
                    spaceBetween={8}
                    slidesPerView="auto"
                    freeMode
                    style={{ padding: "8px", minHeight: IMAGE_SIZE + 16 }}
                >
                    {/* Upload Button */}
                    <SwiperSlide
                        style={{
                            width: "auto",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div
                            onClick={handleFileInputClick}
                            style={{
                                width: IMAGE_SIZE,
                                height: IMAGE_SIZE,
                                borderRadius: 8,
                                background: "#f8f8f8",
                                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                            }}
                        >
                            <IonIcon
                                icon={add}
                                style={{
                                    fontSize: 32,
                                    color: "var(--ion-color-light-shade)",
                                }}
                            />
                        </div>
                    </SwiperSlide>

                    {/* Render each file */}
                    {filteredFiles.map((file) => (
                        <SwiperSlide
                            key={file.id}
                            style={{
                                width: "auto",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            {renderMedia(file)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default FileSelector;
