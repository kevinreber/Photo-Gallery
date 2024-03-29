lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true,
    'disableScrolling': true,
    'maxWidth': 800,
    'showImageNumberLabel': false
})

const $search = $('#filter');

//.keyup is a function that triggers an event anytime user releases a key from the keyboard
//Keep track of every key user inputs
$search.keyup(function () {

    //Stores keys user inputs into filter bar
    let userInput = $search.val().toLowerCase();

    //Search through <a> and check data-title
    $('a').each(function () {
        //Temporary store 'data-title' to compare 
        let dataTitle = $(this).attr('data-title').toLowerCase();
        if (dataTitle.search(userInput) > -1) {
            $(this).show();
        } else {
            $(this).fadeOut(600);
        }
    });
});

//when filter, still able to carousel to other images that should be hidden