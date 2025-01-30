# Counter App (MVI Architecture with RxJS)

This is a simple counter application that follows the **Model-View-Intent (MVI)** architecture and utilizes **RxJS** for reactive programming. The app features increment, decrement, reset, and auto-increment functionalities.

## Features
- **Increment**: Increase the counter value by 1.
- **Decrement**: Decrease the counter value by 1.
- **Reset**: Reset the counter value to 0.
- **Auto Increment**: Toggle automatic increment at a fixed interval (1 second).
- **Keyboard Controls**: Control the counter with keyboard keys:
  - `+` for increment.
  - `-` for decrement.
  - `0` for reset.

## Architecture Overview

### Model-View-Intent (MVI)
- **Model**: Represents the application's state and business logic. In this app, the `countModel` manages the counter logic, handles actions, and updates the state.
- **View**: The `counterView` is responsible for rendering the UI and displaying the current state (the counter value).
- **Intent**: Represents the user actions that modify the state. In this app, user actions are captured by buttons and keyboard inputs. These actions trigger intents that interact with the model.

### Reactive Programming with RxJS
- RxJS is used to handle asynchronous streams of data and manage side effects, like auto-increment and handling keyboard events.
- The `Subject` objects (`increment$`, `decrement$`, `reset$`, `autoIncrement$`) are used to handle actions and communicate between the components.

## Installation

To run this app locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone [<repository-url>](https://github.com/rahulsharma998/Counter-App-Rx-Framework.git)
Install the dependencies:

npm install

Folder Structure
src/
components/: Contains the UI components, including the counterView.
hooks/: Contains the custom hook (useCounter) for managing the counter logic.
model/: Contains the state management logic, including actions and the createCountModel.
intent/: Contains the keyboard interaction logic in countIntent.
How It Works
View (UI): The counterView component renders the counter and buttons. It is responsible for displaying the current counter value and capturing user actions via buttons.

Intent (User Actions): User interactions (button clicks or keyboard input) trigger intents. The keyboardCount function listens for keyboard events (e.g., +, -, 0), while the buttons in the UI trigger actions when clicked.

Model (State Management): The createCountModel function handles the business logic for updating the counter state based on actions. It uses RxJS's Subject and reactive operators to manage the counter state and trigger updates.

Auto Increment: The auto-increment functionality toggles a state (autoIncrement) that triggers a periodic increment of the counter using RxJS's interval.

Libraries Used
React: For building the UI.
RxJS: For managing the state and handling side effects in a reactive way.
RxJS operators: map, scan, switchMap, startWith, takeWhile, etc., to manage state transitions and handle asynchronous operations.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Future Enhancements
Add persistence to the counter value using local storage or a database.
Add more complex state management and actions, such as undo/redo.
Improve UI with more advanced styles and animations.
