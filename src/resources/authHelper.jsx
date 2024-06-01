const isLoggedIn = () => {
    return localStorage.getItem("alpix_idm_token") != null ? true : false
}
export default isLoggedIn;
export const storeToken = (key, value) => {
    localStorage.setItem(key, value);
    window.location.reload();
}
export const removeToken = (key) => {
    localStorage.removeItem(key);
    window.location.reload();
}