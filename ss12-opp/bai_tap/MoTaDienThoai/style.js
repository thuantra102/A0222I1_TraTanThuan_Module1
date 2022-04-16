
function Mobile(battery, status,name,) {
  this.battery = battery;
  this.inbox = [];
  this.send = [];
  this.status = status;
  this.name = name;
  this.messageMobile = [];

  this.checkMobile = function() {
    if(status) {
      return "Bật"
    } else {
      return "Tắt"
    }
  }
  this.controlMobile = function() {
    return this.status = !this.status
  }
  this.chargeBattery = function() {
    this.battery += 10;
    return this.battery;
  }
  this.getMessageMobile = function() {
    let message = "";
    for(let i = 0; i < this.messageMobile.length; i++) {
      message += this.messageMobile[i];
      return message
    }
  }
  this.getSend = function() {
   return  this.send.push(message);
    
  }

  
}
let nokia = new Mobile(20, true,"Nokia");
let iphone = new Mobile(80,false,"Iphone");

// bat tat 
function getStatus(phoneName) {
  let checkPhone = phoneName.checkMobile();
  if(checkPhone == 'Bật') {
    document.getElementById("status" + phoneName.name).innerHTML = "Bật";
  } else {
    document.getElementById("status" + phoneName.name).innerHTML = "Tắt"
  }
}
getStatus(nokia)
getStatus(iphone)
// dieu khieu bat tat
function controlStatus(phoneName) {
  let mobile;
  let control;
  if(phoneName == "nokia") {
    mobile = nokia;
    control = nokia.controlMobile()
  } else {
    mobile = iphone;
    control = iphone.controlMobile()
  }
  if(control == false) {
    document.getElementById("status" + mobile.name).innerHTML = "Tắt";
  } else {
    document.getElementById("status" + mobile.name).innerHTML = "Bật";
  }
}
function getBattery(phoneName) {
  let checkBattery = phoneName.battery;
  document.getElementById("battery" + phoneName.name).innerHTML = checkBattery + "%"
}
getBattery(nokia)
getBattery(iphone)
// xac phin
function chargeBattery(phoneName) {
  let mobile;
  let charge;
  if (phoneName == "nokia") {
    mobile = nokia;
    charge = nokia.chargeBattery();
  } else {
    mobile = iphone;
    charge = iphone.chargeBattery();
  }
   document.getElementById("battery" + mobile.name).innerHTML = charge + "%"
    if(charge > 100) {
       alert("Pin đầy")
       document.getElementById("battery" + mobile.name).innerHTML =  "100%"
    }
}
function sendMessage() {
  let message = document.getElementById("sendNokia").value;
  nokia.messageMobile.push = message;
  document.getElementById("sentNokia").innerHTML = nokia.getSend()
}
console.log(nokia.getMessageMobile());
