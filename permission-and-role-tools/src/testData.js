export const TESTDATA = [
	{
  "_id": {
    "$oid": "668fd976061a2195a800b200"
  },
  "value": "isa.avar73@gmail.com",
  "_value": "isaavar73gmailcom",
  "phone": "+17372176917",
  "password": "$2b$10$gHkewrhNfJYMZ48r8OB7ruMzo9nGfoUK75hyfJS8TxzMMaHK/zoyW",
  "role": [
    "driver"
  ],
  "status": "Off Road",
  "_deleted": false,
  "created": {
    "$date": "2024-07-11T13:09:10.405Z"
  },
  "modified": {
    "$date": "2024-07-11T13:23:52.355Z"
  },
  "_docVersion": 19,
  "appState": [
    {
      "timestamp": 1720703351287,
      "appVersion": "24.0.1",
      "buildNumber": "358",
      "updateNumber": "011ad75a-f38b-45f9-80be-d5bf9d7f7f7f",
      "userId": "668fd976061a2195a800b200",
      "userEmail": "isa.avar73@gmail.com",
      "userFirstName": null,
      "userLastName": null,
      "userPhone": null,
      "userAddress": null,
      "userVehicle": null,
      "userSelfTags": null,
      "campaignId": null,
      "campaignName": null,
      "deviceInfo": {
        "version": "14",
        "framework": "react-native",
        "model": "Pixel 8 Pro",
        "platform": "Android",
        "manufacturer": "Google"
      },
      "isOnboarded": false,
      "isLoggedIn": true,
      "activeTrip": null,
      "location": null,
      "activity": null,
      "isBackgroundTrackingEnabled": false,
      "backgroundLocationPermissionGranted": false,
      "backgroundGeolocationProviderState": {
        "status": 2,
        "accuracyAuthorization": 0,
        "airplane": false,
        "gps": true,
        "enabled": true,
        "network": true
      },
      "backgroundGeolocationState": {
        "didDeviceReboot": false,
        "didLaunchInBackground": false,
        "odometer": 0,
        "trackingMode": 1,
        "triggerActivities": "in_vehicle, on_bicycle, on_foot, running, walking",
        "stopOnStationary": false,
        "enabled": false,
        "stopAfterElapsedMinutes": 0,
        "stationaryRadius": 25,
        "startOnBoot": true,
        "scheduleUseAlarmManager": false,
        "schedule": [],
        "persistMode": 2,
        "persist": true,
        "notification": {
          "strings": {},
          "sticky": false,
          "largeIcon": "",
          "layout": "",
          "channelId": "",
          "color": "",
          "smallIcon": "",
          "text": "Drive safe!",
          "priority": -1,
          "channelName": "TSLocationManager",
          "actions": [],
          "title": "Carvertise Tracking Enabled"
        },
        "motionTriggerDelay": 0,
        "foregroundService": true,
        "method": "POST",
        "maxMonitoredGeofences": 97,
        "geofenceTemplate": "",
        "locationAuthorizationRequest": "Always",
        "locationUpdateInterval": 1000,
        "locationTemplate": "{\"location\":{\"time\":\"<%= timestamp %>\",\"coords\":{\"type\":\"Point\",\"coordinates\":[<%= longitude %>,<%= latitude %>]}},\"meta\":{\"activity\":{\"type\":\"<%= activity.type %>\",\"confidence\":\"<%= activity.confidence %>\"},\"uuid\":\"<%= uuid %>\"}}",
        "isMoving": false,
        "disableLocationAuthorizationAlert": false,
        "httpRootProperty": ".",
        "maxDaysToPersist": 3,
        "httpTimeout": 60000,
        "geofenceProximityRadius": 1000,
        "geofenceModeHighAccuracy": false,
        "fastestLocationUpdateInterval": -1,
        "enableTimestampMeta": false,
        "headlessJobService": "com.transistorsoft.rnbackgroundgeolocation.HeadlessTask",
        "distanceFilter": 10,
        "disableStopDetection": false,
        "disableProviderChangeRecord": false,
        "url": "https://api.carvertise.com/api/1/private/gps",
        "maxBatchSize": 30,
        "isFirstBoot": true,
        "disableElasticity": false,
        "logMaxDays": 3,
        "useSignificantChangesOnly": false,
        "heartbeatInterval": 60,
        "disableMotionActivityUpdates": false,
        "speedJumpFilter": 300,
        "debug": false,
        "disableAutoSyncOnCellular": false,
        "desiredAccuracy": -1,
        "minimumActivityRecognitionConfidence": 75,
        "locationTimeout": 60,
        "schedulerEnabled": false,
        "enableHeadless": true,
        "geofenceInitialTriggerEntry": true,
        "configUrl": "",
        "deferTime": 0,
        "stopOnTerminate": false,
        "desiredOdometerAccuracy": 100,
        "headers": {
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOnsiZ3BzIjoiYWxsIn0sInJlYWQiOnt9LCJ1cGRhdGUiOnt9LCJkZWxldGUiOnt9fSwidXNlcm5hbWUiOiJpc2EuYXZhcjczQGdtYWlsLmNvbSIsImVudiI6WyJhbGwiXSwiaWF0IjoxNzIwNzAzMzUwLCJleHAiOjE3MzYyNTUzNTB9.54BixLxBCBiLTH-DvQgWhgbcvxEe1qk42346fQHj7kA"
        },
        "params": {},
        "elasticityMultiplier": 1,
        "extras": {
          "ids": {
            "trip": {},
            "driver": {}
          },
          "_sample": 16237,
          "_appVersion": "24.0.1"
        },
        "batchSync": true,
        "backgroundPermissionRationale": {
          "negativeAction": "",
          "positiveAction": "Change to Allow all the time",
          "message": "In order to analyze your driving so YOU earn money, please enable 'Allow all the time' permission",
          "title": "Allow access to this device's location in the background?"
        },
        "maxRecordsToPersist": -1,
        "activityRecognitionInterval": 10000,
        "stopTimeout": 5,
        "autoSyncThreshold": 20,
        "locationsOrderDirection": "ASC",
        "allowIdenticalLocations": false,
        "autoSync": true,
        "logLevel": 5,
        "authorization": {}
      },
      "backgroundGeolocationSensors": {
        "significant_motion": true,
        "gyroscope": true,
        "magnetometer": true,
        "accelerometer": true,
        "platform": "android"
      },
      "backgroundGeolocationSensorPermissions": {
        "accelerometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "gyroscope": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "magnetometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        }
      }
    },
    {
      "timestamp": 1720703360015,
      "appVersion": "24.0.1",
      "buildNumber": "358",
      "updateNumber": "011ad75a-f38b-45f9-80be-d5bf9d7f7f7f",
      "userId": "668fd976061a2195a800b200",
      "userEmail": "isa.avar73@gmail.com",
      "userFirstName": "Isa",
      "userLastName": "Avar",
      "userPhone": "+17372176917",
      "userVehicle": {},
      "userSelfTags": {},
      "campaignId": null,
      "campaignName": null,
      "deviceInfo": {
        "version": "14",
        "framework": "react-native",
        "model": "Pixel 8 Pro",
        "platform": "Android",
        "manufacturer": "Google"
      },
      "isOnboarded": false,
      "isLoggedIn": true,
      "activeTrip": null,
      "location": null,
      "activity": null,
      "isBackgroundTrackingEnabled": false,
      "backgroundLocationPermissionGranted": false,
      "backgroundGeolocationProviderState": {
        "status": 2,
        "accuracyAuthorization": 0,
        "airplane": false,
        "gps": true,
        "enabled": true,
        "network": true
      },
      "backgroundGeolocationState": {
        "didDeviceReboot": false,
        "didLaunchInBackground": false,
        "odometer": 0,
        "trackingMode": 1,
        "triggerActivities": "in_vehicle, on_bicycle, on_foot, running, walking",
        "stopOnStationary": false,
        "enabled": false,
        "stopAfterElapsedMinutes": 0,
        "stationaryRadius": 25,
        "startOnBoot": true,
        "scheduleUseAlarmManager": false,
        "schedule": [],
        "persistMode": 2,
        "persist": true,
        "notification": {
          "strings": {},
          "sticky": false,
          "largeIcon": "",
          "layout": "",
          "channelId": "",
          "color": "",
          "smallIcon": "",
          "text": "Drive safe!",
          "priority": -1,
          "channelName": "TSLocationManager",
          "actions": [],
          "title": "Carvertise Tracking Enabled"
        },
        "motionTriggerDelay": 0,
        "foregroundService": true,
        "method": "POST",
        "maxMonitoredGeofences": 97,
        "geofenceTemplate": "",
        "locationAuthorizationRequest": "Always",
        "locationUpdateInterval": 1000,
        "locationTemplate": "{\"location\":{\"time\":\"<%= timestamp %>\",\"coords\":{\"type\":\"Point\",\"coordinates\":[<%= longitude %>,<%= latitude %>]}},\"meta\":{\"activity\":{\"type\":\"<%= activity.type %>\",\"confidence\":\"<%= activity.confidence %>\"},\"uuid\":\"<%= uuid %>\"}}",
        "isMoving": false,
        "disableLocationAuthorizationAlert": false,
        "httpRootProperty": ".",
        "maxDaysToPersist": 3,
        "httpTimeout": 60000,
        "geofenceProximityRadius": 1000,
        "geofenceModeHighAccuracy": false,
        "fastestLocationUpdateInterval": -1,
        "enableTimestampMeta": false,
        "headlessJobService": "com.transistorsoft.rnbackgroundgeolocation.HeadlessTask",
        "distanceFilter": 10,
        "disableStopDetection": false,
        "disableProviderChangeRecord": false,
        "url": "https://api.carvertise.com/api/1/private/gps",
        "maxBatchSize": 30,
        "isFirstBoot": true,
        "disableElasticity": false,
        "logMaxDays": 3,
        "useSignificantChangesOnly": false,
        "heartbeatInterval": 60,
        "disableMotionActivityUpdates": false,
        "speedJumpFilter": 300,
        "debug": false,
        "disableAutoSyncOnCellular": false,
        "desiredAccuracy": -1,
        "minimumActivityRecognitionConfidence": 75,
        "locationTimeout": 60,
        "schedulerEnabled": false,
        "enableHeadless": true,
        "geofenceInitialTriggerEntry": true,
        "configUrl": "",
        "deferTime": 0,
        "stopOnTerminate": false,
        "desiredOdometerAccuracy": 100,
        "headers": {
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOnsiZ3BzIjoiYWxsIn0sInJlYWQiOnt9LCJ1cGRhdGUiOnt9LCJkZWxldGUiOnt9fSwidXNlcm5hbWUiOiJpc2EuYXZhcjczQGdtYWlsLmNvbSIsImVudiI6WyJhbGwiXSwiaWF0IjoxNzIwNzAzMzUwLCJleHAiOjE3MzYyNTUzNTB9.54BixLxBCBiLTH-DvQgWhgbcvxEe1qk42346fQHj7kA"
        },
        "params": {},
        "elasticityMultiplier": 1,
        "extras": {
          "ids": {
            "trip": {},
            "driver": {}
          },
          "_sample": 16237,
          "_appVersion": "24.0.1"
        },
        "batchSync": true,
        "backgroundPermissionRationale": {
          "negativeAction": "",
          "positiveAction": "Change to Allow all the time",
          "message": "In order to analyze your driving so YOU earn money, please enable 'Allow all the time' permission",
          "title": "Allow access to this device's location in the background?"
        },
        "maxRecordsToPersist": -1,
        "activityRecognitionInterval": 10000,
        "stopTimeout": 5,
        "autoSyncThreshold": 20,
        "locationsOrderDirection": "ASC",
        "allowIdenticalLocations": false,
        "autoSync": true,
        "logLevel": 5,
        "authorization": {}
      },
      "backgroundGeolocationSensors": {
        "significant_motion": true,
        "gyroscope": true,
        "magnetometer": true,
        "accelerometer": true,
        "platform": "android"
      },
      "backgroundGeolocationSensorPermissions": {
        "accelerometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "gyroscope": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "magnetometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        }
      }
    },
    {
      "timestamp": 1720703477485,
      "appVersion": "24.0.1",
      "buildNumber": "358",
      "updateNumber": "011ad75a-f38b-45f9-80be-d5bf9d7f7f7f",
      "userId": "668fd976061a2195a800b200",
      "userEmail": "isa.avar73@gmail.com",
      "userFirstName": "Isa",
      "userLastName": "Avar",
      "userPhone": "+17372176917",
      "userAddress": "Austin, TX 78741",
      "userVehicle": {},
      "userSelfTags": {},
      "campaignId": null,
      "campaignName": null,
      "deviceInfo": {
        "version": "14",
        "framework": "react-native",
        "model": "Pixel 8 Pro",
        "platform": "Android",
        "manufacturer": "Google"
      },
      "isOnboarded": false,
      "isLoggedIn": true,
      "activeTrip": null,
      "location": null,
      "activity": null,
      "isBackgroundTrackingEnabled": false,
      "backgroundLocationPermissionGranted": false,
      "backgroundGeolocationProviderState": {
        "status": 2,
        "accuracyAuthorization": 0,
        "airplane": false,
        "gps": true,
        "enabled": true,
        "network": true
      },
      "backgroundGeolocationState": {
        "didDeviceReboot": false,
        "didLaunchInBackground": false,
        "odometer": 0,
        "trackingMode": 1,
        "triggerActivities": "in_vehicle, on_bicycle, on_foot, running, walking",
        "stopOnStationary": false,
        "enabled": false,
        "stopAfterElapsedMinutes": 0,
        "stationaryRadius": 25,
        "startOnBoot": true,
        "scheduleUseAlarmManager": false,
        "schedule": [],
        "persistMode": 2,
        "persist": true,
        "notification": {
          "strings": {},
          "sticky": false,
          "largeIcon": "",
          "layout": "",
          "channelId": "",
          "color": "",
          "smallIcon": "",
          "text": "Drive safe!",
          "priority": -1,
          "channelName": "TSLocationManager",
          "actions": [],
          "title": "Carvertise Tracking Enabled"
        },
        "motionTriggerDelay": 0,
        "foregroundService": true,
        "method": "POST",
        "maxMonitoredGeofences": 97,
        "geofenceTemplate": "",
        "locationAuthorizationRequest": "Always",
        "locationUpdateInterval": 1000,
        "locationTemplate": "{\"location\":{\"time\":\"<%= timestamp %>\",\"coords\":{\"type\":\"Point\",\"coordinates\":[<%= longitude %>,<%= latitude %>]}},\"meta\":{\"activity\":{\"type\":\"<%= activity.type %>\",\"confidence\":\"<%= activity.confidence %>\"},\"uuid\":\"<%= uuid %>\"}}",
        "isMoving": false,
        "disableLocationAuthorizationAlert": false,
        "httpRootProperty": ".",
        "maxDaysToPersist": 3,
        "httpTimeout": 60000,
        "geofenceProximityRadius": 1000,
        "geofenceModeHighAccuracy": false,
        "fastestLocationUpdateInterval": -1,
        "enableTimestampMeta": false,
        "headlessJobService": "com.transistorsoft.rnbackgroundgeolocation.HeadlessTask",
        "distanceFilter": 10,
        "disableStopDetection": false,
        "disableProviderChangeRecord": false,
        "url": "https://api.carvertise.com/api/1/private/gps",
        "maxBatchSize": 30,
        "isFirstBoot": true,
        "disableElasticity": false,
        "logMaxDays": 3,
        "useSignificantChangesOnly": false,
        "heartbeatInterval": 60,
        "disableMotionActivityUpdates": false,
        "speedJumpFilter": 300,
        "debug": false,
        "disableAutoSyncOnCellular": false,
        "desiredAccuracy": -1,
        "minimumActivityRecognitionConfidence": 75,
        "locationTimeout": 60,
        "schedulerEnabled": false,
        "enableHeadless": true,
        "geofenceInitialTriggerEntry": true,
        "configUrl": "",
        "deferTime": 0,
        "stopOnTerminate": false,
        "desiredOdometerAccuracy": 100,
        "headers": {
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOnsiZ3BzIjoiYWxsIn0sInJlYWQiOnt9LCJ1cGRhdGUiOnt9LCJkZWxldGUiOnt9fSwidXNlcm5hbWUiOiJpc2EuYXZhcjczQGdtYWlsLmNvbSIsImVudiI6WyJhbGwiXSwiaWF0IjoxNzIwNzAzMzUwLCJleHAiOjE3MzYyNTUzNTB9.54BixLxBCBiLTH-DvQgWhgbcvxEe1qk42346fQHj7kA"
        },
        "params": {},
        "elasticityMultiplier": 1,
        "extras": {
          "ids": {
            "trip": {},
            "driver": {}
          },
          "_sample": 16237,
          "_appVersion": "24.0.1"
        },
        "batchSync": true,
        "backgroundPermissionRationale": {
          "negativeAction": "",
          "positiveAction": "Change to Allow all the time",
          "message": "In order to analyze your driving so YOU earn money, please enable 'Allow all the time' permission",
          "title": "Allow access to this device's location in the background?"
        },
        "maxRecordsToPersist": -1,
        "activityRecognitionInterval": 10000,
        "stopTimeout": 5,
        "autoSyncThreshold": 20,
        "locationsOrderDirection": "ASC",
        "allowIdenticalLocations": false,
        "autoSync": true,
        "logLevel": 5,
        "authorization": {}
      },
      "backgroundGeolocationSensors": {
        "significant_motion": true,
        "gyroscope": true,
        "magnetometer": true,
        "accelerometer": true,
        "platform": "android"
      },
      "backgroundGeolocationSensorPermissions": {
        "accelerometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "gyroscope": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "magnetometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        }
      }
    },
    {
      "timestamp": 1720703530025,
      "appVersion": "24.0.1",
      "buildNumber": "358",
      "updateNumber": "011ad75a-f38b-45f9-80be-d5bf9d7f7f7f",
      "userId": "668fd976061a2195a800b200",
      "userEmail": "isa.avar73@gmail.com",
      "userFirstName": "Isa",
      "userLastName": "Avar",
      "userPhone": "+17372176917",
      "userAddress": "Austin, TX 78741",
      "userVehicle": {
        "make": "Toyota",
        "model": "Prius ",
        "year": "2010",
        "color": "Silver/Gray",
        "licensePlate": ""
      },
      "userSelfTags": {},
      "campaignId": null,
      "campaignName": null,
      "deviceInfo": {
        "version": "14",
        "framework": "react-native",
        "model": "Pixel 8 Pro",
        "platform": "Android",
        "manufacturer": "Google"
      },
      "isOnboarded": false,
      "isLoggedIn": true,
      "activeTrip": null,
      "location": null,
      "activity": null,
      "isBackgroundTrackingEnabled": false,
      "backgroundLocationPermissionGranted": false,
      "backgroundGeolocationProviderState": {
        "status": 2,
        "accuracyAuthorization": 0,
        "airplane": false,
        "gps": true,
        "enabled": true,
        "network": true
      },
      "backgroundGeolocationState": {
        "didDeviceReboot": false,
        "didLaunchInBackground": false,
        "odometer": 0,
        "trackingMode": 1,
        "triggerActivities": "in_vehicle, on_bicycle, on_foot, running, walking",
        "stopOnStationary": false,
        "enabled": false,
        "stopAfterElapsedMinutes": 0,
        "stationaryRadius": 25,
        "startOnBoot": true,
        "scheduleUseAlarmManager": false,
        "schedule": [],
        "persistMode": 2,
        "persist": true,
        "notification": {
          "strings": {},
          "sticky": false,
          "largeIcon": "",
          "layout": "",
          "channelId": "",
          "color": "",
          "smallIcon": "",
          "text": "Drive safe!",
          "priority": -1,
          "channelName": "TSLocationManager",
          "actions": [],
          "title": "Carvertise Tracking Enabled"
        },
        "motionTriggerDelay": 0,
        "foregroundService": true,
        "method": "POST",
        "maxMonitoredGeofences": 97,
        "geofenceTemplate": "",
        "locationAuthorizationRequest": "Always",
        "locationUpdateInterval": 1000,
        "locationTemplate": "{\"location\":{\"time\":\"<%= timestamp %>\",\"coords\":{\"type\":\"Point\",\"coordinates\":[<%= longitude %>,<%= latitude %>]}},\"meta\":{\"activity\":{\"type\":\"<%= activity.type %>\",\"confidence\":\"<%= activity.confidence %>\"},\"uuid\":\"<%= uuid %>\"}}",
        "isMoving": false,
        "disableLocationAuthorizationAlert": false,
        "httpRootProperty": ".",
        "maxDaysToPersist": 3,
        "httpTimeout": 60000,
        "geofenceProximityRadius": 1000,
        "geofenceModeHighAccuracy": false,
        "fastestLocationUpdateInterval": -1,
        "enableTimestampMeta": false,
        "headlessJobService": "com.transistorsoft.rnbackgroundgeolocation.HeadlessTask",
        "distanceFilter": 10,
        "disableStopDetection": false,
        "disableProviderChangeRecord": false,
        "url": "https://api.carvertise.com/api/1/private/gps",
        "maxBatchSize": 30,
        "isFirstBoot": true,
        "disableElasticity": false,
        "logMaxDays": 3,
        "useSignificantChangesOnly": false,
        "heartbeatInterval": 60,
        "disableMotionActivityUpdates": false,
        "speedJumpFilter": 300,
        "debug": false,
        "disableAutoSyncOnCellular": false,
        "desiredAccuracy": -1,
        "minimumActivityRecognitionConfidence": 75,
        "locationTimeout": 60,
        "schedulerEnabled": false,
        "enableHeadless": true,
        "geofenceInitialTriggerEntry": true,
        "configUrl": "",
        "deferTime": 0,
        "stopOnTerminate": false,
        "desiredOdometerAccuracy": 100,
        "headers": {
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOnsiZ3BzIjoiYWxsIn0sInJlYWQiOnt9LCJ1cGRhdGUiOnt9LCJkZWxldGUiOnt9fSwidXNlcm5hbWUiOiJpc2EuYXZhcjczQGdtYWlsLmNvbSIsImVudiI6WyJhbGwiXSwiaWF0IjoxNzIwNzAzMzUwLCJleHAiOjE3MzYyNTUzNTB9.54BixLxBCBiLTH-DvQgWhgbcvxEe1qk42346fQHj7kA"
        },
        "params": {},
        "elasticityMultiplier": 1,
        "extras": {
          "ids": {
            "trip": {},
            "driver": {}
          },
          "_sample": 16237,
          "_appVersion": "24.0.1"
        },
        "batchSync": true,
        "backgroundPermissionRationale": {
          "negativeAction": "",
          "positiveAction": "Change to Allow all the time",
          "message": "In order to analyze your driving so YOU earn money, please enable 'Allow all the time' permission",
          "title": "Allow access to this device's location in the background?"
        },
        "maxRecordsToPersist": -1,
        "activityRecognitionInterval": 10000,
        "stopTimeout": 5,
        "autoSyncThreshold": 20,
        "locationsOrderDirection": "ASC",
        "allowIdenticalLocations": false,
        "autoSync": true,
        "logLevel": 5,
        "authorization": {}
      },
      "backgroundGeolocationSensors": {
        "significant_motion": true,
        "gyroscope": true,
        "magnetometer": true,
        "accelerometer": true,
        "platform": "android"
      },
      "backgroundGeolocationSensorPermissions": {
        "accelerometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "gyroscope": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "magnetometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        }
      }
    },
    {
      "timestamp": 1720703534205,
      "appVersion": "24.0.1",
      "buildNumber": "358",
      "updateNumber": "011ad75a-f38b-45f9-80be-d5bf9d7f7f7f",
      "userId": "668fd976061a2195a800b200",
      "userEmail": "isa.avar73@gmail.com",
      "userFirstName": "Isa",
      "userLastName": "Avar",
      "userPhone": "+17372176917",
      "userAddress": "Austin, TX 78741",
      "userVehicle": {
        "make": "Toyota",
        "model": "Prius ",
        "year": "2010",
        "color": "Silver/Gray",
        "licensePlate": ""
      },
      "userSelfTags": {
        "uber": true
      },
      "campaignId": null,
      "campaignName": null,
      "deviceInfo": {
        "version": "14",
        "framework": "react-native",
        "model": "Pixel 8 Pro",
        "platform": "Android",
        "manufacturer": "Google"
      },
      "isOnboarded": false,
      "isLoggedIn": true,
      "activeTrip": null,
      "location": null,
      "activity": null,
      "isBackgroundTrackingEnabled": false,
      "backgroundLocationPermissionGranted": false,
      "backgroundGeolocationProviderState": {
        "status": 2,
        "accuracyAuthorization": 0,
        "airplane": false,
        "gps": true,
        "enabled": true,
        "network": true
      },
      "backgroundGeolocationState": {
        "didDeviceReboot": false,
        "didLaunchInBackground": false,
        "odometer": 0,
        "trackingMode": 1,
        "triggerActivities": "in_vehicle, on_bicycle, on_foot, running, walking",
        "stopOnStationary": false,
        "enabled": false,
        "stopAfterElapsedMinutes": 0,
        "stationaryRadius": 25,
        "startOnBoot": true,
        "scheduleUseAlarmManager": false,
        "schedule": [],
        "persistMode": 2,
        "persist": true,
        "notification": {
          "strings": {},
          "sticky": false,
          "largeIcon": "",
          "layout": "",
          "channelId": "",
          "color": "",
          "smallIcon": "",
          "text": "Drive safe!",
          "priority": -1,
          "channelName": "TSLocationManager",
          "actions": [],
          "title": "Carvertise Tracking Enabled"
        },
        "motionTriggerDelay": 0,
        "foregroundService": true,
        "method": "POST",
        "maxMonitoredGeofences": 97,
        "geofenceTemplate": "",
        "locationAuthorizationRequest": "Always",
        "locationUpdateInterval": 1000,
        "locationTemplate": "{\"location\":{\"time\":\"<%= timestamp %>\",\"coords\":{\"type\":\"Point\",\"coordinates\":[<%= longitude %>,<%= latitude %>]}},\"meta\":{\"activity\":{\"type\":\"<%= activity.type %>\",\"confidence\":\"<%= activity.confidence %>\"},\"uuid\":\"<%= uuid %>\"}}",
        "isMoving": false,
        "disableLocationAuthorizationAlert": false,
        "httpRootProperty": ".",
        "maxDaysToPersist": 3,
        "httpTimeout": 60000,
        "geofenceProximityRadius": 1000,
        "geofenceModeHighAccuracy": false,
        "fastestLocationUpdateInterval": -1,
        "enableTimestampMeta": false,
        "headlessJobService": "com.transistorsoft.rnbackgroundgeolocation.HeadlessTask",
        "distanceFilter": 10,
        "disableStopDetection": false,
        "disableProviderChangeRecord": false,
        "url": "https://api.carvertise.com/api/1/private/gps",
        "maxBatchSize": 30,
        "isFirstBoot": true,
        "disableElasticity": false,
        "logMaxDays": 3,
        "useSignificantChangesOnly": false,
        "heartbeatInterval": 60,
        "disableMotionActivityUpdates": false,
        "speedJumpFilter": 300,
        "debug": false,
        "disableAutoSyncOnCellular": false,
        "desiredAccuracy": -1,
        "minimumActivityRecognitionConfidence": 75,
        "locationTimeout": 60,
        "schedulerEnabled": false,
        "enableHeadless": true,
        "geofenceInitialTriggerEntry": true,
        "configUrl": "",
        "deferTime": 0,
        "stopOnTerminate": false,
        "desiredOdometerAccuracy": 100,
        "headers": {
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOnsiZ3BzIjoiYWxsIn0sInJlYWQiOnt9LCJ1cGRhdGUiOnt9LCJkZWxldGUiOnt9fSwidXNlcm5hbWUiOiJpc2EuYXZhcjczQGdtYWlsLmNvbSIsImVudiI6WyJhbGwiXSwiaWF0IjoxNzIwNzAzMzUwLCJleHAiOjE3MzYyNTUzNTB9.54BixLxBCBiLTH-DvQgWhgbcvxEe1qk42346fQHj7kA"
        },
        "params": {},
        "elasticityMultiplier": 1,
        "extras": {
          "ids": {
            "trip": {},
            "driver": {}
          },
          "_sample": 16237,
          "_appVersion": "24.0.1"
        },
        "batchSync": true,
        "backgroundPermissionRationale": {
          "negativeAction": "",
          "positiveAction": "Change to Allow all the time",
          "message": "In order to analyze your driving so YOU earn money, please enable 'Allow all the time' permission",
          "title": "Allow access to this device's location in the background?"
        },
        "maxRecordsToPersist": -1,
        "activityRecognitionInterval": 10000,
        "stopTimeout": 5,
        "autoSyncThreshold": 20,
        "locationsOrderDirection": "ASC",
        "allowIdenticalLocations": false,
        "autoSync": true,
        "logLevel": 5,
        "authorization": {}
      },
      "backgroundGeolocationSensors": {
        "significant_motion": true,
        "gyroscope": true,
        "magnetometer": true,
        "accelerometer": true,
        "platform": "android"
      },
      "backgroundGeolocationSensorPermissions": {
        "accelerometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "gyroscope": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "magnetometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        }
      }
    },
    {
      "timestamp": 1720703544662,
      "appVersion": "24.0.1",
      "buildNumber": "358",
      "updateNumber": "011ad75a-f38b-45f9-80be-d5bf9d7f7f7f",
      "userId": "668fd976061a2195a800b200",
      "userEmail": "isa.avar73@gmail.com",
      "userFirstName": "Isa",
      "userLastName": "Avar",
      "userPhone": "+17372176917",
      "userAddress": "Austin, TX 78741",
      "userVehicle": {
        "make": "Toyota",
        "model": "Prius ",
        "year": "2010",
        "color": "Silver/Gray",
        "licensePlate": ""
      },
      "userSelfTags": {
        "uber": true
      },
      "campaignId": null,
      "campaignName": null,
      "deviceInfo": {
        "version": "14",
        "framework": "react-native",
        "model": "Pixel 8 Pro",
        "platform": "Android",
        "manufacturer": "Google"
      },
      "isOnboarded": false,
      "isLoggedIn": true,
      "activeTrip": null,
      "location": null,
      "activity": null,
      "isBackgroundTrackingEnabled": false,
      "backgroundLocationPermissionGranted": false,
      "backgroundGeolocationProviderState": {
        "status": 4,
        "accuracyAuthorization": 0,
        "airplane": false,
        "gps": true,
        "enabled": true,
        "network": true
      },
      "backgroundGeolocationState": {
        "didDeviceReboot": false,
        "didLaunchInBackground": false,
        "odometer": 0,
        "trackingMode": 1,
        "triggerActivities": "in_vehicle, on_bicycle, on_foot, running, walking",
        "stopOnStationary": false,
        "enabled": false,
        "stopAfterElapsedMinutes": 0,
        "stationaryRadius": 25,
        "startOnBoot": true,
        "scheduleUseAlarmManager": false,
        "schedule": [],
        "persistMode": 2,
        "persist": true,
        "notification": {
          "strings": {},
          "sticky": false,
          "largeIcon": "",
          "layout": "",
          "channelId": "",
          "color": "",
          "smallIcon": "",
          "text": "Drive safe!",
          "priority": -1,
          "channelName": "TSLocationManager",
          "actions": [],
          "title": "Carvertise Tracking Enabled"
        },
        "motionTriggerDelay": 0,
        "foregroundService": true,
        "method": "POST",
        "maxMonitoredGeofences": 97,
        "geofenceTemplate": "",
        "locationAuthorizationRequest": "Always",
        "locationUpdateInterval": 1000,
        "locationTemplate": "{\"location\":{\"time\":\"<%= timestamp %>\",\"coords\":{\"type\":\"Point\",\"coordinates\":[<%= longitude %>,<%= latitude %>]}},\"meta\":{\"activity\":{\"type\":\"<%= activity.type %>\",\"confidence\":\"<%= activity.confidence %>\"},\"uuid\":\"<%= uuid %>\"}}",
        "isMoving": false,
        "disableLocationAuthorizationAlert": false,
        "httpRootProperty": ".",
        "maxDaysToPersist": 3,
        "httpTimeout": 60000,
        "geofenceProximityRadius": 1000,
        "geofenceModeHighAccuracy": false,
        "fastestLocationUpdateInterval": -1,
        "enableTimestampMeta": false,
        "headlessJobService": "com.transistorsoft.rnbackgroundgeolocation.HeadlessTask",
        "distanceFilter": 10,
        "disableStopDetection": false,
        "disableProviderChangeRecord": false,
        "url": "https://api.carvertise.com/api/1/private/gps",
        "maxBatchSize": 30,
        "isFirstBoot": true,
        "disableElasticity": false,
        "logMaxDays": 3,
        "useSignificantChangesOnly": false,
        "heartbeatInterval": 60,
        "disableMotionActivityUpdates": false,
        "speedJumpFilter": 300,
        "debug": false,
        "disableAutoSyncOnCellular": false,
        "desiredAccuracy": -1,
        "minimumActivityRecognitionConfidence": 75,
        "locationTimeout": 60,
        "schedulerEnabled": false,
        "enableHeadless": true,
        "geofenceInitialTriggerEntry": true,
        "configUrl": "",
        "deferTime": 0,
        "stopOnTerminate": false,
        "desiredOdometerAccuracy": 100,
        "headers": {
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOnsiZ3BzIjoiYWxsIn0sInJlYWQiOnt9LCJ1cGRhdGUiOnt9LCJkZWxldGUiOnt9fSwidXNlcm5hbWUiOiJpc2EuYXZhcjczQGdtYWlsLmNvbSIsImVudiI6WyJhbGwiXSwiaWF0IjoxNzIwNzAzMzUwLCJleHAiOjE3MzYyNTUzNTB9.54BixLxBCBiLTH-DvQgWhgbcvxEe1qk42346fQHj7kA"
        },
        "params": {},
        "elasticityMultiplier": 1,
        "extras": {
          "ids": {
            "trip": {},
            "driver": {}
          },
          "_sample": 16237,
          "_appVersion": "24.0.1"
        },
        "batchSync": true,
        "backgroundPermissionRationale": {
          "negativeAction": "",
          "positiveAction": "Change to Allow all the time",
          "message": "In order to analyze your driving so YOU earn money, please enable 'Allow all the time' permission",
          "title": "Allow access to this device's location in the background?"
        },
        "maxRecordsToPersist": -1,
        "activityRecognitionInterval": 10000,
        "stopTimeout": 5,
        "autoSyncThreshold": 20,
        "locationsOrderDirection": "ASC",
        "allowIdenticalLocations": false,
        "autoSync": true,
        "logLevel": 5,
        "authorization": {}
      },
      "backgroundGeolocationSensors": {
        "significant_motion": true,
        "gyroscope": true,
        "magnetometer": true,
        "accelerometer": true,
        "platform": "android"
      },
      "backgroundGeolocationSensorPermissions": {
        "accelerometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "gyroscope": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "magnetometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        }
      }
    },
    {
      "timestamp": 1720703550341,
      "appVersion": "24.0.1",
      "buildNumber": "358",
      "updateNumber": "011ad75a-f38b-45f9-80be-d5bf9d7f7f7f",
      "userId": "668fd976061a2195a800b200",
      "userEmail": "isa.avar73@gmail.com",
      "userFirstName": "Isa",
      "userLastName": "Avar",
      "userPhone": "+17372176917",
      "userAddress": "Austin, TX 78741",
      "userVehicle": {
        "make": "Toyota",
        "model": "Prius ",
        "year": "2010",
        "color": "Silver/Gray",
        "licensePlate": ""
      },
      "userSelfTags": {
        "uber": true
      },
      "campaignId": null,
      "campaignName": null,
      "deviceInfo": {
        "version": "14",
        "framework": "react-native",
        "model": "Pixel 8 Pro",
        "platform": "Android",
        "manufacturer": "Google"
      },
      "isOnboarded": false,
      "isLoggedIn": true,
      "activeTrip": null,
      "location": null,
      "activity": null,
      "isBackgroundTrackingEnabled": true,
      "backgroundLocationPermissionGranted": true,
      "backgroundGeolocationProviderState": {
        "status": 3,
        "accuracyAuthorization": 0,
        "airplane": false,
        "gps": true,
        "enabled": true,
        "network": true
      },
      "backgroundGeolocationState": {
        "didDeviceReboot": false,
        "didLaunchInBackground": false,
        "odometer": 0,
        "trackingMode": 1,
        "triggerActivities": "in_vehicle, on_bicycle, on_foot, running, walking",
        "stopOnStationary": false,
        "enabled": false,
        "stopAfterElapsedMinutes": 0,
        "stationaryRadius": 25,
        "startOnBoot": true,
        "scheduleUseAlarmManager": false,
        "schedule": [],
        "persistMode": 2,
        "persist": true,
        "notification": {
          "strings": {},
          "sticky": false,
          "largeIcon": "",
          "layout": "",
          "channelId": "",
          "color": "",
          "smallIcon": "",
          "text": "Drive safe!",
          "priority": -1,
          "channelName": "TSLocationManager",
          "actions": [],
          "title": "Carvertise Tracking Enabled"
        },
        "motionTriggerDelay": 0,
        "foregroundService": true,
        "method": "POST",
        "maxMonitoredGeofences": 97,
        "geofenceTemplate": "",
        "locationAuthorizationRequest": "Always",
        "locationUpdateInterval": 1000,
        "locationTemplate": "{\"location\":{\"time\":\"<%= timestamp %>\",\"coords\":{\"type\":\"Point\",\"coordinates\":[<%= longitude %>,<%= latitude %>]}},\"meta\":{\"activity\":{\"type\":\"<%= activity.type %>\",\"confidence\":\"<%= activity.confidence %>\"},\"uuid\":\"<%= uuid %>\"}}",
        "isMoving": false,
        "disableLocationAuthorizationAlert": false,
        "httpRootProperty": ".",
        "maxDaysToPersist": 3,
        "httpTimeout": 60000,
        "geofenceProximityRadius": 1000,
        "geofenceModeHighAccuracy": false,
        "fastestLocationUpdateInterval": -1,
        "enableTimestampMeta": false,
        "headlessJobService": "com.transistorsoft.rnbackgroundgeolocation.HeadlessTask",
        "distanceFilter": 10,
        "disableStopDetection": false,
        "disableProviderChangeRecord": false,
        "url": "https://api.carvertise.com/api/1/private/gps",
        "maxBatchSize": 30,
        "isFirstBoot": true,
        "disableElasticity": false,
        "logMaxDays": 3,
        "useSignificantChangesOnly": false,
        "heartbeatInterval": 60,
        "disableMotionActivityUpdates": false,
        "speedJumpFilter": 300,
        "debug": false,
        "disableAutoSyncOnCellular": false,
        "desiredAccuracy": -1,
        "minimumActivityRecognitionConfidence": 75,
        "locationTimeout": 60,
        "schedulerEnabled": false,
        "enableHeadless": true,
        "geofenceInitialTriggerEntry": true,
        "configUrl": "",
        "deferTime": 0,
        "stopOnTerminate": false,
        "desiredOdometerAccuracy": 100,
        "headers": {
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOnsiZ3BzIjoiYWxsIn0sInJlYWQiOnt9LCJ1cGRhdGUiOnt9LCJkZWxldGUiOnt9fSwidXNlcm5hbWUiOiJpc2EuYXZhcjczQGdtYWlsLmNvbSIsImVudiI6WyJhbGwiXSwiaWF0IjoxNzIwNzAzMzUwLCJleHAiOjE3MzYyNTUzNTB9.54BixLxBCBiLTH-DvQgWhgbcvxEe1qk42346fQHj7kA"
        },
        "params": {},
        "elasticityMultiplier": 1,
        "extras": {
          "ids": {
            "trip": {},
            "driver": {}
          },
          "_sample": 16237,
          "_appVersion": "24.0.1"
        },
        "batchSync": true,
        "backgroundPermissionRationale": {
          "negativeAction": "",
          "positiveAction": "Change to Allow all the time",
          "message": "In order to analyze your driving so YOU earn money, please enable 'Allow all the time' permission",
          "title": "Allow access to this device's location in the background?"
        },
        "maxRecordsToPersist": -1,
        "activityRecognitionInterval": 10000,
        "stopTimeout": 5,
        "autoSyncThreshold": 20,
        "locationsOrderDirection": "ASC",
        "allowIdenticalLocations": false,
        "autoSync": true,
        "logLevel": 5,
        "authorization": {}
      },
      "backgroundGeolocationSensors": {
        "significant_motion": true,
        "gyroscope": true,
        "magnetometer": true,
        "accelerometer": true,
        "platform": "android"
      },
      "backgroundGeolocationSensorPermissions": {
        "accelerometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "gyroscope": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "magnetometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        }
      }
    },
    {
      "timestamp": 1720703551930,
      "appVersion": "24.0.1",
      "buildNumber": "358",
      "updateNumber": "011ad75a-f38b-45f9-80be-d5bf9d7f7f7f",
      "userId": "668fd976061a2195a800b200",
      "userEmail": "isa.avar73@gmail.com",
      "userFirstName": "Isa",
      "userLastName": "Avar",
      "userPhone": "+17372176917",
      "userAddress": "Austin, TX 78741",
      "userVehicle": {
        "make": "Toyota",
        "model": "Prius ",
        "year": "2010",
        "color": "Silver/Gray",
        "licensePlate": ""
      },
      "userSelfTags": {
        "uber": true
      },
      "campaignId": null,
      "campaignName": null,
      "deviceInfo": {
        "version": "14",
        "framework": "react-native",
        "model": "Pixel 8 Pro",
        "platform": "Android",
        "manufacturer": "Google"
      },
      "isOnboarded": true,
      "isLoggedIn": true,
      "activeTrip": null,
      "location": null,
      "activity": null,
      "isBackgroundTrackingEnabled": true,
      "backgroundLocationPermissionGranted": true,
      "backgroundGeolocationProviderState": {
        "status": 3,
        "accuracyAuthorization": 0,
        "airplane": false,
        "gps": true,
        "enabled": true,
        "network": true
      },
      "backgroundGeolocationState": {
        "didDeviceReboot": false,
        "didLaunchInBackground": false,
        "odometer": 0,
        "trackingMode": 1,
        "triggerActivities": "in_vehicle, on_bicycle, on_foot, running, walking",
        "stopOnStationary": false,
        "enabled": true,
        "stopAfterElapsedMinutes": 0,
        "stationaryRadius": 25,
        "startOnBoot": true,
        "scheduleUseAlarmManager": false,
        "schedule": [],
        "persistMode": 2,
        "persist": true,
        "notification": {
          "strings": {},
          "sticky": false,
          "largeIcon": "",
          "layout": "",
          "channelId": "",
          "color": "",
          "smallIcon": "",
          "text": "Drive safe!",
          "priority": -1,
          "channelName": "TSLocationManager",
          "actions": [],
          "title": "Carvertise Tracking Enabled"
        },
        "motionTriggerDelay": 0,
        "foregroundService": true,
        "method": "POST",
        "maxMonitoredGeofences": 97,
        "geofenceTemplate": "",
        "locationAuthorizationRequest": "Always",
        "locationUpdateInterval": 1000,
        "locationTemplate": "{\"location\":{\"time\":\"<%= timestamp %>\",\"coords\":{\"type\":\"Point\",\"coordinates\":[<%= longitude %>,<%= latitude %>]}},\"meta\":{\"activity\":{\"type\":\"<%= activity.type %>\",\"confidence\":\"<%= activity.confidence %>\"},\"uuid\":\"<%= uuid %>\"}}",
        "isMoving": false,
        "disableLocationAuthorizationAlert": false,
        "httpRootProperty": ".",
        "maxDaysToPersist": 3,
        "httpTimeout": 60000,
        "geofenceProximityRadius": 1000,
        "geofenceModeHighAccuracy": false,
        "fastestLocationUpdateInterval": -1,
        "enableTimestampMeta": false,
        "headlessJobService": "com.transistorsoft.rnbackgroundgeolocation.HeadlessTask",
        "distanceFilter": 10,
        "disableStopDetection": false,
        "disableProviderChangeRecord": false,
        "url": "https://api.carvertise.com/api/1/private/gps",
        "maxBatchSize": 30,
        "isFirstBoot": true,
        "disableElasticity": false,
        "logMaxDays": 3,
        "useSignificantChangesOnly": false,
        "heartbeatInterval": 60,
        "disableMotionActivityUpdates": false,
        "speedJumpFilter": 300,
        "debug": false,
        "disableAutoSyncOnCellular": false,
        "desiredAccuracy": -1,
        "minimumActivityRecognitionConfidence": 75,
        "locationTimeout": 60,
        "schedulerEnabled": false,
        "enableHeadless": true,
        "geofenceInitialTriggerEntry": true,
        "configUrl": "",
        "deferTime": 0,
        "stopOnTerminate": false,
        "desiredOdometerAccuracy": 100,
        "headers": {
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOnsiZ3BzIjoiYWxsIn0sInJlYWQiOnt9LCJ1cGRhdGUiOnt9LCJkZWxldGUiOnt9fSwidXNlcm5hbWUiOiJpc2EuYXZhcjczQGdtYWlsLmNvbSIsImVudiI6WyJhbGwiXSwiaWF0IjoxNzIwNzAzMzUwLCJleHAiOjE3MzYyNTUzNTB9.54BixLxBCBiLTH-DvQgWhgbcvxEe1qk42346fQHj7kA"
        },
        "params": {},
        "elasticityMultiplier": 1,
        "extras": {
          "ids": {
            "trip": {},
            "driver": {}
          },
          "_sample": 16237,
          "_appVersion": "24.0.1"
        },
        "batchSync": true,
        "backgroundPermissionRationale": {
          "negativeAction": "",
          "positiveAction": "Change to Allow all the time",
          "message": "In order to analyze your driving so YOU earn money, please enable 'Allow all the time' permission",
          "title": "Allow access to this device's location in the background?"
        },
        "maxRecordsToPersist": -1,
        "activityRecognitionInterval": 10000,
        "stopTimeout": 5,
        "autoSyncThreshold": 20,
        "locationsOrderDirection": "ASC",
        "allowIdenticalLocations": false,
        "autoSync": true,
        "logLevel": 5,
        "authorization": {}
      },
      "backgroundGeolocationSensors": {
        "significant_motion": true,
        "gyroscope": true,
        "magnetometer": true,
        "accelerometer": true,
        "platform": "android"
      },
      "backgroundGeolocationSensorPermissions": {
        "accelerometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "gyroscope": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "magnetometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        }
      }
    },
    {
      "timestamp": 1720703628635,
      "appVersion": "24.0.1",
      "buildNumber": "358",
      "updateNumber": "011ad75a-f38b-45f9-80be-d5bf9d7f7f7f",
      "userId": "668fd976061a2195a800b200",
      "userEmail": "isa.avar73@gmail.com",
      "userFirstName": "Isa",
      "userLastName": "Avar",
      "userPhone": "+17372176917",
      "userAddress": "Austin, TX 78741",
      "userVehicle": {
        "make": "Toyota",
        "model": "Prius ",
        "year": "2010",
        "color": "Silver/Gray",
        "licensePlate": ""
      },
      "userSelfTags": {
        "uber": true
      },
      "campaignId": null,
      "campaignName": null,
      "deviceInfo": {
        "version": "14",
        "framework": "react-native",
        "model": "Pixel 8 Pro",
        "platform": "Android",
        "manufacturer": "Google"
      },
      "isOnboarded": true,
      "isLoggedIn": true,
      "activeTrip": null,
      "location": {
        "lat": 30.2646666,
        "lng": -97.7434425
      },
      "activity": {
        "confidence": 100,
        "type": "still"
      },
      "isBackgroundTrackingEnabled": true,
      "backgroundLocationPermissionGranted": true,
      "backgroundGeolocationProviderState": {
        "status": 3,
        "accuracyAuthorization": 0,
        "airplane": false,
        "gps": true,
        "enabled": true,
        "network": true
      },
      "backgroundGeolocationState": {
        "didDeviceReboot": false,
        "didLaunchInBackground": false,
        "odometer": 0,
        "trackingMode": 1,
        "triggerActivities": "in_vehicle, on_bicycle, on_foot, running, walking",
        "stopOnStationary": false,
        "enabled": true,
        "stopAfterElapsedMinutes": 0,
        "stationaryRadius": 25,
        "startOnBoot": true,
        "scheduleUseAlarmManager": false,
        "schedule": [],
        "persistMode": 2,
        "persist": true,
        "notification": {
          "strings": {},
          "sticky": false,
          "largeIcon": "",
          "layout": "",
          "channelId": "",
          "color": "",
          "smallIcon": "",
          "text": "Drive safe!",
          "priority": -1,
          "channelName": "TSLocationManager",
          "actions": [],
          "title": "Carvertise Tracking Enabled"
        },
        "motionTriggerDelay": 0,
        "foregroundService": true,
        "method": "POST",
        "maxMonitoredGeofences": 97,
        "geofenceTemplate": "",
        "locationAuthorizationRequest": "Always",
        "locationUpdateInterval": 1000,
        "locationTemplate": "{\"location\":{\"time\":\"<%= timestamp %>\",\"coords\":{\"type\":\"Point\",\"coordinates\":[<%= longitude %>,<%= latitude %>]}},\"meta\":{\"activity\":{\"type\":\"<%= activity.type %>\",\"confidence\":\"<%= activity.confidence %>\"},\"uuid\":\"<%= uuid %>\"}}",
        "isMoving": false,
        "disableLocationAuthorizationAlert": false,
        "httpRootProperty": ".",
        "maxDaysToPersist": 3,
        "httpTimeout": 60000,
        "geofenceProximityRadius": 1000,
        "geofenceModeHighAccuracy": false,
        "fastestLocationUpdateInterval": -1,
        "enableTimestampMeta": false,
        "headlessJobService": "com.transistorsoft.rnbackgroundgeolocation.HeadlessTask",
        "distanceFilter": 10,
        "disableStopDetection": false,
        "disableProviderChangeRecord": false,
        "url": "https://api.carvertise.com/api/1/private/gps",
        "maxBatchSize": 30,
        "isFirstBoot": false,
        "disableElasticity": false,
        "logMaxDays": 3,
        "useSignificantChangesOnly": false,
        "heartbeatInterval": 60,
        "disableMotionActivityUpdates": false,
        "speedJumpFilter": 300,
        "debug": false,
        "disableAutoSyncOnCellular": false,
        "desiredAccuracy": -1,
        "minimumActivityRecognitionConfidence": 75,
        "locationTimeout": 60,
        "schedulerEnabled": false,
        "enableHeadless": true,
        "geofenceInitialTriggerEntry": true,
        "configUrl": "",
        "deferTime": 0,
        "stopOnTerminate": false,
        "desiredOdometerAccuracy": 100,
        "headers": {
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOnsiZ3BzIjoiYWxsIn0sInJlYWQiOnt9LCJ1cGRhdGUiOnt9LCJkZWxldGUiOnt9fSwidXNlcm5hbWUiOiJpc2EuYXZhcjczQGdtYWlsLmNvbSIsImVudiI6WyJhbGwiXSwiaWF0IjoxNzIwNzAzMzUwLCJleHAiOjE3MzYyNTUzNTB9.54BixLxBCBiLTH-DvQgWhgbcvxEe1qk42346fQHj7kA"
        },
        "params": {},
        "elasticityMultiplier": 1,
        "extras": {
          "_appVersion": "24.0.1",
          "_sample": 40418,
          "ids": {
            "trip": {},
            "driver": {
              "value": "isa.avar73@gmail.com",
              "_value": "isa.avar73@gmail.com",
              "_id": "668fd976061a2195a800b200"
            }
          }
        },
        "batchSync": true,
        "backgroundPermissionRationale": {
          "negativeAction": "",
          "positiveAction": "Change to Allow all the time",
          "message": "In order to analyze your driving so YOU earn money, please enable 'Allow all the time' permission",
          "title": "Allow access to this device's location in the background?"
        },
        "maxRecordsToPersist": -1,
        "activityRecognitionInterval": 10000,
        "stopTimeout": 5,
        "autoSyncThreshold": 20,
        "locationsOrderDirection": "ASC",
        "allowIdenticalLocations": false,
        "autoSync": true,
        "logLevel": 5,
        "authorization": {}
      },
      "backgroundGeolocationSensors": {
        "significant_motion": true,
        "gyroscope": true,
        "magnetometer": true,
        "accelerometer": true,
        "platform": "android"
      },
      "backgroundGeolocationSensorPermissions": {
        "accelerometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "gyroscope": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        },
        "magnetometer": {
          "granted": true,
          "expires": "never",
          "canAskAgain": true,
          "status": "granted"
        }
      }
    }
  ],
  "firstName": null,
  "lastName": null,
  "_air": null,
  "_air_lastModified": null,
  "_checks": {
    "instantiation": {
      "$date": "2024-07-11T13:09:13.234Z"
    }
  },
  "_dateSubmitted": null,
  "_db_lastSync": null,
  "_error": {},
  "_saving_linked_fields": null,
  "_special": null,
  "_tipalti": null,
  "campaignState": {},
  "car": {
    "color": "Silver/Gray",
    "make": "Toyota",
    "model": "Prius ",
    "year": 2010
  },
  "driverTags": null,
  "ids": {},
  "location": {
    "rough": "Austin, TX 78741",
    "address": "Austin, TX 78741",
    "city": "Austin",
    "county": "Travis County",
    "state": "TX",
    "country": "US",
    "zipcode": "78741",
    "coords": {
      "type": "Point",
      "coordinates": [
        -97.715057,
        30.231309
      ]
    }
  },
  "notes": null,
  "opsTags": null,
  "preferredLanguage": null,
  "selfTags": [
    "uber"
  ],
  "statistics": {
    "driving": {
      "monthly": [
        {
          "year": 2024,
          "month": "July",
          "month-index": 6,
          "status": "Off Road",
          "campaign": null,
          "daily-driving": [
            {
              "status": "Off Road",
              "day": "Monday",
              "day-index": 1,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Tuesday",
              "day-index": 2,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Wednesday",
              "day-index": 3,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Thursday",
              "day-index": 4,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Friday",
              "day-index": 5,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Saturday",
              "day-index": 6,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Sunday",
              "day-index": 7,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Monday",
              "day-index": 8,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Tuesday",
              "day-index": 9,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Wednesday",
              "day-index": 10,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Thursday",
              "day-index": 11,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            }
          ],
          "tracking": 0,
          "tracking-on-road": 0,
          "raw-distance": 0,
          "raw-on-road-distance": 0,
          "raw-impressions": 0,
          "raw-on-road-impressions": 0,
          "carvertise-driving-method": {
            "method": "driver-estimated",
            "raw": 0,
            "raw-scaled": 0,
            "historical": 0,
            "scaled-average-area": 0,
            "driver-estimated": 1931212.8
          },
          "carvertise-explicit-driving": 0,
          "carvertise-implicit-driving": 1931212.8,
          "carvertise-driving": 1931212.8,
          "carvertise-impressions-method": null,
          "carvertise-impressions": 0
        },
        {
          "year": 2024,
          "month": "June",
          "month-index": 5,
          "status": "Off Road",
          "campaign": null,
          "daily-driving": [
            {
              "status": "Off Road",
              "day": "Saturday",
              "day-index": 1,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Sunday",
              "day-index": 2,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Monday",
              "day-index": 3,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Tuesday",
              "day-index": 4,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Wednesday",
              "day-index": 5,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Thursday",
              "day-index": 6,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Friday",
              "day-index": 7,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Saturday",
              "day-index": 8,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Sunday",
              "day-index": 9,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Monday",
              "day-index": 10,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Tuesday",
              "day-index": 11,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Wednesday",
              "day-index": 12,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Thursday",
              "day-index": 13,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Friday",
              "day-index": 14,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Saturday",
              "day-index": 15,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Sunday",
              "day-index": 16,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Monday",
              "day-index": 17,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Tuesday",
              "day-index": 18,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Wednesday",
              "day-index": 19,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Thursday",
              "day-index": 20,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Friday",
              "day-index": 21,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Saturday",
              "day-index": 22,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Sunday",
              "day-index": 23,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Monday",
              "day-index": 24,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Tuesday",
              "day-index": 25,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Wednesday",
              "day-index": 26,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Thursday",
              "day-index": 27,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Friday",
              "day-index": 28,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Saturday",
              "day-index": 29,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            },
            {
              "status": "Off Road",
              "day": "Sunday",
              "day-index": 30,
              "distance-method": "ekieki_v.1.0",
              "raw-distance": 0,
              "impressions-method": null,
              "raw-impressions": 0
            }
          ],
          "tracking": 0,
          "tracking-on-road": 0,
          "raw-distance": 0,
          "raw-on-road-distance": 0,
          "raw-impressions": 0,
          "raw-on-road-impressions": 0,
          "carvertise-driving-method": {
            "method": "driver-estimated",
            "raw": 0,
            "raw-scaled": 0,
            "historical": 0,
            "scaled-average-area": 0,
            "driver-estimated": 1931212.8
          },
          "carvertise-explicit-driving": 0,
          "carvertise-implicit-driving": 1931212.8,
          "carvertise-driving": 1931212.8,
          "carvertise-impressions-method": null,
          "carvertise-impressions": 0
        }
      ],
      "_monthly-last-checked": {
        "$date": "2024-07-11T13:13:55.747Z"
      }
    },
    "lastChecked": {
      "$date": "2024-07-11T13:23:52.355Z"
    },
    "gps_tracking_carvertise": {
      "most_recent_date": {
        "$date": "1970-01-01T00:00:00.000Z"
      },
      "last24h": false,
      "last48h": false,
      "last72h": false,
      "last7d": false,
      "last30d": false,
      "last6months": false,
      "last12months": false,
      "tracking_percent": [
        {
          "year": 2024,
          "month": 6,
          "percent": 0
        },
        {
          "year": 2024,
          "month": 5,
          "percent": 0
        },
        {
          "year": 2024,
          "month": 4,
          "percent": 0
        },
        {
          "year": 2024,
          "month": 3,
          "percent": 0
        },
        {
          "year": 2024,
          "month": 2,
          "percent": 0
        },
        {
          "year": 2024,
          "month": 1,
          "percent": 0
        },
        {
          "year": 2024,
          "month": 0,
          "percent": 0
        }
      ]
    },
    "gps_tracking_tourmo": {
      "most_recent_date": {
        "$date": "1970-01-01T00:00:00.000Z"
      },
      "last24h": false,
      "last48h": false,
      "last72h": false,
      "last7d": false,
      "last30d": false,
      "last6months": false,
      "last12months": false
    }
  },
  "tags": null,
  "_campaignCount": 0,
  "_campaignCountCheck": {
    "lastCheck": {
      "$date": "2024-07-11T13:10:38.412Z"
    }
  },
  "_geocode-home": {
    "$date": "2024-07-11T13:23:20.399Z"
  }
}
]