# ILO Community Energy Allocation App

This is a React Native app built with Expo for managing and allocating community energy resources.

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start the app

```bash
npx expo start
```

3. Choose your platform:

- Android emulator: Press 'a' in terminal or click the Android option in Expo DevTools
- iOS simulator: Press 'i' in terminal or click the iOS option in Expo DevTools
- Physical device: Scan the QR code with Expo Go app (available on Android and iOS)

## Project Structure

This project uses Expo Router with file-based routing. The main code is in the app directory.

## Backend Configuration

The app connects to a backend service. By default, it's configured to use:

`http://10.0.2.2:8081` for Android emulators
`http://localhost:8081` for iOS and web

### Changing the Backend URL

If you need to connect to a different backend server, update the `BASE_URL` in `services/axiosConfig.ts`:

```ts
import axios from "axios";
import { Platform } from "react-native";

// Update these URLs to point to your backend server
const BASE_URL =
  Platform.OS === "android" ? "http://10.0.2.2:8081" : "http://localhost:8081";

// Configure axios defaults
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

// Add request interceptor for authentication
axios.interceptors.request.use(
  (config) => {
    // You can add authentication tokens here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // You can add global error handling here
    return Promise.reject(error);
  }
);

export default axios;
```
