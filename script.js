$(document).ready(() => {

    word = 'hello';

    $('input').attr('disabled', true);
    $('input').eq(0).attr('disabled', false);

    $('input').keyup(function () {
        let value = $(this).val().trim();
        let index = $('input').index(this);
        let prev = index - 1;
        let next = index + 1;

        if (value != '') {
            if (index != 0 && $('input').eq(prev).val() == '') {
                $(this).val('');
            } else {
                $('input').attr('disabled', true);
                $(this).attr('disabled', false);
                $('input').eq(next).attr('disabled', false);
                $('input').eq(next).focus();

                if (index != 0 && next % 5 == 0) {
                    $('input').eq(next).attr('disabled', true);
                    check(word, index);

                }
            }
        } else {
            if (index != 0 && !$('input').eq(prev).hasClass('prevent')) {
                $('input').attr('disabled', true);
                $('input').eq(prev).attr('disabled', false);
                $('input').eq(prev).focus();
                $('input').eq(next).val('');

                if (prev - 1 >= 0) {
                    $('input').eq(prev - 1).attr('disabled', false);
                }

            } else {
                $('input').attr('disabled', true);
                $('input').eq(next).val('');
                $(this).attr('disabled', false);
            }
        }


    });


});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function check(word, index) {
    word = word.toLowerCase();
    let start = index - 4;
    let check = '';
    let counter = 0;

    for (var i = start; i <= index; i++) {
        char = word[counter];
        char_check = $('input').eq(i).val().toLowerCase();

        $('input').eq(i).attr('disabled', 'disabled');
        $('input').eq(i).addClass('prevent');
        $('input').eq(i).addClass('flip');
        await sleep(500);

        if (char == char_check) {
            $('input').eq(i).addClass('correct');
        } else {
            if (word.includes(char_check)) {
                $('input').eq(i).addClass('includes');
            } else {
                $('input').eq(i).addClass('incorrect');
            }

        }

        check = check + char_check;
        counter++;

    }


    if (check == word) {
        $('input').attr('disabled', 'disabled');
        alert('Correct!');

    } else {
        $('input').eq(index + 1).attr('disabled', false);
        $('input').eq(index + 1).focus();
    }


}