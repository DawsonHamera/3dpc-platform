import Avatar from "../Avatar/Avatar";
import styles from "./AvatarStack.module.css";

type AvatarStackProps = {
    avatars: { id: number; name: string; avatarUrl?: string }[];
    maxVisible?: number;
    size?: number;
};

const AvatarStack: React.FC<AvatarStackProps> = ({ avatars, maxVisible = 5, size = 40 }) => {
    return (
        <div className={styles.container}>
            {avatars.slice(0, maxVisible).map((avatar) => (
                <Avatar
                    key={avatar.id}
                    name={avatar.name}
                    size={size}
                    styles={{ marginLeft: '-10px' }} />
            ))}
            {avatars.length > maxVisible && (
                <div className={styles.avatar} style={{ width: size, height: size }}>
                    +{avatars.length - maxVisible}
                </div>
            )}
        </div>
    )
};

export default AvatarStack;
