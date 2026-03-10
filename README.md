# react-native-custom-components

## Install Package:

### The following shows how to integrate the SDK using NPM:

- To begin, open the terminal with your project directory.
- Execute:

```shell
 npm install react-native-custom-components
```

- This will add components react native framework to your project.

## Add Permissions:

### For Android:

- Add the following permission to your Android Manifest:

```xml
<manifest>
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
</manifest>
```

Or

### Expo Project:

- Add the following permission to your app.json file:

```xml
“android”: {
    “Permission”:[
        “android.permission.ACCESS_FINE_LOCATION”,
        “android.permission.ACCESS_COARSE_LOCATION”
    ]
},
"plugins": [
  [
    "expo-location",
    {
      "locationAlwaysAndWhenInUsePermission": "Enabling this makes it possible to find nearby venues of the components Sample App venue and provide direction to the venue from your current location. Select Always for best performance",
      "isIosBackgroundLocationEnabled": true,
      "isAndroidBackgroundLocationEnabled": false
    }
  ]`
]
```

### For iOS:

### Install Pod:

- On the project source path, open the terminal.
- Use the below command,

```
 pod install
```

this will install the dependencies.

### Permission:

- You need to add “Background modes” capabilities to your project to allow using location service in the background.
- Ensure you have the following entries in your ‘Info.plist’ file,
- ‘NSLocationWhenInUseUsageDescription’: A string describing the usage of requesting location access.
- Add the above permissions on your ‘Info.plist’ file like the following below,

```xml
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>We use the location to provide accurate and relative information for users</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>We use the location to provide accurate and relative information for users</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>We use the location to provide accurate and relative information for users</string>
```

Or

### Expo Project:

- Add the following permission to your app.json file:

```xml
“ios”: {
    "infoPlist": {
        "NSLocationWhenInUseUsageDescription": "We need your location for providing directions to nearby venues.",
        "NSLocationAlwaysUsageDescription": "We need your location for providing directions to nearby venues, even when the app is in the background."
    }
}
```

## 1.Set App Key:

### Purpose:

- This function validates the provided `baseUrl` and `appKey` to configure the client for interaction with the server.

### Parameters:

- `baseUrl (string)`: The base URL of the server that the client should interact with.
  - `Example: "https://api.example.com"`
- `appKey (string)`: The application key required for authenticating the client with the server.
  - `Example: "your-app-key"`

### Return Type:

- The function returns a `Promise<object>` that resolves to an object containing the following properties:
  - `status (boolean)`: Indicates whether the operation was successful.
    - `true`: The client was successfully configured.
    - `false`: There was an error during configuration.
  - `msg (string)`: A message indicating the result of the operation.
    - On success: A predefined success message.
    - On failure: An error message describing the issue.

### Example Usage:

```xml
import { setClientKey } from 'react-native-location-tracks';

const baseUrl = "https://api.example.com";
const appKey = "your-app-key";
const configureClient = async () => {
  try {
    const result = await setClientKey(baseUrl, appKey);
    if (result.status) {
      console.log("Client configured successfully:", result.msg);
    } else {
      console.error("Failed to configure client:", result.msg);
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
};

configureClient();
```

## 2.Initialize Database:

### Purpose:

- Initializes the local database by calling the `initDatabase` function. It logs success or error messages based on the outcome.

### Parameters:

- `None`

### Return Type:

- The function returns a `Promise<object>`, which resolves to an object containing the following properties:
  - `status (boolean)`: Indicates whether the initialization was successful.
    - `true`: The client was validated, and the database was successfully initialized.
    - `false`: There was an error during the initialization process.
  - `msg (string)`: A message indicating the result of the initialization process.
    - On success: A predefined success message.
    - On failure: An error message that explains the issue encountered during initialization.

### Example Usage:

```xml
import { init } from 'react-native-location-tracks';

async function initializeDatabase() {
  try {
    const result = await init();
    if (result.status) {
      console.log("Initialization successful:", result.msg);
    } else {
      console.error("Initialization failed:", result.msg);
    }
  } catch (error) {
    console.error("An error occurred during initialization:", error.message);
  }
}

initializeDatabase();
```

## 3.Check Location Permission:

### Purpose:

- Checks whether the app has the necessary permissions to access location data. It returns the status of the location permissions (e.g., granted, denied, etc.).

### Parameters:

- `None`

### Return Type:

- The function returns a `Promise<object>`, which resolves to an object containing the following properties:
  - `status (boolean)`: Indicates whether the operation was successful.
    - `true`: The location permission status was successfully retrieved.
    - `false`: An error occurred while checking location permission.
  - `msg (string)`: A message indicating the result of the permission check.
    - On success: A predefined success message.
    - On failure: An error message describing the issue encountered during the permission check.
  - `data (optional)`: The location permission status (if the operation is successful). It contains information such as whether permission is:
    - granted
    - denied
    - undetermined
    - unknown

### Example Usage:

```xml
import { checkLocationPermissions } from 'react-native-location-tracks';

async function checkPermission() {
  const result = await checkLocationPermissions();
  if (result.status) {
    console.log('Permission granted:', result.data);
  } else {
    console.log('Error:', result.msg);
  }
}

checkPermission();
```

## 4.Get Current Location:

### Purpose:

- Retrieves the current location of the user, but only proceeds if the client is valid. Optionally, it can store the retrieved location in the database.

### Parameters:

- `storeInDB (boolean)`: A flag that determines whether the location should be stored in the database. Defaults to false.

### Return Type:

- The function returns a `Promise<object>`, which resolves to an object containing the following properties:
  - `status (boolean)`: Indicates whether the operation was successful.
    - `true`: The location was successfully retrieved.
    - `false`: An error occurred while retrieving the location.
  - `msg (string)`: A message indicating the result of the operation.
    - On success: A predefined success message.
    - On failure: An error message explaining the issue encountered during location retrieval.
  - `data (optional)`: The retrieved location data (if the operation is successful), which includes details such as:
    - Contains an object with location details such as latitude, longitude, accuracy, etc.

### Example Usage:

```xml
import { getCurrentLocation } from 'react-native-location-tracks';

async function getLocation() {

  const locationWithDB = await getCurrentLocation(true); // Get current location and store in DB

  const locationWithoutDB = await getCurrentLocation(); // Get current location without storing in DB

  console.log(locationWithDB); // Logs the location object
  console.log(locationWithoutDB); // Logs the location object

}

getLocation();
```

## 5.Get Location In Local DB:

### Purpose:

- Retrieves the user's location data from the local database, but only proceeds if the client is valid.

### Parameters:

- `None`

### Return Type:

- The function returns a `Promise<object>`, which resolves to an object containing the following properties:
  - `status (boolean)`: Indicates whether the operation was successful.
    - `true`: The location data was successfully retrieved from the database.
    - `false`: An error occurred while retrieving location data from the database.
  - `msg (string)`: A message indicating the result of the operation.
    - On success: A predefined success message.
    - On failure: An error message explaining the issue encountered during database retrieval.
  - `data (optional)`: The location data retrieved from the database (if the operation is successful). Contains the stored location data.

### Example Usage:

```xml
import { getLocationInLocalDB } from 'react-native-location-tracks';

async function retrieveLocation() {
  const location = await getLocationInLocalDB();
  if (location.status) {
    console.log("Location retrieved from local DB:", location.data);
  } else {
    console.log("Location not found in local DB.", location.msg);
  }
}

retrieveLocation();
```

## 6.Delete Table In Local DB:

### Purpose:

- Deletes a specified table from the local database. The client must be valid for the deletion to proceed.

### Parameters:

- `tableName (string)`: The name of the table to be deleted.

### Return Type:

- The function returns a `Promise<object>`, which resolves to an object containing the following properties:
  - `status (boolean)`: Indicates whether the operation was successful.
    - `true`: The specified table was successfully deleted from the local database.
    - `false`: An error occurred while deleting the table from the database.
  - `msg (string)`: A message indicating the result of the operation.
    - On success: A predefined success message.
    - On failure: An error message explaining the issue encountered during table deletion.

### Tables:

- location

### Example Usage:

```xml
import { deleteTableInLocalDB } from 'react-native-location-tracks';

async function deleteTable() {
  const result = await deleteTableInLocalDB("location");
    if (result.status) {
        console.log("Table deleted successfully:", result.msg);
    } else {
        console.log("Failed to delete table:", result.msg);
    }
}

deleteTable();
```

## License

[MIT](LICENSE.md)

---
