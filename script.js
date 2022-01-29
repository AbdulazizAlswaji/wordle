$(document).ready(() => {

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
                    alert('check')

                }
            }
        } else {
            if (index != 0) {
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