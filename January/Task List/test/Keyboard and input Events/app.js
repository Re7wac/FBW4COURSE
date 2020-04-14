const form = document.querySelectorAll('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');


// Clear input

taskInput.value = '';

//submit

// form.addEventListener('submit', runEvent);


// Event Handler



const select = document.querySelector('select');

select.addEventListener('change', function (e) {
    document.querySelector('.card-title').innerHTML = select.value
    if (select.value == 1)
        document.querySelector('.card-title').style.backgroundColor = 'red'
    else if (select.value == 2) document.querySelector('.card-title').style.backgroundColor = 'green'
    else(document.querySelector('.card-title').style.backgroundColor = 'blue')
})