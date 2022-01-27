$(document).ready(() => {
    $('input').on('keyup', () => {
        console.log($(this).html())
    });
});