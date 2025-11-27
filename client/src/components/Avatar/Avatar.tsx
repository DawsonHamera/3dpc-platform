import styles from './Avatar.module.css';

type AvatarProps = {
    name: string;
    size?: number;
    styles?: React.CSSProperties;
    avatarUrl?: string;
};


const getInitials = (name: string) => {
    const names = name.split(" ");
    const initials = names.map((n) => n.charAt(0).toUpperCase());
    return initials.join("");
};


const Avatar: React.FC<AvatarProps> = ({ name, size = 40, avatarUrl, styles: customStyles }) => {
    return (
         <div className={styles.default} style={{ width: size, height: size, ...customStyles }}>
            {getInitials(name)}
        </div>
    )
}

export default Avatar;