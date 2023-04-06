# Internal_Force_Update_Sample

This is a sample React Native app that integrates with our backend to check for updates. The app uses a single API approach to determine whether the app should have a flexible update, a force update, or no update at all (it's up-to-date).

# Requirements
To run the app, you will need to have the following installed on your machine:

- Node.js (v12.13.0 or later)
- Yarn (v1.19.1 or later)

# Getting Started
- Clone this repository to your local machine.
- Navigate to the project directory in your terminal.
- Install dependencies by running yarn install.
- Start the app by running react-native run-android (for Android) or react-native run-ios (for iOS).


# How it Works
Once the app is launched, it makes a single API call to the backend to check for updates. The response from the backend determines whether the app should have a flexible update, a force update, or no update at all.

- If the response indicates a flexible update is available, the app will prompt the user to update the app but giving them the option to discard and continue using the app
- If the response indicates a force update is available, the app will display a message to the user indicating that they must update the app before they can continue using it and will be blocked from using the app until they upgrade.
- If the response indicates that no update is available, the app will continue to function normally.

# Contributing
This app was created as a proof of concept and is intended to serve as a starting point for future development and can be reused in future projects.
