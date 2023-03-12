
const anneUrls = {
    urls: [
        'https://source.unsplash.com/random/?anne',
        'https://source.unsplash.com/random/?anna',
        'https://source.unsplash.com/random/?annie',
    ]
} ;

const jeffUrls = {
    urls: [
        'https://source.unsplash.com/random/?jeff',
        'https://source.unsplash.com/random/?jeffie',
        'https://source.unsplash.com/random/?jefferson',
    ]
}

title = $('#artistTitle')
selector = $('#artistSelect')

//main box
contentRow = $('#contentRow')
//options


mapAnne = () => {
    anneUrls.urls.forEach(url => {
        $('#contentContainer').append(
        $('<div>').attr('class', 'col-sm-6 col-lg-4 ').append(
            $('<img>').attr('class', 'img img-fluid').attr('src', url)
        )
    )
    })
};
mapJeff = () => {
    jeffUrls.urls.forEach(url => {
        $('#contentContainer').append(
        $('<div>').attr('class', 'col-12 col-md-6 col-lg-4 ').append(
            $('<img>').attr('class', 'img img-fluid').attr('src', url)
        )
    )
    });
}
mapAll = () => {
    mapAnne(), mapJeff()
}

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
        $('<div>').attr('id', 'contentContainer').attr('class', 'row')
    )

    if (this.value == "Anne") {  
        return mapAnne()
    }
    if (this.value == "Jeff") {
        return mapJeff()
    }
    if (this.value != "Anne" || this.value != "Jeff") {
       return mapAll()
        
    }
});
