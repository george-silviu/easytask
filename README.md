# Easytask

## About

A minimalist task management project built to learn & practice the essential concepts of Angular, that uses modules instead of standalone components.

## Features

- View a user tasks
- Create tasks
- Mark tasks as completed
- Responsive design for mobile and desktop

## Architecture

<img src="/src/images/easytask-module-architecture.png" alt="Easytask Components Structure"/>

The application follows Angular best practices with a modular component structure for maintainability and scalability.

## Angular modules review

- <u>**Declarations**</u> array, contains standalone components thar are going to be used ONLY in the current component template.
- <u>**Bootstrap**</u> array contains the root component that will be used by Angular to start the application.
- In <u>**Imports**</u> array we can register modules AND standalone components that contains functionalities needed for the current component.
- <u>**Exports**</u> array contains ONLY the components that will be used in other components. For example, in AppComponent I use only the TasksComponent, so, in TasksModule I export only that component.
