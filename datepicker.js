$(function() {
    var today = new Date ();

    $("#from-datepicker").datetimepicker({
        language: 'pt-BR',
        startDate: today

    });

    $('#to-datepicker').datetimepicker({
        language: 'pt-BR'
    });
});