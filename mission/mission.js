let selectElem = document.querySelector('select');
let logo = document.getElementById('logo');

selectElem.addEventListener('change', changeTheme);



function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark'){
        document.body.className = 'dark';
        logo.src = 'byui-logo_white.png';

    } if (current == 'light') {
        document.body.className = 'light';
        logo.src = 'byui-logo_blue.webp';
    }
}