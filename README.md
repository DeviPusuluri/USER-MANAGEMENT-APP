# User Management Application

A React-based user management application that allows you to view, add, edit, and delete users. The app features light and dark mode toggling, a responsive UI, and a pop-up form for adding and editing users. Data is fetched from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).

## Features

- **User List**: Display a list of users with first name, last name, email, and department.
- **Add User**: Add a new user to the list via a pop-up form.
- **Edit User**: Edit an existing user’s details via an inline form.
- **Delete User**: Delete a user from the list.
- **Light/Dark Mode**: Toggle between light and dark themes for the overall application.
- **Responsive Design**: The UI is responsive and works well on different screen sizes.

## Technologies Used

- **React**: For building the UI components.
- **Axios**: For making API calls to fetch user data and perform CRUD operations.
- **CSS**: For styling the app and implementing light/dark themes.
- **JSONPlaceholder API**: For fetching mock user data.
- **React State & Effects**: For handling user data and UI states.

## Installation

### Prerequisites
- Ensure you have **Node.js** and **npm** installed on your machine. You can download them from [here](https://nodejs.org/).

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/user-management-app.git

2.  Navigate into the project directory:

bash
Copy code
cd user-management-app
3.  Install the dependencies:

bash
Copy code
npm install
4.  Start the development server:

bash
Copy code
npm start
5.  Open your browser and go to http://localhost:3000 to view the app.
src/
├── components/
│   ├── Header.js          # Header with light/dark mode toggle
│   ├── UserList.js        # Displays the list of users
│   ├── UserForm.js        # Handles adding/editing users
│   └── Pagination.js      # Pagination component (optional)
├── styles/
│   ├── LightTheme.css     # Styles for light mode
│   └── DarkTheme.css      # Styles for dark mode
├── App.js                 # Main component
├── index.js               # Entry point
├── api/
│   └── api.js             # Axios API instance
└── utils/
    └── validation.js      # Input validation functions

Components
1. App.js
The main wrapper for the entire application.
Contains the state for light/dark mode and user data.
Renders the Header, UserList, and UserForm components.
2. UserList.js
Displays a table of users with "Edit" and "Delete" buttons.
Fetches data from the API using useEffect.
Allows for editing and deleting users.
3. UserForm.js
A form used for adding or editing user details.
Contains fields for first name, last name, email, and department.
Appears as a pop-up form when adding a user or editing an existing one.
4. Header.js
Contains the title of the application and a toggle for switching between light and dark modes.
5. Pagination.js (Optional)
If you want to paginate the list of users, this component can be used to handle pagination logic.
API Integration
GET /users: Fetches the list of users from JSONPlaceholder API.
POST /users: Sends a new user to the API (currently mocked since JSONPlaceholder doesn't persist data).
PUT /users/{id}: Updates an existing user’s data.
DELETE /users/{id}: Deletes a user from the list.
Styling
The app supports light mode and dark mode for improved user experience.
You can toggle between light and dark themes using the switch in the header.
Known Issues
The changes (add, edit, delete) are not persistent because the app uses the JSONPlaceholder API, which is a mock API.
Contributing
Feel free to fork this repository and submit pull requests with improvements, bug fixes, or features.

License
This project is licensed under the MIT License - see the LICENSE file for details.
