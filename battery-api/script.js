const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);


// Battery API

const battery = ()=> {
  if('getBattery' in navigator){
    navigator.getBattery().then((battery)=>{

      function updateAllBatteryInfoDetails() {
        updateChargingInfo();
        updateLevelChange();
        updateDischarging();
        updateCharging();
      }
      updateAllBatteryInfoDetails();
      // Battery charging change
      battery.addEventListener('chargingchange', () => {
        console.log("Charging has changed - 20%-21%");
      });

      function updateChargingInfo() {
        const isCharging = battery.charging ? 'Yes' : 'No';
        // console.log(isCharging);
        batteryCharging.innerHTML = isCharging;
      }
      // Battery charging time
      battery.addEventListener('chargingtimechange', () => {
        // console.log("Charging time has changed");
        updateCharging()
      });

      function updateCharging() {
        // console.log(battery.chargingTime);
        batteryChargingTime.innerHTML = battery.chargingTime + " seconds";
      }
      // Battery discharging time
      battery.addEventListener('dischargingtimechange', () => {
        // console.log("discharging time has changed");
        updateDischarging();
      });
      function updateDischarging() {
        // console.log(battery.dischargingTime);
        batteryDisChargingTime.innerHTML = battery.dischargingTime + " seconds";
      }
      // Battery level change
      battery.addEventListener('levelChange', ()=>{
        updateLevelChange();
      });
      function updateLevelChange() {
        const level = battery.level *100 + "%";
        // console.log(level);
        batteryLevel.innerHTML = level
      }
      // Battery status
    });
  }
};

battery()