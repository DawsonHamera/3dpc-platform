import { IonIcon } from "@ionic/react";
import { logOut } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import { useWorkstationLoginMutation } from "../../../member-app/features/auth/authApi";
import {
    logout,
    selectIsWorkstationAuth,
} from "../../../member-app/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../shared/redux/hooks";
import "./WorkstationAuth.css";

const WorkstationAuth: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [passkey, setPasskey] = useState("");
    const [error, setError] = useState("");

    const isAuthenticated = useAppSelector(selectIsWorkstationAuth);
    const [workstationLogin, { isLoading }] = useWorkstationLoginMutation();
    const dispatch = useAppDispatch();
    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!passkey.trim()) {
            setError("Please enter a passkey");
            return;
        }

        try {
            await workstationLogin({ passkey }).unwrap();
            // Auth state is automatically set by the mutation's onQueryStarted
            setPasskey("");
        } catch (err: any) {
            setError(
                err?.data?.message || "Invalid passkey. Please try again.",
            );
            setPasskey(""); // Clear passkey on error
        }
    };

    const handleLogout = () => {
        dispatch(logout());
        setPasskey("");
        setError("");
    };

    if (isAuthenticated) {
        return (
            <>
                <div className="workstation-auth-logout-bar">
                    <button
                        onClick={handleLogout}
                        className="workstation-logout-btn"
                        title="Logout from workstation"
                    >
                        Logout
                        <IonIcon icon={logOut} />
                    </button>
                </div>
                {children}
            </>
        );
    }

    return (
        <div className="workstation-auth">
            <div className="workstation-auth-container">
                <div className="workstation-auth-header">
                    <h1>Workstation Access</h1>
                    <p>Sign in to access the 3D printing workstation</p>
                </div>

                <form onSubmit={handleSubmit} className="workstation-auth-form">
                    {error && (
                        <div className="workstation-auth-error">{error}</div>
                    )}

                    <div className="workstation-auth-field">
                        <label htmlFor="passkey">Passkey</label>
                        <input
                            id="passkey"
                            type="password"
                            value={passkey}
                            onChange={(e) => setPasskey(e.target.value)}
                            placeholder="Enter workstation passkey"
                            required
                            autoComplete="off"
                            autoFocus
                        />
                    </div>

                    <button
                        type="submit"
                        className="workstation-auth-button"
                        disabled={isLoading}
                    >
                        {isLoading ? "Verifying..." : "Access Workstation"}
                    </button>

                    <button
                        type="button"
                        className="workstation-auth-back"
                        onClick={() => history.push("/")}
                    >
                        Back to Home
                    </button>
                </form>
            </div>
        </div>
    );
};

export default WorkstationAuth;
