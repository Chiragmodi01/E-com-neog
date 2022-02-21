const btnLogin = document.querySelector('.signupPage_action-login');
const loginPage = document.querySelector('.loginPage-container');
const signupPage = document.querySelector('.SignupPage');
const loginDismiss = document.querySelector('.login-dismiss-icon');

btnLogin.addEventListener('click', openLoginPage);
loginDismiss.addEventListener('click', closeLoginPage);

function openLoginPage() {
    loginPage.style.display = 'flex';
    signupPage.style.filter = 'blur(2px)';
}
function closeLoginPage() {
    loginPage.style.display = 'none';
    signupPage.style.filter = 'none';
}