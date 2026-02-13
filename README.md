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

## Features

- **Tickets List Page (/)** - Displays all tickets with title, short body, and customer name. Includes search by title, loading spinner, and error handling.
- **Ticket Detail Page (/ticket/:id)** - Shows full ticket title and body, customer name and email, list of replies, and a back button.
