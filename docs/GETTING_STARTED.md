![logo](../assets/logo.jpg)

# Getting Started with React Native Development

Welcome to React Native development! This guide will walk you through the process of setting up your environment for React Native app development. Follow these steps to get up and running quickly.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

1. **Node.js and npm**: React Native relies on Node.js and npm. Download and install them from [Node.js official website](https://nodejs.org/).

2. **React Native CLI**: Install the React Native Command Line Interface globally using npm.

   ```bash
   npm install -g react-native-cli
   ```

3. **Java Development Kit (JDK)**: React Native requires Java to build Android applications. Download and install the latest version of JDK from [Oracle JDK website](https://www.oracle.com/java/technologies/javase-downloads.html).

4. **Android Studio or Xcode**: Depending on your target platform, install either Android Studio for Android development or Xcode for iOS development. Follow the instructions on the respective official websites:

   - [Android Studio](https://developer.android.com/studio)
   - [Xcode](https://developer.apple.com/xcode/)

## Setting Up the Development Environment

### Android Development

1. **Configure Android Studio**:

   Open Android Studio and install the required components using the SDK Manager. Make sure to create a virtual device using the AVD Manager.

2. **Environment Variables**:

   Add the Android SDK tools and platform-tools directories to your system's `PATH` variable.

   ```bash
   export PATH=$PATH:/path/to/Android/Sdk/tools:/path/to/Android/Sdk/platform-tools
   ```

### iOS Development

1. **Install Xcode**:

   Install Xcode from the App Store on your macOS machine.

2. **Command Line Tools**:

   Open Xcode, go to Preferences > Locations, and install the Command Line Tools.

## Creating Your First React Native App

Now that your development environment is set up, let's create a new React Native app:

1. Open a terminal and run the following command to create a new React Native project:

   ```bash
   npx react-native init MyFirstApp
   ```

   Replace `MyFirstApp` with your desired app name.

2. Change into the project directory:

   ```bash
   cd MyFirstApp
   ```

3. Start the development server:

   ```bash
   npx react-native start
   ```

4. In a new terminal window, run your app on a connected Android or iOS emulator:

   For Android:

   ```bash
   npx react-native run-android
   ```

   For iOS:

   ```bash
   npx react-native run-ios
   ```

Congratulations! You've successfully set up your React Native development environment and created your first app.

## Next Steps

Explore the [React Native Documentation](https://reactnative.dev/docs/getting-started) for more information and resources on React Native development. Happy coding!

---

Feel free to customize this guide based on your specific requirements or add any additional steps that may be relevant to your development environment setup.