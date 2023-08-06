const $ = window.$;
$(document).ready(() => {
    const amenities = {};
    let list = [];
    const checkbox = $('.amentities input[type="checkbox"]');
    checkbox.prop('checked', false);
    checkbox.change(() => {
        const data_id = $(this).attr('data-id');
        const data_name = $(this).attr('data-name');
        if (this.checked) {
            amenities[data_id] = data_name;
        } else {
            delete (amenities[data_id]);
        }
        for (const k in amenities) {
            list.push(amenities[k]);
        }
        const result = list.join(', ');
        $('div.amenties > h4').text(result);
        list = [];
    });
});