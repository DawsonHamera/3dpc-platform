import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonList, IonModal, IonPage, IonToast } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import Header from '../../../components/Header/Header';
import { useAddFileMutation, useGetFilesQuery, useRemoveFileMutation, File as FileType } from '../../../features/crud/filesApi';
import Card from '../../../components/UI/Card/Card';
import { cubeOutline, document, imageOutline, trash } from 'ionicons/icons';
import ModelViewer from '../Order/ModelViewer';
import ModelFilePreview from '../../../components/ModelFilePreview';

const FilesPage: React.FC = () => {
    const { data: files } = useGetFilesQuery();
    const [uploadFile, { isLoading: isUploading }] = useAddFileMutation();
    const [deleteFile, { isLoading: isDeleting }] = useRemoveFileMutation();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [toast, setToast] = useState<{ show: boolean, message: string, color?: string }>({ show: false, message: '', color: 'success' });
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const determineIcon = (fileType: string) => {
        if (fileType.startsWith('image/')) {
            return imageOutline;
        } else if (fileType.startsWith('application/pdf')) {
            return document;
        } else if (fileType.startsWith('model/')) {
            return cubeOutline;
        }
    }

    function formatBytes(bytes: number, decimals = 2): string {
        if (bytes === 0) return '0 B';

        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        const dm = decimals < 0 ? 0 : decimals;

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }


    const renderMedia = (file: FileType) => {
        if (file.mimeType.startsWith('image/')) {
            return <img src={file.url} alt={file.fileName} style={{ maxWidth: '100%', height: 'auto' }} />;
        }
        if (file.mimeType.startsWith('model/')) {
            return <ModelFilePreview modelUrl={file.url} />;
        }
    }

    const handleUpload = async () => {
        const formData = new FormData();
        if (selectedFile) {
            formData.append('file', selectedFile);
            try {
                await uploadFile(formData).unwrap();
                setToast({ show: true, message: 'File uploaded successfully!', color: 'success' });
                setSelectedFile(null);
            } catch (error) {
                setToast({ show: true, message: 'Error uploading file. Try again.', color: 'danger' });
            }
        }
    }

    const handleDelete = async (fileId: number) => {
        try {
            await deleteFile(fileId).unwrap();
            setToast({ show: true, message: 'File deleted successfully!', color: 'success' });
        } catch (error) {
            setToast({ show: true, message: 'Error deleting file. Try again.', color: 'danger' });
        }
    };

    return (
        <IonPage>
            <Header title="Files Management" type='back' />
            <IonContent>
                <div style={{ margin: 30 }}>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept=".stl,.obj,.gcode,.pdf,image/*"
                        onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                const formData = new FormData();
                                formData.append('file', file);
                                try {
                                    await uploadFile(formData).unwrap();
                                    setToast({ show: true, message: 'File uploaded successfully!', color: 'success' });
                                } catch (error) {
                                    setToast({ show: true, message: 'Error uploading file. Try again.', color: 'danger' });
                                } finally {
                                    e.target.value = ''; // allow re-uploading same file
                                }
                            }
                        }}
                    />
                    <IonButton
                        fill="solid"
                        expand="full"
                        style={{ margin: '10px' }}
                        disabled={isUploading}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        Upload New File
                    </IonButton>
                </div>


                {files?.map(file => (
                    <Card key={file.id} style={{ margin: '10px', padding: '10px' }}>
                        {renderMedia(file)}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <IonIcon icon={file.mimeType ? determineIcon(file.mimeType) : document} style={{ fontSize: '30px', color: 'var(--ion-color-primary)' }} />
                                <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{file.originalName}</h2>
                            </div>
                            <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--ion-color-medium)' }}>
                                {formatBytes(file.fileSize)}
                            </span>
                        </div>
                        <p>Uploaded at: {new Date(file.createdAt || '').toLocaleString()}</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <IonButton href={file.url} target="_blank" rel="noopener noreferrer">
                                Download
                            </IonButton>
                            <IonButton color="danger" onClick={() => handleDelete(file.id)} disabled={isDeleting}>
                                <IonIcon icon={trash} slot="start" />
                                Delete
                            </IonButton>
                        </div>
                    </Card>
                ))}
                <IonToast
                    isOpen={toast.show}
                    message={toast.message}
                    color={toast.color}
                    duration={2000}
                    onDidDismiss={() => setToast({ ...toast, show: false })}
                />
            </IonContent>
        </IonPage>
    );
};

export default FilesPage;