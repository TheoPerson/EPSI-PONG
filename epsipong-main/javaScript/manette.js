document.querySelector('h5').textContent = 'Manette deconnecté !';
var h5 = document.getElementById("manette");


window.addEventListener("gamepadconnected", function(e) {
  h5.setAttribute("style", "color:green"); 
  document.querySelector('h5').textContent = "Manette PS4 connecté !";
  console.log("Contrôleur n°%d connecté : %s. %d boutons, %d axes.",
  e.gamepad.index, e.gamepad.id,
  e.gamepad.buttons.length, e.gamepad.axes.length);
});


window.addEventListener("gamepaddisconnected", function(e) {
  document.querySelector('h5').textContent = 'Manette PS4 deconnecté !';
  h5.setAttribute("style", "color:red"); 
  console.log("Contrôleur n°%d déconnecté : %s",
  e.gamepad.index, e.gamepad.id);
});


var gamepads = {};

function gamepadHandler(event, connecting) {
  var gamepad = event.gamepad;
  // Note :
  // gamepad === navigator.getGamepads()[gamepad.index]

  if (connecting) {
    gamepads[gamepad.index] = gamepad;
  } else {
    delete gamepads[gamepad.index];
  }
}

window.addEventListener("gamepadconnected", function(e) { gamepadHandler(e, true); }, false);
window.addEventListener("gamepaddisconnected", function(e) { gamepadHandler(e, false); }, false);


var _guid = gamepad_get_guid(global.PadIndex);
var _desc = gamepad_get_description(global.PadIndex);
global.GamepadID = _guid + "," + _desc;

//////////////////////////////////////////////////////////////////////

