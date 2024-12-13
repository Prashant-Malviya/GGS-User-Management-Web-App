# User Management Application with React, Redux, and Reqres API

Deployed Link: - https://user-managment-app-prashant-malviya.netlify.app/

## Overview

This project is a User Management Application built with **React**, **Redux**, and the **Reqres API** to handle basic user management operations. It includes features such as user authentication, viewing a paginated list of users, editing, and deleting user details.

## Features

- **Login**: Users can log in using credentials obtained from the Reqres API.
- **View Users**: A paginated list of users fetched from the API.
- **Edit User**: Allows editing a user's details.
- **Delete User**: Users can be deleted from the list.
- **Logout**: Users can log out, and their session data is cleared.
- **Search Functionality**: Users can search for other users by name or instructor.

## Tech Stack

- **Frontend**: React.js, Redux, Vite, React Router
- **Styling**: Tailwind CSS, Bootstrap
- **API**: Reqres API (for managing user data)
- **State Management**: Redux Toolkit
- **Icons**: FontAwesome

## Prerequisites

Ensure you have the following tools installed on your system:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/user-management-app.git
cd user-management-app
```
### 2. Install Dependencies

```bash
npm i
```

### 3. Run Application

```bash
npm run dev
```

### 3. Use Following Credentials To access the application

1 - email
  
```bash
eve.holt@reqres.in
```
2 - password
```bash
cityslicka
```

### 4. API Endpoints

This project interacts with the **Reqres API** for user management. Below are the key endpoints used:

- **Login**: `POST /login` - Used for user authentication.
- **Get Users**: `GET /users?page=1` - Fetch a paginated list of users.
- **Update User**: `PUT /users/{id}` - Update user details.
- **Delete User**: `DELETE /users/{id}` - Delete a user.

### 5. Usage

## Login

- Use the login page to authenticate using the Reqres API.
- Once authenticated, users are redirected to the homepage.

## User Management

- **View Users**: Users can view a paginated list of users fetched from the Reqres API.
- **Edit User**: Clicking the "Edit" button allows users to modify user details.
- **Delete User**: Clicking the "Delete" button removes a user from the list.

## Logout

- Clicking the profile icon in the navigation bar reveals a logout button. 
- Clicking it logs the user out and redirects them to the login page.
