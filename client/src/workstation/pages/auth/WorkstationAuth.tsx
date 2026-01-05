import { IonIcon } from "@ionic/react";
import { logOut } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useLoginMutation } from "../../../member-app/features/auth/authApi";
import "./WorkstationAuth.css";

const WORKSTATION_AUTH_KEY = "workstation_authenticated";
const WORKSTATION_AUTH_TIMESTAMP = "workstation_auth_timestamp";
const AUTH_EXPIRY_HOURS = 24;

const WorkstationAuth: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    const [login, { isLoading }] = useLoginMutation();
    const history = useHistory();

    // Check for existing authentication on mount
    useEffect(() => {
        const checkExistingAuth = () => {
            const isAuth = localStorage.getItem(WORKSTATION_AUTH_KEY);
            const timestamp = localStorage.getItem(WORKSTATION_AUTH_TIMESTAMP);

            if (isAuth === "true" && timestamp) {
                const authTime = parseInt(timestamp, 10);
                const currentTime = Date.now();
                const hoursPassed = (currentTime - authTime) / (1000 * 60 * 60);

                if (hoursPassed < AUTH_EXPIRY_HOURS) {
                    setIsAuthenticated(true);
                } else {
                    // Auth expired, clear storage
                    localStorage.removeItem(WORKSTATION_AUTH_KEY);
                    localStorage.removeItem(WORKSTATION_AUTH_TIMESTAMP);
                }
            }
            setIsCheckingAuth(false);
        };

        checkExistingAuth();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const data = await login({ email, password }).unwrap();
            // if (data.user.role.name !== "admin")
            //     throw new Error("Unauthorized: Admin access required");
            // Store authentication state
            localStorage.setItem(WORKSTATION_AUTH_KEY, "true");
            localStorage.setItem(
                WORKSTATION_AUTH_TIMESTAMP,
                Date.now().toString()
            );

            setIsAuthenticated(true);
        } catch (err: any) {
            setError(err?.data?.message || "Authentication failed");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem(WORKSTATION_AUTH_KEY);
        localStorage.removeItem(WORKSTATION_AUTH_TIMESTAMP);
        setIsAuthenticated(false);
    };

    if (isCheckingAuth) {
        return (
            <div className="workstation-auth">
                <div className="workstation-auth-loading">
                    <div className="workstation-auth-spinner"></div>
                    <p>Checking authentication...</p>
                </div>
            </div>
        );
    }

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
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            autoComplete="email"
                        />
                    </div>

                    <div className="workstation-auth-field">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="workstation-auth-button"
                        disabled={isLoading}
                    >
                        {isLoading ? "Signing in..." : "Sign In"}
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
