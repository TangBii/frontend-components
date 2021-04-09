const register = document.getElementById('register');
const login = document.getElementById('login');
const container = document.getElementById('container');


register.addEventListener('click', () => container.classList.add('right-panel-active'));
login.addEventListener('click', () => container.classList.remove('right-panel-active'));
