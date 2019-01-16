var codeKeyTS = 'R5GPFAQIimT5W59YKRVapnwh0UQuWyeyPU';

$(document).ready(function () {
    var tsrequest = {
        url: 'https://teamspeak-servers.org/api/?object=servers&element=detail&key={CODE}&month=current&format=json'.replace('{CODE}', codeKeyTS),
        type: 'GET',
        success: onDataReceivedTS,
        error: onDataErrorTS,
        timeout: 3000
    };

    $.ajax(tsrequest);

});

function onDataReceivedTS(dataa) {
    var ts3server = JSON.parse(dataa);

    $('#tsServerQueryLoading').attr('hidden',true);
    $('#tsServerQuerySuccess').removeAttr('hidden');

    //console.log(data);

    $('#tsaddress').text(ts3server.address);
    $('#tsport').text(ts3server.port);

    if(ts3server.is_online === '1'){
        $('#ts3server_on').removeAttr('disabled');
        $('#ts3server_off').attr('disabled',true);
    }else{
        $('#ts3server_off').removeAttr('disabled');
        $('#ts3server_on').attr('disabled',true);
    }
    $('#tsplayeron').text(ts3server.players);
    $('#tsmaxplayer').text(ts3server.maxplayers);
    $('#tsurlarmaservernet').text(ts3server.url);
}

function onDataErrorTS() {
    $('#tsServerQueryLoading').attr('hidden',true);
    $('#tsServerQuerySuccess').attr('hidden',true);
    $('#tsServerQueryError').removeAttr('hidden');
}

var codeKey = 'bcdzrsb2sy4nfdpb3w9g2fk7f5kqre04c2k';

$(window).load(function() {
    var request = {
        url: 'https://arma3-servers.net/api/?object=servers&element=detail&key=' + codeKey,
        type: 'GET',
        success: onDataReceived,
        error: onDataError,
        timeout: 1500
    };

    $.ajax(request);


    function onDataReceived(data) {
        var server = JSON.parse(data);

        $('#alirServerQueryLoading').attr('hidden',true);
        $('#alirServerQuerySuccess').removeAttr('hidden');

        $('#aliraddress').text(server.address);
        $('#alirport').text(server.port);

        if(server.is_online === '1'){
            $('#server_on').removeAttr('disabled');
            $('#server_off').attr('disabled',true);
        }else{
            $('#server_off').removeAttr('disabled');
            $('#server_on').attr('disabled',true);
        }
        $('#alirplayeron').text(server.players);
        $('#alirmaxplayer').text(server.maxplayers);
        $('#alirurlarmaservernet').text(server.url);
    }

    function onDataError() {
        $('#alirServerQueryLoading').attr('hidden',true);
        $('#alirServerQuerySuccess').attr('hidden',true);
        $('#alirServerQueryError').removeAttr('hidden');
    }

});