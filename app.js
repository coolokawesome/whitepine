
title = $('#artistTitle')
selector = $('#artistSelect')

//main box
contentRow = $('#contentRow')
//options
anne = $('#Anne')
jeff = $('#Jeff')
all = $('#All')

$('#contentContainer').append(
    $('<div>').attr('class', 'col-sm-6 col-lg-4 ').append(
        $('<img>').attr('class', 'img img-fluid').attr('src', 'https://source.unsplash.com/random/?' + all + '')
    )
)


selector.change(function () {
    console.log(this.value);
    //remove the header and content box
    $('#artistHeader').remove()
    $('#contentContainer').remove()
    //title append
    title.append(
        $('<h3>').text(this.value).attr('id', 'artistHeader').attr('class', 'text-light')
    )
    //new box
    contentRow.append(
        $('<div>').attr('id', 'contentContainer')
    )

    $('#contentContainer').append(
        $('<div>').attr('class', 'col-sm-6 col-lg-4 ').append(
            $('<img>').attr('class', 'img img-fluid').attr('src', 'https://source.unsplash.com/random/?' + this.value + ' ')
        )
    )
});
console.log('ready')
