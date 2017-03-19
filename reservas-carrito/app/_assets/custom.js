$( document ).ready(function() {

    $( "#daypicker" ).datepicker({ altField: "#actualDate"});

    $( "#daypicker" ).datepicker( $.datepicker.regional[ "en" ] );

});
