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
      var strVar="";
      strVar += "<div class=\"groups-headline more-space\">Rechnungswesen<\/div>";
      strVar += "          <div class=\"all-groups\">";
      strVar += "            <div class=\"inner\">";
      strVar += "              <a class=\"box\" href=\"..\/group1.html\">";
      strVar += "                <div class=\"upper\">";
      strVar += "                  <div class=\"group-title\">ReWe Chaos<\/div>";
      strVar += "                  <div class=\"attending\">";
      strVar += "                    <img src=\"..\/images\/person-icon-white.png\"> <span";
      strVar += "                      class=\"number-attendees\">9<\/span>";
      strVar += "                  <\/div>";
      strVar += "                <\/div>";
      strVar += "                <div class=\"below\">";
      strVar += "                  <strong class=\"time\">Mo, 17.Juli, 18 Uhr. Jede zweite Woche.<\/strong>";
      strVar += "                  <div class=\"description\">Bitte gut vorbereiten.<\/div>";
      strVar += "                <\/div>";
      strVar += "              <\/a>";
      strVar += "              <a class=\"box\" href=\"..\/janas-group.html\">";
      strVar += "                <div class=\"upper\">";
      strVar += "                  <div class=\"group-title\">ReWe für Alle<\/div>";
      strVar += "                  <div class=\"attending\">";
      strVar += "                    <img src=\"..\/images\/person-icon-white.png\"> <span";
      strVar += "                      class=\"number-attendees\">3<\/span>";
      strVar += "                  <\/div>";
      strVar += "                <\/div>";
      strVar += "                <div class=\"below\">";
      strVar += "                  <strong class=\"time\">Do, 27.Juli, 15 Uhr. Jede Woche.<\/strong>";
      strVar += "                  <div class=\"description\">Alle willkommen!<\/div>";
      strVar += "                <\/div>";
      strVar += "              <\/a>";
      strVar += "              <a class=\"box\" href=\"..\/group1.html\">";
      strVar += "                <div class=\"upper\">";
      strVar += "                  <div class=\"group-title\">ReWe Profis<\/div>";
      strVar += "                  <div class=\"attending\">";
      strVar += "                    <img src=\"..\/images\/person-icon-white.png\"> <span";
      strVar += "                      class=\"number-attendees\">7<\/span>";
      strVar += "                  <\/div>";
      strVar += "                <\/div>";
      strVar += "                <div class=\"below\">";
      strVar += "                  <strong class=\"time\">Mi, 01.August, 15 Uhr.<\/strong>";
      strVar += "                  <div class=\"description\">Wir treffen uns *nur* in den";
      strVar += "                    Semesterferien.<\/div>";
      strVar += "                <\/div>";
      strVar += "              <\/a>";
      strVar += "            <\/div>";
      strVar += "          <\/div>";

        $('#outputcontent').html(strVar);
    }
});
