let diallerInput = document.getElementById("diallerInput");
let currentCall = "";

function connectToFreeswitch() {
    hostname  = document.getElementById('hostname').value;
    socketURL = document.getElementById('socketURL').value;
    position  = document.getElementById('position').value;
    password  = document.getElementById('password').value;
  
    function _bootstrap(status) {
      vertoHandle = new jQuery.verto({
        login: position + '@' + hostname,
        passwd: password,
        socketUrl: socketURL,
        ringFile: 'ringtone.mp3',
        tag: 'positionDevice',
        deviceParams: {
          useMic: true,
          useSpeak: true
        },
        iceServers: true
      },

      {
        onWSLogin: onWSLogin,
        onWSClose: onWSClose,
        onDialogState: onDialogState
      });
    }
  
    if (hostname && socketURL && position && password) $.verto.init({}, _bootstrap);
    else alert('You need to provide the full configuration settings.');
  }
