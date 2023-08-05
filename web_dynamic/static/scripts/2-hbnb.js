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
        if (stauts == "success") {
            if (data.status == "OK") {
                $('#api_status').addClass('available');
            } else {
                $('#api_status').removeClass('available');
            }
        }
    });
});
