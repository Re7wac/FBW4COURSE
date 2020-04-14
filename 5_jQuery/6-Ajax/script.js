$(document).ready(() => {
    // $('#results').load('test.html', (responseText, statusText, xhr) => {
    //     if (statusText == "success") {
    //         alert('Its went fine');
    //         // $('#results').html(responseText)
    //     } else if (statusText == 'error') {
    //         alert('Error' + xhr.statusText)
    //     }
    // })
    $.getJSON('users.json', (data) => {
        $.each(data, (i, user) => {
            $('ul#users').append(`<li>${user.firstName}</li>`)
        })
    })
})