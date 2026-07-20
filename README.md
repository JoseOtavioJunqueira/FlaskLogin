# TaskMaster

A full-stack task management web app where users can register, log in, and manage a personal to-do list — mark tasks as done, undo, or remove them. Built to demonstrate a complete Flask application: authentication, session handling, a relational data model, and a dynamic front end.

## Features

- **Authentication**: registration and login with hashed passwords (Flask-Bcrypt) and session management (Flask-Login).
- **Task management**: add, complete, un-complete, and delete tasks via an AJAX-driven dashboard (no full page reloads).
- **Per-user data isolation**: each task is scoped to its owner and enforced server-side on every request.

## Tech Stack

- **Backend**: Flask, Flask-SQLAlchemy, Flask-Login, Flask-WTF, Flask-Bcrypt
- **Database**: SQLite
- **Frontend**: HTML, CSS, JavaScript

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/JoseOtavioJunqueira/taskmaster-flask.git
   cd taskmaster-flask
   ```

2. Create and activate a virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. (Optional) Set a persistent session secret — otherwise a random one is generated on each restart, which invalidates existing sessions:
   ```bash
   export SECRET_KEY="your-random-secret-here"
   ```

5. Run the app:
   ```bash
   python app.py
   ```

6. Open http://127.0.0.1:5000

## Project Structure

```
app.py                 # Flask app: models, routes, auth logic
templates/              # Jinja templates (home, auth, dashboard)
static/                 # CSS and JavaScript
```

The SQLite database is created automatically on first run and is not versioned.

## License

MIT — see [LICENSE](LICENSE).

## Contact

José Otávio — joseotavio.jr1104@gmail.com
