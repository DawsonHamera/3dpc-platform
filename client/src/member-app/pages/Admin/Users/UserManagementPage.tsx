import React, { useState, useMemo } from "react";
import {
    IonPage,
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
    IonSearchbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonText,
    IonBadge,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonAlert,
    IonGrid,
    IonRow,
    IonCol,
    IonFab,
    IonFabButton,
} from "@ionic/react";
import {
    checkmarkCircle,
    closeCircle,
    personAddOutline,
    mailOutline,
    keyOutline,
    shieldCheckmarkOutline,
    trashOutline,
    ellipsisVertical,
    personOutline,
    timeOutline,
    searchOutline,
    addOutline,
    closeOutline,
    saveOutline,
    lockClosedOutline,
} from "ionicons/icons";
import Header from "../../../../shared/components/Header/Header";
import {
    useGetUsersQuery,
    useRemoveUserMutation,
    useAddUserMutation,
    useUpdateUserMutation,
} from "../../../../member-app/features/users/usersApi";

const ROLES = [
    { id: 1, name: "Viewer", color: "medium" },
    { id: 2, name: "Member", color: "primary" },
    { id: 3, name: "Admin", color: "danger" },
];

const GRADES = [
    { value: "freshman", label: "Freshman" },
    { value: "sophomore", label: "Sophomore" },
    { value: "junior", label: "Junior" },
    { value: "senior", label: "Senior" },
];

interface User {
    id: number;
    name: string;
    email: string;
    last_active: string;
    role?: { id: number; name: string };
}

const UserManagementPage: React.FC = () => {
    const {
        data: users,
        error,
        isLoading,
    } = useGetUsersQuery()
    const [deleteUser, { isLoading: isDeleting }] = useRemoveUserMutation();
    const [addUser, { isLoading: isAdding }] = useAddUserMutation();
    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

    // Search state
    const [searchText, setSearchText] = useState("");

    // Toast state
    const [toast, setToast] = useState<{
        show: boolean;
        message: string;
        color?: string;
    }>({ show: false, message: "" });

    // Add user modal
    const [showAddModal, setShowAddModal] = useState(false);
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        grade: undefined as string | undefined,
    });

    // Edit user modals
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showRoleModal, setShowRoleModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [newPassword, setNewPassword] = useState("");
    const [selectedRoleId, setSelectedRoleId] = useState<number | undefined>();

    // Delete confirmation
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [userToDelete, setUserToDelete] = useState<number | null>(null);

    // Filter users by search
    const filteredUsers = useMemo(() => {
        if (!users) return [];
        if (!searchText.trim()) return users;

        const searchLower = searchText.toLowerCase();
        return users.filter(
            (user: any) =>
                user.name.toLowerCase().includes(searchLower) ||
                user.email.toLowerCase().includes(searchLower) ||
                user.role?.name.toLowerCase().includes(searchLower)
        );
    }, [users, searchText]);

    // User activity helpers
    const getLastActiveStatus = (lastActive: string): string => {
        if (!lastActive) return "Never active";
        const lastDate = new Date(lastActive);
        if (isNaN(lastDate.getTime())) return "Unknown";

        const diffMs = Date.now() - lastDate.getTime();
        const diffSec = Math.floor(diffMs / 1000);

        if (diffSec < 60) return "Active now";
        if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
        if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;

        const days = Math.floor(diffSec / 86400);
        return days === 1 ? "Yesterday" : `${days}d ago`;
    };

    const isUserActive = (lastActive: string): boolean => {
        if (!lastActive) return false;
        const lastDate = new Date(lastActive);
        if (isNaN(lastDate.getTime())) return false;
        return Date.now() - lastDate.getTime() <= 5 * 60 * 1000;
    };

    // Handlers
    const handleAddUser = async () => {
        if (
            !newUser.name ||
            !newUser.email ||
            !newUser.password ||
            !newUser.grade
        ) {
            setToast({
                show: true,
                message: "Please fill in all fields",
                color: "warning",
            });
            return;
        }

        try {
            await addUser(newUser).unwrap();
            setNewUser({
                name: "",
                email: "",
                password: "",
                grade: undefined,
            });
            setShowAddModal(false);
            setToast({
                show: true,
                message: "User added successfully!",
                color: "success",
            });
        } catch (err) {
            setToast({
                show: true,
                message: "Failed to add user",
                color: "danger",
            });
        }
    };

    const handleUpdatePassword = async () => {
        if (!selectedUser || !newPassword) return;

        try {
            await updateUser({
                id: selectedUser.id,
                body: { password: newPassword },
            }).unwrap();
            setShowPasswordModal(false);
            setNewPassword("");
            setSelectedUser(null);
            setToast({
                show: true,
                message: "Password updated successfully!",
                color: "success",
            });
        } catch (err) {
            setToast({
                show: true,
                message: "Failed to update password",
                color: "danger",
            });
        }
    };

    const handleUpdateRole = async () => {
        if (!selectedUser || !selectedRoleId) return;

        try {
            await updateUser({
                id: selectedUser.id,
                body: { role_id: selectedRoleId },
            }).unwrap();
            setShowRoleModal(false);
            setSelectedRoleId(undefined);
            setSelectedUser(null);
            setToast({
                show: true,
                message: "Role updated successfully!",
                color: "success",
            });
        } catch (err) {
            setToast({
                show: true,
                message: "Failed to update role",
                color: "danger",
            });
        }
    };

    const handleDeleteUser = async () => {
        if (!userToDelete) return;

        try {
            await deleteUser(userToDelete).unwrap();
            setShowDeleteAlert(false);
            setUserToDelete(null);
            setToast({
                show: true,
                message: "User deleted successfully!",
                color: "success",
            });
        } catch (err) {
            setToast({
                show: true,
                message: "Failed to delete user",
                color: "danger",
            });
        }
    };

    const openPasswordModal = (user: User) => {
        setSelectedUser(user);
        setNewPassword("");
        setShowPasswordModal(true);
    };

    const openRoleModal = (user: User) => {
        setSelectedUser(user);
        setSelectedRoleId(user.role?.id);
        setShowRoleModal(true);
    };

    const openDeleteAlert = (userId: number) => {
        setUserToDelete(userId);
        setShowDeleteAlert(true);
    };

    return (
        <IonPage>
            <Header title="User Management" type="back" />
            <IonContent className="ion-padding">
                {/* Search Bar */}
                <IonSearchbar
                    value={searchText}
                    onIonInput={(e) => setSearchText(e.detail.value!)}
                    placeholder="Search users by name, email, or role"
                    animated
                    showClearButton="focus"
                />

                {/* Loading State */}
                {isLoading && <IonProgressBar type="indeterminate" />}

                {/* Error State */}
                {error && (
                    <IonCard color="danger">
                        <IonCardContent>
                            <IonText color="light">
                                <p>Error loading users. Please try again.</p>
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                )}

                {/* Users List */}
                {!isLoading && !error && (
                    <>
                        {filteredUsers.length === 0 ? (
                            <IonCard>
                                <IonCardContent className="ion-text-center">
                                    <IonIcon
                                        icon={searchOutline}
                                        style={{
                                            fontSize: "64px",
                                            opacity: 0.3,
                                        }}
                                    />
                                    <IonText color="medium">
                                        <p>
                                            {searchText
                                                ? "No users found matching your search"
                                                : "No users available"}
                                        </p>
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        ) : (
                            <IonList>
                                {filteredUsers.map((user: any) => {
                                    const isActive = isUserActive(
                                        user.last_active
                                    );
                                    const roleColor =
                                        ROLES.find(
                                            (r) => r.id === user.role?.id
                                        )?.color || "medium";

                                    return (
                                        <IonItemSliding key={user.id}>
                                            <IonItem lines="full">
                                                <IonIcon
                                                    icon={personOutline}
                                                    slot="start"
                                                    color="primary"
                                                    style={{ fontSize: "32px" }}
                                                />
                                                <IonLabel>
                                                    <h2>
                                                        <strong>
                                                            {user.name}
                                                        </strong>
                                                    </h2>
                                                    <p
                                                        className="ion-margin-top"
                                                        style={{
                                                            textOverflow:
                                                                "ellipsis",
                                                            overflow: "hidden",
                                                            whiteSpace:
                                                                "nowrap",
                                                            maxWidth: "200px",
                                                        }}
                                                    >
                                                        <IonIcon
                                                            icon={mailOutline}
                                                            style={{
                                                                verticalAlign:
                                                                    "middle",
                                                            }}
                                                        />{" "}
                                                        {user.email}
                                                    </p>
                                                    <p>
                                                        <IonIcon
                                                            icon={timeOutline}
                                                            style={{
                                                                verticalAlign:
                                                                    "middle",
                                                            }}
                                                        />{" "}
                                                        {getLastActiveStatus(
                                                            user.last_active
                                                        )}
                                                    </p>
                                                </IonLabel>
                                                <div
                                                    slot="end"
                                                    className="ion-text-end"
                                                >
                                                    <IonChip
                                                        color={
                                                            isActive
                                                                ? "success"
                                                                : "medium"
                                                        }
                                                    >
                                                        <IonIcon
                                                            icon={
                                                                isActive
                                                                    ? checkmarkCircle
                                                                    : closeCircle
                                                            }
                                                        />
                                                        <IonLabel>
                                                            {isActive
                                                                ? "Online"
                                                                : "Offline"}
                                                        </IonLabel>
                                                    </IonChip>
                                                    <br />
                                                    <IonBadge
                                                        color={roleColor}
                                                        className="ion-margin-top"
                                                    >
                                                        {user.role?.name ||
                                                            "No Role"}
                                                    </IonBadge>
                                                </div>
                                            </IonItem>
                                            <IonItemOptions side="end">
                                                <IonItemOption
                                                    color="primary"
                                                    onClick={() =>
                                                        openRoleModal(user)
                                                    }
                                                >
                                                    <IonIcon
                                                        icon={
                                                            shieldCheckmarkOutline
                                                        }
                                                        slot="icon-only"
                                                    />
                                                </IonItemOption>
                                                <IonItemOption
                                                    color="warning"
                                                    onClick={() =>
                                                        openPasswordModal(user)
                                                    }
                                                >
                                                    <IonIcon
                                                        icon={keyOutline}
                                                        slot="icon-only"
                                                    />
                                                </IonItemOption>
                                                <IonItemOption
                                                    color="danger"
                                                    onClick={() =>
                                                        openDeleteAlert(user.id)
                                                    }
                                                >
                                                    <IonIcon
                                                        icon={trashOutline}
                                                        slot="icon-only"
                                                    />
                                                </IonItemOption>
                                            </IonItemOptions>
                                        </IonItemSliding>
                                    );
                                })}
                            </IonList>
                        )}
                    </>
                )}

                {/* Floating Action Button */}
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton onClick={() => setShowAddModal(true)}>
                        <IonIcon icon={addOutline} />
                    </IonFabButton>
                </IonFab>

                {/* Add User Modal */}
                <IonModal
                    isOpen={showAddModal}
                    onDidDismiss={() => {
                        setShowAddModal(false);
                        setNewUser({
                            name: "",
                            email: "",
                            password: "",
                            grade: undefined,
                        });
                    }}
                >
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Add New User</IonTitle>
                            <IonButtons slot="end">
                                <IonButton
                                    onClick={() => setShowAddModal(false)}
                                >
                                    <IonIcon
                                        icon={closeOutline}
                                        slot="icon-only"
                                    />
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        <IonList>
                            <IonItem>
                                <IonIcon icon={personOutline} slot="start" />
                                <IonInput
                                    label="Name"
                                    labelPlacement="floating"
                                    placeholder="Enter full name"
                                    value={newUser.name}
                                    onIonInput={(e) =>
                                        setNewUser((prev) => ({
                                            ...prev,
                                            name: e.detail.value!,
                                        }))
                                    }
                                />
                            </IonItem>
                            <IonItem>
                                <IonIcon icon={mailOutline} slot="start" />
                                <IonInput
                                    label="Email"
                                    labelPlacement="floating"
                                    type="email"
                                    placeholder="user@example.com"
                                    value={newUser.email}
                                    onIonInput={(e) =>
                                        setNewUser((prev) => ({
                                            ...prev,
                                            email: e.detail.value!,
                                        }))
                                    }
                                />
                            </IonItem>
                            <IonItem>
                                <IonIcon
                                    icon={lockClosedOutline}
                                    slot="start"
                                />
                                <IonInput
                                    label="Password"
                                    labelPlacement="floating"
                                    type="password"
                                    placeholder="Enter password"
                                    value={newUser.password}
                                    onIonInput={(e) =>
                                        setNewUser((prev) => ({
                                            ...prev,
                                            password: e.detail.value!,
                                        }))
                                    }
                                />
                            </IonItem>
                            <IonItem>
                                <IonSelect
                                    label="Grade"
                                    labelPlacement="floating"
                                    placeholder="Select grade"
                                    value={newUser.grade}
                                    onIonChange={(e) =>
                                        setNewUser((prev) => ({
                                            ...prev,
                                            grade: e.detail.value!,
                                        }))
                                    }
                                >
                                    {GRADES.map((grade) => (
                                        <IonSelectOption
                                            key={grade.value}
                                            value={grade.value}
                                        >
                                            {grade.label}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                            </IonItem>
                        </IonList>
                        <IonButton
                            expand="block"
                            className="ion-margin-top"
                            onClick={handleAddUser}
                            disabled={isAdding}
                        >
                            <IonIcon icon={saveOutline} slot="start" />
                            {isAdding ? "Adding..." : "Add User"}
                        </IonButton>
                    </IonContent>
                </IonModal>

                {/* Change Password Modal */}
                <IonModal
                    isOpen={showPasswordModal}
                    onDidDismiss={() => {
                        setShowPasswordModal(false);
                        setNewPassword("");
                        setSelectedUser(null);
                    }}
                >
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Change Password</IonTitle>
                            <IonButtons slot="end">
                                <IonButton
                                    onClick={() => setShowPasswordModal(false)}
                                >
                                    <IonIcon
                                        icon={closeOutline}
                                        slot="icon-only"
                                    />
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        {selectedUser && (
                            <>
                                <IonText>
                                    <p>
                                        Changing password for{" "}
                                        <strong>{selectedUser.name}</strong>
                                    </p>
                                </IonText>
                                <IonList>
                                    <IonItem>
                                        <IonIcon
                                            icon={lockClosedOutline}
                                            slot="start"
                                        />
                                        <IonInput
                                            label="New Password"
                                            labelPlacement="floating"
                                            type="password"
                                            placeholder="Enter new password"
                                            value={newPassword}
                                            onIonInput={(e) =>
                                                setNewPassword(e.detail.value!)
                                            }
                                        />
                                    </IonItem>
                                </IonList>
                                <IonButton
                                    expand="block"
                                    className="ion-margin-top"
                                    onClick={handleUpdatePassword}
                                    disabled={!newPassword || isUpdating}
                                >
                                    <IonIcon icon={saveOutline} slot="start" />
                                    {isUpdating
                                        ? "Updating..."
                                        : "Update Password"}
                                </IonButton>
                            </>
                        )}
                    </IonContent>
                </IonModal>

                {/* Change Role Modal */}
                <IonModal
                    isOpen={showRoleModal}
                    onDidDismiss={() => {
                        setShowRoleModal(false);
                        setSelectedRoleId(undefined);
                        setSelectedUser(null);
                    }}
                >
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Change Role</IonTitle>
                            <IonButtons slot="end">
                                <IonButton
                                    onClick={() => setShowRoleModal(false)}
                                >
                                    <IonIcon
                                        icon={closeOutline}
                                        slot="icon-only"
                                    />
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        {selectedUser && (
                            <>
                                <IonText>
                                    <p>
                                        Changing role for{" "}
                                        <strong>{selectedUser.name}</strong>
                                    </p>
                                </IonText>
                                <IonList>
                                    <IonItem>
                                        <IonIcon
                                            icon={shieldCheckmarkOutline}
                                            slot="start"
                                        />
                                        <IonSelect
                                            label="Role"
                                            labelPlacement="floating"
                                            placeholder="Select role"
                                            value={selectedRoleId}
                                            onIonChange={(e) =>
                                                setSelectedRoleId(
                                                    e.detail.value!
                                                )
                                            }
                                        >
                                            {ROLES.map((role) => (
                                                <IonSelectOption
                                                    key={role.id}
                                                    value={role.id}
                                                >
                                                    {role.name}
                                                </IonSelectOption>
                                            ))}
                                        </IonSelect>
                                    </IonItem>
                                </IonList>
                                <IonButton
                                    expand="block"
                                    className="ion-margin-top"
                                    onClick={handleUpdateRole}
                                    disabled={!selectedRoleId || isUpdating}
                                >
                                    <IonIcon icon={saveOutline} slot="start" />
                                    {isUpdating ? "Updating..." : "Update Role"}
                                </IonButton>
                            </>
                        )}
                    </IonContent>
                </IonModal>

                {/* Delete Confirmation Alert */}
                <IonAlert
                    isOpen={showDeleteAlert}
                    onDidDismiss={() => {
                        setShowDeleteAlert(false);
                        setUserToDelete(null);
                    }}
                    header="Delete User"
                    message="Are you sure you want to delete this user? This action cannot be undone."
                    buttons={[
                        {
                            text: "Cancel",
                            role: "cancel",
                        },
                        {
                            text: "Delete",
                            role: "destructive",
                            handler: handleDeleteUser,
                        },
                    ]}
                />

                {/* Toast Notifications */}
                <IonToast
                    isOpen={toast.show}
                    onDidDismiss={() => setToast({ show: false, message: "" })}
                    message={toast.message}
                    duration={3000}
                    color={toast.color}
                    position="bottom"
                />
            </IonContent>
        </IonPage>
    );
};

export default UserManagementPage;
