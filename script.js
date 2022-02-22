const btnLogin = document.querySelector('.signupPage_action-login');
const loginPage = document.querySelector('.loginPage-container');
const signupPage = document.querySelector('.SignupPage');
const loginDismiss = document.querySelector('.login-dismiss-icon');
const logoutToast = document.querySelector('.logout-toast');
const logoutOpen = document.querySelector('.signupPage_action-logout');
const logoutDismiss = document.querySelector('.logout-dismiss');

btnLogin.addEventListener('click', openLoginPage);
loginDismiss.addEventListener('click', closeLoginPage);
logoutOpen.addEventListener('click', openLogoutToast);
logoutDismiss.addEventListener('click', dismissLogout);

function openLoginPage() {
    loginPage.style.display = 'flex';
    signupPage.style.filter = 'blur(2px)';
    signupPage.style.overflow = 'hidden';
    signupPage.style.height = '100vh';
}
function closeLoginPage() {
    loginPage.style.display = 'none';
    signupPage.style.filter = 'none';
    signupPage.style.overflow = 'auto';
    signupPage.style.height = 'auto';
}

function openLogoutToast() {
    logoutToast.style.display = 'flex';
    setTimeout(() => {logoutToast.style.display = 'none';}, 4000);
}

function dismissLogout() {
    logoutToast.style.display = 'none';
}