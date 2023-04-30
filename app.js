
const anneUrls = {
    urls: [
        './imgs/anne/anne1.jpg',
        './imgs/anne/anne2.png',
        './imgs/anne/anne3.jpg',
        './imgs/anne/anne4.png',
        './imgs/anne/anne5.png',
        './imgs/anne/anne6.jpg',
        './imgs/anne/anne7.jpg',
    ]
} ;

const jeffUrls = {
    urls: [
        'imgs/jeff/jeff1.png',
        'imgs/jeff/jeff2.png',
        'imgs/jeff/jeff3.png',
        'imgs/jeff/jeff4.png',
        'imgs/jeff/jeff5.jpg',

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
            $('<img>').attr('class', 'img img-fluid w-auto py-2').attr('src', url)
        )
    )
    })
};
mapJeff = () => {
    jeffUrls.urls.forEach(url => {
        
        $('#contentContainer').append(
        $('<div>').attr('class', 'col-12 col-md-6 col-lg-4 ').append(
            $('<img>').attr('class', 'img img-fluid w-auto py-2').attr('src', url)
        )
    )
    });
}
mapAll = () => {
    mapAnne(), mapJeff()
}

selector.change(function () {
    
    //remove the header and content box
    $('#artistHeader').text(this.value)
    $('#contentContainer').remove()
    //new box
    contentRow.append(
        $('<div>').attr('id', 'contentContainer').attr('class', 'row masonry-grid')
    )

    if (this.value == "Anna") {  
        return mapAnne()
    }
    if (this.value == "Jeff") {
        return mapJeff()
    }
    if (this.value == 'All') {
       return mapAll()
        
    }
});

    $('#contentContainer').remove()
contentRow.append(
    $('<div>').attr('id', 'contentContainer').attr('class', 'row')
)
mapAll()


