;(function ($, window, document, undefined) {
    $(function () {
        /**
         * Accordion Controls
         */

        $('.toggleall').click(function(e){
            e.preventDefault();
            if ($(this).text() == "+"){
                $(this).text("-");
                $('.panel-collapse:not(".in")').collapse('show');
                $('a[data-toggle="collapse"]').css({
                    'margin-top': '0px',
                    'display': 'inline-block'
                });
            } else {
                $('.panel-collapse.in').collapse('hide');
                $(this).text("+");
            };
        });

        $('.researchJump').click(function(e){
            $('.panel-collapse.in').collapse('hide');
            $('a[data-toggle="collapse"]').css({
                'margin-top': '0px',
                'display': 'inline-block'
            })
            $('a[name="' + $(this).text() + '"]').css({
                'margin-top': '55px',
                'display': 'inline-block'
            }).closest('.panel-heading').next('.panel-collapse').collapse('show');
        });

    });
})(jQuery, window, document);
