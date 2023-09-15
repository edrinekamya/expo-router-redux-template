# Expo Router + Reduxjs toolkit + Redux-persist

## Overview

This is a starter template for building mobile applications using Expo and React Native. This template is designed to help you kickstart your mobile app development by providing a solid foundation, project structure, and some commonly used features.

## Features

- **Ready-to-Use Configuration:** The template includes pre-configured settings for Expo, Expo Router, Redux Toolkit, and Redux Persist.
- **Theme Support:** Easily customize the appearance of your app with theme support, including light and dark modes.
- **Authentication Handling:** The template provides a starting point for implementing user authentication using Redux and protected routing access with Expo Router.
- **Redux Setup:** Get started with state management using Redux Toolkit and predefined slices for common app state, such as authentication and settings.
- **Responsive UI:** The template includes responsive UI components and theming to create a consistent user experience on various devices.
- **Navigation:** Utilize React Navigation and Expo router for smooth navigation between screens and tabs.
- **Animations:** Elevate your app's user experience with dynamic animations powered by React Native Reanimated.
- **Custom Fonts:** Pre-configured with a selection of fonts to elevate your app's typography effortlessly.

## Usage

To create a new mobile app project using this template as an Expo template, follow these steps:

1. Create a new Expo project based on this template using the following command:

    ```bash
    npx create-expo-app my-new-app --template expo-router-redux-template
    ```

    or

    ```bash
    yarn create expo-app my-new-app --template expo-router-redux-template
    ```

2. Navigate to the project directory:

    ```bash
    cd my-new-app
    ```

3. To launch your app and run it on an emulator, physical device, or web browser, start the Expo development server using one of the following commands:

    - For Android:

        ```bash
        yarn android
        ```

    - For iOS:

        ```bash
        yarn ios
        ```

    - For web development:

        ```bash
        yarn web
        ```

These commands will initiate the Expo development server and allow you to preview and test your app on different platforms.

You can then begin customizing the template to suit your project's requirements. Refer to the project structure and comments in the code for guidance.

## Project Structure

The project structure follows the [Ducks pattern](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-with-single-file-logic) recommended in the Redux documentation, combined with the typical layout for a React Native and Expo Router project. Below is a concise overview of the key directories:

- **`/app`**: Contains layouts and screens (or routes).

- **`/assets`**: Stores static assets such as images and fonts.

- **`/common`**: A collection of common utilities and components that can be reused across your app.

  - **`/hooks`**: Custom React hooks designed specifically for your app.

  - **`/components`**: Generic UI components that are reusable throughout your project.

- **`/constants`**: Houses various constants, including Colors, Fonts etc.

- **`/features`**: Individual features or modules of your application.

  - **`/feature`**: A feature in the app

    - **`featureSlice.ts`**: Holds Redux logic for the feature.

    - **`FeatureComponent.tsx`**: A component related to this feature.

- **`/store`**: Includes redux-related files

  - **`configureStore.ts`**: Responsible for the configuration and setup of your redux store.

  - **`reducer.ts`**: Contains the root reducer.

Feel free to adapt and expand upon this structure as needed to suit the specific requirements of your project.

## Customize and Extend

Feel free to customize and extend this template to build your mobile app. You can add new components, screens, Redux slices, and libraries to suit your project's needs.

Happy coding! 🚀
