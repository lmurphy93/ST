var util = require('util');

var async = require('async');

var SensorTag = require('./index');


SensorTag.discover(function(sensorTag) {


  sensorTag.on('disconnect', function() {
    console.log('End of Sensortag Test');
    process.exit(0);
  });

  async.series([
      function(callback) {

        sensorTag.connectAndSetUp(callback);
      },


      function(callback) {
        sensorTag.readDeviceName(function(error, deviceName) {
          console.log('Device Name' + '\t' + deviceName);
          callback();
        });
      },
      function(callback) {
        
        sensorTag.readSystemId(function(error, systemId) {
          console.log('SystemId' + '\t' + systemId);
          callback();
        });
      },
      
      function(callback) {
 
        sensorTag.enableIrTemperature(callback);
      },
      function(callback) {
        setTimeout(callback, 2000);
      },
      function(callback) {
       
          
          sensorTag.readIrTemperature(function(error, objectTemperature, ambientTemperature) {
            console.log('Device Temp' + '\t%d °C', objectTemperature.toFixed(1));
            console.log('Ambient Temp' + '\t%d °C', ambientTemperature.toFixed(1));

            callback();
          });
       
      },
      function(callback) {
  
        sensorTag.disableIrTemperature(callback);
      },
      function(callback) {
   
        sensorTag.enableAccelerometer(callback);
      },
      function(callback) {
        setTimeout(callback, 2000);
      },

      function(callback) {
        
	    
          sensorTag.readAccelerometer(function(error, x, y, z) {
            console.log('Accelerometer' + '\tx = %d G, y = %d G, z = %d G', x.toFixed(1), y.toFixed(1), z.toFixed(1));
           
            callback();
          });
      
      },
      function(callback) {
        
        sensorTag.disableAccelerometer(callback);
      },
      function(callback) {
        
        sensorTag.enableHumidity(callback);
      },
      function(callback) {
        setTimeout(callback, 2000);
      },
      function(callback) {
        
          
          sensorTag.readHumidity(function(error, temperature, humidity) {
	    console.log('Humidity' + '\t%d % at %d °C', humidity.toFixed(1), temperature.toFixed(1));
          
            callback();
          });
       

      },
      function(callback) {
       
        sensorTag.disableHumidity(callback);
      },
      function(callback) {
        
        sensorTag.enableMagnetometer(callback);
      },
      function(callback) {
        setTimeout(callback, 2000);
      },
      function(callback) {
   
          
          sensorTag.readMagnetometer(function(error, x, y, z) {
            console.log('Magnetometer' + '\tx = %d μT, y = %d μT, z = %d μT', x.toFixed(1), y.toFixed(1), z.toFixed(1));
           
            callback();
          });
        
      },

      function(callback) {
       
        sensorTag.disableMagnetometer(callback);
      },
      function(callback) {
        
        sensorTag.enableBarometricPressure(callback);
      },
      function(callback) {
        setTimeout(callback, 2000);
      },
      function(callback) {
        
          
          sensorTag.readBarometricPressure(function(error, pressure) {
            console.log('Pressure' + '\t%d mBar', pressure.toFixed(1));

            callback();
          });
        
      },
      function(callback) {
       
        sensorTag.disableBarometricPressure(callback);
      },
      function(callback) {
       
        sensorTag.enableGyroscope(callback);
      },
      function(callback) {
        setTimeout(callback, 2000);
      },
      function(callback) {
       
          
          sensorTag.readGyroscope(function(error, x, y, z) {
            console.log('Gyroscope' + '\tx = %d °/s, y = %d °/s, z = %d °/s', x.toFixed(1), y.toFixed(1), z.toFixed(1));
           

            callback();
          });
        
      },

      function(callback) {
        
        sensorTag.disableGyroscope(callback);
      },

      
            function(callback) {
             
              sensorTag.enableLuxometer(callback);
            },
            function(callback) {
              setTimeout(callback, 2000);
            },
            function(callback) {
              
              
                sensorTag.readLuxometer(function(error, lux) {
                  console.log('Luxometer' + '\t%d lx', lux.toFixed(1));

                  callback();
                });
             
            },
            function(callback) {
             
              sensorTag.disableLuxometer(callback);
            },


	
      
      
      function(callback) {
      
        sensorTag.disconnect(callback);
      }
 
 ]
);
});

