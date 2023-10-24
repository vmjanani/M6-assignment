window.addEventListener('load', init)
function init() {
    let btn = document.getElementById('submit')
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        const $ = (id) => document.getElementById(id)
        console.log('ID: ' + $('id').value);
        console.log('Name: ' + $('name').value);
        console.log('Extension ' + $('ext').value);
        console.log('Email: ' + $('email').value);
        console.log('Department: ' + $('department').value);
    })}