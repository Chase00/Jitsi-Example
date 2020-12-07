// https://jitsi.org/api/
// https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe

function StartMeeting(){
    // Domain of the hosted meeting
    const domain = 'meet.jit.si';

    // Generating room string for after the url
    var roomString = 'MeetingRoomExample' + (new Date()).getTime();
    
    // Options of the video call
    const options = {
        roomName: roomString,
        width: '100%',
        height: '100%',
        parentNode: document.querySelector('#jitsi-meet-conf-container'),
        userInfo: {
            displayName: ''
        },
        configOverwrite:{},
        interfaceConfigOverwrite: {}
    };

    // Creating a new Jitsi Meet API object
    api = new JitsiMeetExternalAPI(domain, options);


    // Excecuting jitsi api commands
    api.executeCommand('subject', 'Room Name');
    api.executeCommand('displayName', displayName);
}