function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/e/2PACX-1vQFoScCD9ajngZA12tWH9e3lcXZewrMhi6mV3EZHdQWqWwkTTrP66aE8BW7HYMTxVq8YP6VdhP0rWUG/pubhtml',
callback: showInfo,
simpleSheet: true } )
}
function showInfo(data, tabletop) {
console.log(data);
for (var i = 0; i < data.length; i++) {
$(‘.post’).append(
‘<div class=”article” style=”background-image: url( ‘ +
data[i].img + ‘.jpg)”>’ +
‘<div class=”text”>’ +
‘<h1>’ + data[i].title + ‘</h1>’+
data[i].body +
‘</div> ‘ + ‘<div class=”meta-info”>’ + ‘<img src =”’ + data[i].img + ‘.jpg”>’+
‘<div class=”date”>’ + data[i].date + ‘</div>’ +
‘</div>’ +
‘</div>’);
}
}
window.addEventListener(‘DOMContentLoaded’, init)
