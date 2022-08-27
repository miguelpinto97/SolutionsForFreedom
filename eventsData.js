


$(document).ready(function () {
    $('#calendar').fullCalendar({
        defaultView: 'month',
        events: [
            {
                title: 'SFF Webinar',
                start: '2022-08-21',
                description: 'Solutions For Freedom event in which we will talk about ... and provide valuable information on how it impacts our lives',
                link: 'http://www.solutionsforfreedom.org/'
            },
            {
                title: 'SFF Conference',
                start: '2022-08-22',
                description: 'Solutions For Freedom event in which we will talk about ... and provide valuable information on how it impacts our lives',
                link:'http://www.solutionsforfreedom.org/'
            },
            {
                title: 'SFF Workshop',
                start: '2022-08-23',
                description: 'Solutions For Freedom event in which we will talk about ... and provide valuable information on how it impacts our lives',
                link:'http://www.solutionsforfreedom.org/'
            }
        ],
        eventClick: function (calEvent, jsEvent, view) {
            var botonHtml = "<a class='btn btn-sm btn-primary' style='width: 50%;margin: 0 auto 10px auto;display: block;' href='" + calEvent.link+"'>See more</a>"
            $('#event-title').text(calEvent.title);
            $('#event-description').html(calEvent.description);
            $('#event-link').html(botonHtml);
            $('#modal-event').modal('show')
            $('#modal-event').modal();
        }
    });
});
