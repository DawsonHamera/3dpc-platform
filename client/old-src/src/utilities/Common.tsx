const getInitials = (name: string | undefined) => {
    if (name) {
        const [firstName, lastName] = name.split(' ');
        return firstName.charAt(0).toUpperCase() + (lastName?.charAt(0).toUpperCase() || '');
    } 
    return ''
};

export default getInitials ;
