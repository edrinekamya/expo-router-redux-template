# Expo Router + Reduxjs toolkit + Redux-persist

## Overview

This is a starter template for building mobile applications using Expo and React Native. This template is designed to help you kickstart your mobile app development by providing a solid foundation, project structure, and some commonly used features.

## Features

-   **Ready-to-Use Configuration:** The template includes pre-configured settings for Expo, Expo Router, Redux Toolkit, and Redux Persist.
-   **Theme Support:** Easily customize the appearance of your app with theme support, including light and dark modes.
-   **Authentication Handling:** The template provides a starting point for implementing user authentication using Redux and protected routing access with Expo Router.
-   **Redux Setup:** Get started with state management using Redux Toolkit and predefined slices for common app state, such as authentication and settings.
-   **Responsive UI:** The template includes responsive UI components and theming to create a consistent user experience on various devices.
-   **Navigation:** Utilize React Navigation and Expo router for smooth navigation between screens and tabs.
-   **Animations:** Elevate your app's user experience with dynamic animations powered by React Native Reanimated.
-   **Custom Fonts:** Pre-configured with a selection of fonts to elevate your app's typography effortlessly.

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

The project structure follows a typical React Native and Expo Router project layout, with folders for components, screens, Redux slices, and more. Here's a brief overview:

-   `app`: Contains layouts, and screens or routes for your app.
-   `assets`: Static assets like images and fonts.
-   `components`: Reusable UI components.
-   `constants`: Contains Colors, Dimensions, Fonts, and any other constants.
-   `hooks`: Custom React hooks specific to your app.
-   `redux`: Redux-related files, including reducers, store, and slices.

## Customize and Extend

Feel free to customize and extend this template to build your mobile app. You can add new components, screens, Redux slices, and libraries to suit your project's needs.

Happy coding! 🚀
