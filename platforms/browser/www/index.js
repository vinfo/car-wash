document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("pause", onPause, false);
function onDeviceReady() {
    checkConnection();    
    getDeviceProperty();
  }
  function getDeviceProperty() {
    console.log("getDeviceProperty");    
    var deviceOS = device.platform;  //fetch the device operating system
    var deviceOSVersion = device.version;  //fetch the device OS version
    var uuid = device.uuid;
    sessionStorage.setItem("OS", deviceOS);
    sessionStorage.setItem("UUID", uuid);
    console.log("Plataforma registrada " + device.platform);
    console.log("UUID " + uuid);
    initPushwoosh();   
    //cordova.plugins.notification.badge.configure({ autoClear: true });     
  }
  function onPause() {
      localStorage.setItem("login","true");
  }
  function checkConnection() {
    console.log("checkConnection");
    var state = true;
    if(sessionStorage.OS){        
      var networkState = navigator.connection.type;
      var states = {};
      states[Connection.UNKNOWN] = 'Unknown connection';
      states[Connection.ETHERNET] = 'Ethernet connection';
      states[Connection.WIFI] = 'WiFi connection';
      states[Connection.CELL_2G] = 'Cell 2G connection';
      states[Connection.CELL_3G] = 'Cell 3G connection';
      states[Connection.CELL_4G] = 'Cell 4G connection';
      states[Connection.CELL] = 'Cell generic connection';
      states[Connection.NONE] = 'No network connection';
      
      if (states[networkState] == 'No network connection') {
        alert('Problemas de conectividad a Internet!');
        state = false;
      }
    }
    return state;
  }
  function setBadge(value){
    alert("Badge");
    cordova.plugins.notification.badge;
    cordova.plugins.notification.badge.set(value);      
  }
  function send_notification(msg,page,id_u){
    //alert("Notification");
    var beep='.mp3';
    if(sessionStorage.OS!="Android"){
      beep='.caf';
    }
    if(localStorage.id_u&&localStorage.id_u==id_u){    
      navigator.vibrate([1200]);
      cordova.plugins.notification.local.schedule({
        id: 1,
        text: msg,
        icon: 'http://bankucolombia.com/images/logoMobil.png',
        sound: 'file://beep'+beep,
        badge: 1,
        data: { page: page }
      });
    }
  }

  function initPushwoosh() {
    var pushwoosh = cordova.require("pushwoosh-cordova-plugin.PushNotification");

  // Should be called before pushwoosh.onDeviceReady
  document.addEventListener('push-notification', function(event) {
    var title = event.notification.title;
    var userData = event.notification.userdata;

    var notification = event.notification;

    //clear the app badge
    pushNotification.setApplicationIconBadgeNumber(0);            

    //dump custom data to the console if it exists
    if(typeof(userData) != "undefined") {
        //alert('user data: ' + JSON.stringify(userData));
    }
  });
  
  // Initialize Pushwoosh. This will trigger all pending push notifications on start.
  pushwoosh.onDeviceReady({
    appid: "4B708-1B8C1",
    projectid: "928675299174"
  });

  pushwoosh.registerDevice(
    function(status) {
      var pushToken = status.pushToken;
      localStorage.setItem("pushtoken",pushToken);
          // handle successful registration here
        },
        function(status) {
        // handle registration error here
      }
      );  
}

function registerLog(log){
  console.log(log);
}