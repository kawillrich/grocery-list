var $textInput = $('input:text');

$('#add-item').on('click', function() {
    let newText = $textInput.val();
    $('#grocery-list').append('<li class="supply">' + newText + '</li>');
});
   

$('#grocery-list').on('click', '.supply', function() {
    $(this).animate({
        opacity: 0.0,
    }, 500, function() {
        $(this).remove();
    })
    
});
    