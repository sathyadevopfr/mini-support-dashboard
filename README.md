# Mini Support Dashboard

A Support Dashboard where staff can view tickets, open a ticket to see full details, and read replies.

## Setup

```bash
git clone https://github.com/sathyadevopfr/support-dashboard.git
cd support-dashboard
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Build

```bash
npm run build
```

## Test Credentials

Authentication is handled by [dummyjson.com](https://dummyjson.com/docs/auth), a free fake REST API. It only accepts predefined hardcoded credentials — custom registration is not supported. Login uses username instead of email because this API only supports username-based authentication.

- Username: `emilys` — Password: `emilyspass`
- Username: `michaelw` — Password: `michaelwpass`
- Username: `sophiab` — Password: `sophiabpass`

Any other credentials will return an error.

## Features

- **Login Page (/login)** - Username and password login using dummyjson.com auth API. Redirects to dashboard on success.
- **Register Page (/register)** - User registration. Redirects to dashboard on success.
- **Logout** - Clears session and redirects to login page.
- **Tickets List Page (/)** - Displays all tickets with title, short body, and customer name. Includes search by title, loading spinner, and error handling.
- **Ticket Detail Page (/ticket/:id)** - Shows full ticket title and body, customer name and email, list of replies, and a back button.
