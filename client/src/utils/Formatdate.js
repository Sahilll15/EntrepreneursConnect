export const formatDateTime = (isoDateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(isoDateString).toLocaleDateString(undefined, options);
};
