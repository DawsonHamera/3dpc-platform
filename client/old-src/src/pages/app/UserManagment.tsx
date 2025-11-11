import React, { useState } from "react";
import {
    useGetUsersQuery,
    useAddUserMutation,
    useRemoveUserMutation,
    useUpdateUserMutation,
} from "../../features/crud/users/usersApi";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonProgressBar,
    IonButton,
    IonInput,
    IonToast,
    IonModal,
    IonSelect,
    IonSelectOption,
    IonChip,
    IonIcon,
} from "@ionic/react";
import {
    checkmarkCircle,
    closeCircle,
    createOutline,
    mailOpenOutline,
    pencilOutline,
    trashBin,
} from "ionicons/icons";
import Header from "../../components/Header/Header";

// Example roles, replace with your actual roles data if needed
const roles = [
    { id: 1, name: "Viewer" },
    { id: 2, name: "Member" },
    { id: 3, name: "Admin" },
];

const UserManagementPage: React.FC = () => {
    const { data: users, error, isLoading } = useGetUsersQuery();
    const [deleteUser] = useRemoveUserMutation();
    const [addUser] = useAddUserMutation();
    const [updateUser] = useUpdateUserMutation();

    const [showToast, setShowToast] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // For password change modal
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwordUserId, setPasswordUserId] = useState<number | null>(null);
    const [newPassword, setNewPassword] = useState("");

    // For role change modal
    const [showRoleModal, setShowRoleModal] = useState(false);
    const [roleUserId, setRoleUserId] = useState<number | null>(null);
    const [selectedRoleId, setSelectedRoleId] = useState<number | undefined>(
        undefined
    );

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        grade_id: undefined as number | undefined,
    });

    const handleDeleteUser = async (id: number) => {
        await deleteUser(id);
    };

    const handleAddUser = async () => {
        if (newUser.name && newUser.email && newUser.password && newUser.grade_id) {
            await addUser(newUser);
            setNewUser({ name: "", email: "", password: "", grade_id: undefined });
            setShowToast(true);
            setShowModal(false);
        }
    };

    const handleInputChange = (field: string, value: any) => {
        setNewUser((prev) => ({ ...prev, [field]: value }));
    };

    // Password change handlers
    const openPasswordModal = (userId: number) => {
        setPasswordUserId(userId);
        setNewPassword("");
        setShowPasswordModal(true);
    };

    const handleUpdatePassword = async () => {
        if (passwordUserId && newPassword) {
            await updateUser({ id: passwordUserId, body: { password: newPassword } });
            setShowPasswordModal(false);
            setShowToast(true);
        }
    };

    // Role change handlers
    const openRoleModal = (userId: number, currentRoleId: number) => {
        setRoleUserId(userId);
        setSelectedRoleId(currentRoleId);
        setShowRoleModal(true);
    };

    const handleUpdateRole = async () => {
        if (roleUserId && selectedRoleId) {
            await updateUser({ id: roleUserId, body: { roleId: selectedRoleId } });
            setShowRoleModal(false);
            setShowToast(true);
        }
    };

    return (
        <IonPage>
           <Header title="User Management" type="back" />
            <IonContent>
                {isLoading && <IonProgressBar type="indeterminate" />}
                {error && <div>Error loading users.</div>}
                {!isLoading && !error && (
                    <>
                        <IonList>
                            {users?.map((user) => {
                                function getLastActiveStatus(lastActive: string): string {
                                    if (!lastActive)
                                        return "Last active: unknown (Ain't that odd? 😅)";
                                    const lastDate = new Date(lastActive);
                                    if (isNaN(lastDate.getTime())) return "Last active: unknown";

                                    const diffMs = Date.now() - lastDate.getTime();
                                    const diffSec = Math.floor(diffMs / 1000);

                                    if (diffSec < 60) return "Active now";
                                    if (diffSec < 3600)
                                        return `Last active ${Math.floor(
                                            diffSec / 60
                                        )} minutes ago`;
                                    if (diffSec < 86400)
                                        return `Last active ${Math.floor(
                                            diffSec / 3600
                                        )} hours ago`;

                                    const days = Math.floor(diffSec / 86400);
                                    return `Last active ${days === 1 ? "yesterday" : `${days} days ago`
                                        }`;
                                }

                                const lastActiveDate = new Date(user.lastActive);
                                const now = new Date();
                                const minutesAgo = 5;

                                const isActive =
                                    !isNaN(lastActiveDate.getTime()) &&
                                    now.getTime() - lastActiveDate.getTime() <=
                                    minutesAgo * 60 * 1000;

                                return (
                                    <IonItem key={user.id}>
                                        <div style={{ width: "100%" }}>
                                            <IonToolbar>
                                                <IonLabel>
                                                    <h1>{user.name}</h1>
                                                </IonLabel>
                                                <IonChip
                                                    slot="end"
                                                    color={isActive ? "success" : "medium"}
                                                >
                                                    <IonIcon
                                                        icon={isActive ? checkmarkCircle : closeCircle}
                                                    />
                                                    <IonLabel>{isActive ? "Online" : "Offline"}</IonLabel>
                                                </IonChip>
                                            </IonToolbar>
                                            <IonLabel>
                                                   <div style={{display: 'flex', alignItems: 'center'}}>
                                                    <IonIcon
                                                        size="small"
                                                        icon={mailOpenOutline}
                                                        style={{padding: '12px'}}
                                                    />
                                                <p>{user.email}</p>
                                                </div>
                                                <div style={{display: 'flex', alignItems: 'center'}}>
                                                <IonButton
                                                    fill="clear"
                                                    onClick={() => openRoleModal(user.id, user.role.id)}
                                                    style={{ marginLeft: 8 }}
                                                >
                                                    <IonIcon
                                                        size="small"
                                                        slot="icon-only"
                                                        icon={createOutline}
                                                    />
                                                </IonButton>
                                                <p>
                                                    Role: {user.role.name}
                                                </p>

                                                </div>
                                                <div style={{display: 'inline-flex', alignItems: 'center'}}>
                                                <IonButton
                                                    fill="clear"
                                                    onClick={() => openPasswordModal(user.id)}
                                                    style={{ marginLeft: 8 }}
                                                >
                                                    <IonIcon
                                                        size="small"
                                                        slot="icon-only"
                                                        icon={createOutline}
                                                    />
                                                </IonButton>
                                                <p>
                                                    Password
                                                </p>
                                                </div>
                                                <p style={{marginTop: '20px'}}>
                                                   {getLastActiveStatus(user.lastActive)}
                                                </p>
                                            </IonLabel>
                                        </div>
                                    </IonItem>
                                );
                            })}
                        </IonList>
                        <div style={{ padding: "16px" }}>
                            <IonButton expand="block" onClick={() => setShowModal(true)}>
                                Add User
                            </IonButton>
                        </div>
                    </>
                )}

                {/* Add User Modal */}
                <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Add New User</IonTitle>
                            <IonButton slot="end" onClick={() => setShowModal(false)}>
                                Close
                            </IonButton>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <div style={{ padding: "16px" }}>
                            <IonInput
                                placeholder="Name"
                                value={newUser.name}
                                onIonChange={(e) => handleInputChange("name", e.detail.value!)}
                            />
                            <IonInput
                                placeholder="Email"
                                value={newUser.email}
                                onIonChange={(e) => handleInputChange("email", e.detail.value!)}
                            />
                            <IonInput
                                placeholder="Password"
                                type="password"
                                value={newUser.password}
                                onIonChange={(e) =>
                                    handleInputChange("password", e.detail.value!)
                                }
                            />
                            <IonSelect
                                placeholder="Grade"
                                value={newUser.grade_id}
                                onIonChange={(e) =>
                                    handleInputChange("grade_id", e.detail.value!)
                                }
                            >
                                <IonSelectOption value={1}>Freshman</IonSelectOption>
                                <IonSelectOption value={2}>Sophomore</IonSelectOption>
                                <IonSelectOption value={3}>Junior</IonSelectOption>
                                <IonSelectOption value={4}>Senior</IonSelectOption>
                            </IonSelect>
                            <IonButton expand="block" onClick={handleAddUser}>
                                Add User
                            </IonButton>
                        </div>
                    </IonContent>
                </IonModal>

                {/* Change Password Modal */}
                <IonModal
                    isOpen={showPasswordModal}
                    onDidDismiss={() => setShowPasswordModal(false)}
                >
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Change Password</IonTitle>
                            <IonButton slot="end" onClick={() => setShowPasswordModal(false)}>
                                Close
                            </IonButton>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <div style={{ padding: "16px" }}>
                            <IonInput
                                placeholder="New Password"
                                type="password"
                                value={newPassword}
                                onIonChange={(e) => setNewPassword(e.detail.value!)}
                            />
                            <IonButton
                                expand="block"
                                onClick={handleUpdatePassword}
                                disabled={!newPassword}
                            >
                                Update Password
                            </IonButton>
                        </div>
                    </IonContent>
                </IonModal>

                {/* Change Role Modal */}
                <IonModal
                    isOpen={showRoleModal}
                    onDidDismiss={() => setShowRoleModal(false)}
                >
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Change Role</IonTitle>
                            <IonButton slot="end" onClick={() => setShowRoleModal(false)}>
                                Close
                            </IonButton>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <div style={{ padding: "16px" }}>
                            <IonSelect
                                placeholder="Select Role"
                                value={selectedRoleId}
                                onIonChange={(e) => setSelectedRoleId(e.detail.value!)}
                            >
                                {roles.map((role) => (
                                    <IonSelectOption key={role.id} value={role.id}>
                                        {role.name}
                                    </IonSelectOption>
                                ))}
                            </IonSelect>
                            <IonButton
                                expand="block"
                                onClick={handleUpdateRole}
                                disabled={!selectedRoleId}
                            >
                                Update Role
                            </IonButton>
                        </div>
                    </IonContent>
                </IonModal>

                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message="Operation successful!"
                    duration={2000}
                />
            </IonContent>
        </IonPage>
    );
};

export default UserManagementPage;
