
function Mobile(battery, status,name) {
  this.battery = battery;
  this.status = status;
  this.name = name;
  this.messages = {
    messageSend : [],
    messageRecive : []
  }

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

  this.getstringMessage = function(type) {
    return this.messages[type].reduce((prev,next) => prev + "<br />" + next,"");
  }
  this.reduceBattery = function() {
    this.battery = this.battery - 10;
    if(this.battery < 0) {
      this.battery = 0;
    }
  }

}
let nokia = new Mobile(10, true,"Nokia");
let iphone = new Mobile(5,false,"Iphone");

// status
function getStatus(phoneName) {
  let checkPhone = phoneName.checkMobile();
  document.getElementById(`status${phoneName.name}`).innerHTML = 
  (checkPhone === "Bật" ? "Bật" : "Tắt");
}
getStatus(nokia)
getStatus(iphone)
// dieu khieu bat tat
function controlStatus(phoneName) {
  let mobile = phoneName === "nokia" ? nokia : iphone;
  let control = mobile.controlMobile();
  document.getElementById(`status${mobile.name}`).innerHTML = 
  (!control ? "Tắt" : "Bật");
}
// hien thin pin
function getBattery(phoneName) {
  let checkBattery = phoneName.battery;
  document.getElementById("battery" + phoneName.name).innerHTML = checkBattery + "%"
}
getBattery(nokia)
getBattery(iphone)
// xac phin
function chargeBattery(phoneName) {
  let mobile = phoneName === "nokia" ? nokia : iphone;
  let charge = mobile.chargeBattery();
   document.getElementById("battery" + mobile.name).innerHTML = `${charge}%`
    if(charge > 100) {
       alert("Pin đầy")
       document.getElementById("battery" + mobile.name).innerHTML =  "100%"
    }
}
// goi tin nhan 
function sendMessage(phoneName) {
  let message = document.getElementById(`send${phoneName}`).value;
  let mobile = phoneName === "Nokia" ? nokia : iphone;
  if(mobile.battery>0) {
    if(mobile.status) {
      if (phoneName === "Nokia") {
        nokia.messages.messageSend.push(message);
        iphone.messages.messageRecive.push(message);
        document.getElementById(`sentNokia`).innerHTML = nokia.getstringMessage("messageSend");
        document.getElementById(`inboxIphone`).innerHTML = iphone.getstringMessage("messageRecive");
        
      }
     else {
      nokia.messages.messageRecive.push(message);
      iphone.messages.messageSend.push(message);
        document.getElementById(`inboxNokia`).innerHTML = nokia.getstringMessage("messageRecive");
        document.getElementById(`sentIphone`).innerHTML = iphone.getstringMessage("messageSend");
      }
     mobile.reduceBattery();
      getBattery(mobile);
    } else {
      alert(`Bạn phải bật điện thoại ${phoneName} lên trước đã`)
    }
  } else {
    alert( `Điện thoại ${phoneName} hết pin rồi. Xạc lên đi`)
  }
}

