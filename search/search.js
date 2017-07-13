var courses = [
    { value: 'Mathematik', data: 'Jäger-Ambroszewicz' },
    { value: 'Usability', data: 'Siegeris' },
    { value: 'Rechnungswesen', data: 'Rachfall' },
    { value: 'Datenbanksysteme', data: 'Siegeris' },
    { value: 'Algorithmen und Datenstrukturen', data: 'Siegeris' }
];

// $('#autocomplete').autocomplete({
//     lookup: courses,
//     onSelect: function (suggestion) {
//         // some function here
//     }
// });

// setup autocomplete function pulling from currencies[] array
$('#autocomplete').autocomplete({
    lookup: courses,
    onSelect: function (suggestion) {
        var thehtml =
            '<div class="groups-headline more-space">Rechnungswesen</div>'+
            '<div class="all-groups">'+
            '<div class="inner">'+

            '<a class="box" href="../group1.html">'+
            '<div class="upper">'+
            '<div class="group-title">ReWe für Alle</div>'+
        '<div class="attending">'+
          '<img src="../images/person-icon-white.png">'+
            '<span class="number-attendees">9</span>'+
            '</div></div><div class="below"><strong class="time">Mo, 17.Juli, 18 Uhr. Jede 2. Woche.</strong>'+
        '<div class="description">Wir treffen uns auch in den Semesterferien.</div></div></a>'+
        '<a class="box" href="../group1.html">'+
            '<div class="upper">'+
            '<div class="group-title">ReWe Chaotinnen</div>'+
        '<div class="attending">'+
            '<img src="../images/person-icon-white.png">'+
            '<span class="number-attendees">8</span>'+
            '</div>'+
            '</div>'+
            '<div class="below">'+
            '<strong class="time">Di, 15.Juli, 15 Uhr.</strong>'+
        '<div class="description">Wir treffen uns auch in den Semesterferien.</div>'+
        '</div>'+
        '</a>'+
        '<a class="box" href="../group1.html">'+
            '<div class="upper">'+
            '<div class="group-title">ReWe Profis</div>'+
        '<div class="attending">'+
            '<img src="../images/person-icon-white.png">'+
            '<span class="number-attendees">7</span>'+
            '</div>'+
            '</div>'+
            '<div class="below">'+
            '<strong class="time">Mi, 16.Juli, 15 Uhr. Alle 2 Wochen.</strong>'+
        '<div class="description">Wir treffen uns auch in den Semesterferien.</div>'+
        '</div>'+
        '</a>';
        $('#outputcontent').html(thehtml);
    }
});