
const anneUrls = {
    urls: [
        './imgs/anne/anne1.jpg',
        './imgs/anne/anne2.png',
        './imgs/anne/anne3.jpg',
    ]
} ;

const jeffUrls = {
    urls: [
        'imgs/jeff/jeff1.png',
        'imgs/jeff/jeff2.png',
        'imgs/jeff/jeff3.png',
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
        $('<div>').attr('class', 'col-12 col-md-6 col-lg-4 ').append(
            $('<img>').attr('class', 'img img-fluid w-auto h-100 py-2').attr('src', url)
        )
    )
    })
};
mapJeff = () => {
    jeffUrls.urls.forEach(url => {
        $('#contentContainer').append(
        $('<div>').attr('class', 'col-12 col-md-6 col-lg-4 ').append(
            $('<img>').attr('class', 'img img-fluid w-auto h-100 py-2').attr('src', url)
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
    //new box
    contentRow.append(
        $('<div>').attr('id', 'contentContainer').attr('class', 'row masonry-grid')
    )

    if (this.value == "Anne") {  
        return mapAnne()
    }
    if (this.value == "Jeff") {
        return mapJeff()
    }
    if (this.value == 'All') {
       return mapAll()
        
    }
});
$('#artistHeader').remove()
    $('#contentContainer').remove()
contentRow.append(
    $('<div>').attr('id', 'contentContainer').attr('class', 'row')
)
mapAll()


