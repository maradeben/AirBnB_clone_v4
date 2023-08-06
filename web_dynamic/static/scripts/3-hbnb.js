// 1-hbnb.js

$(document).ready(function() {
    let selectedAmenities = {};

    $('input[type=checkbox"]').change(function() {
        if (this.checked) {
            selectedAmenities[$(this).data('id')] = $(this).data('name');
        } else {
            delete selectedAmenities[$this.data['id']]
        }
        let lst = Object.values(selectedAmenities);
        if (lst.length > 0) {
        $('div.amenities > h4').text(Object.values(selectedAmenities).join(', '));
        } else {
        $('div.amenities > h4').html('&nbsp;');
    }
    });

    $.get("http://0.0.0.0/5001/api/v1/status", function(data, status) {
        if (status == "success") {
            if (data.status == "OK") {
                $('#api_status').addClass('available');
            } else {
                $('#api_status').removeClass('available');
            }
        }
    });

    const places_search = $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        dataType: 'json',
        contentType: 'application/json',
        method: 'POST',
        data: JSON.stringify({})
    });
    places_search .done((data) => {
        for (let p = 0; p < data.length; p++) {
            const pName = data[p].name;
            const price_by_night = data[p].price_by_night;
            const max_guest = data[p].max_guest;
            const number_rooms = data[p].number_rooms;
            const number_bathrooms = data[p].number_bathrooms;
            const description = data[p].description;

            const article = $('<article></article>');
            const title_box = $("<div class = 'title_box><h2></h2><div class='price_by_night'></div></div>");
            title_box.find('>h2').html(pName);
            title_box.find('.price_by_night').html('$' + price_by_night);
            article.append(title_box);
            const information = $(' <div class="information"></div>');
            let guest_string = 'Guest';
            if (max_guest > 1) {guest_string = 'Guests';}
            const guest = $('<div class="max_guest"></div>').html(max_guest + guest_string);
            information.append(guest);
            let room_string = 'Bedroom';
            if (number_rooms != 1) {room_string = 'Bedrooms';}
            const rooms = $('<div class="number_rooms"></div>').html(number_rooms + room_string);
            information.append(rooms);
            let bathroom_string = 'Bedroom';
            if (number_bathrooms != 1) {bathroom_string = 'Bedrooms';}
            const bathrooms = $('<div class="number_bathrooms"</div>').html(number_bathrooms + bathroom_string);
            information.append(bathrooms);
            article.append(information);
            const describe = $('<div class="description"></div>').html(description);
            article.append(describe);
            $('SECTION.places').append(article);
        }
    });
});
