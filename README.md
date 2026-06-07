# Austin Akerley — Portfolio

A modern, single-page portfolio website built with **Django**. The content is
driven entirely by Austin Akerley's resume and lives in a single structured
data module, so updating the site never requires touching the templates.

## Features

- ⚡️ Single-page Django app with a sticky navigation
- 🎨 Dark theme with gold accents, animated aurora background, and an
  animated career timeline
- 📱 Fully responsive layout (desktop → mobile)
- ♿️ Respects `prefers-reduced-motion`
- 🧩 Content lives in `portfolio/resume.py` — easy to update
- ✅ Tested with Django's test runner

## Tech stack

- Python 3.12+
- Django 6.x
- Vanilla HTML / CSS / JS (no front-end build step required)

## Getting started

```bash
# 1. (Optional) create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Apply migrations (uses SQLite by default)
python manage.py migrate

# 4. Run the development server
python manage.py runserver
```

Then open <http://127.0.0.1:8000/>.

## Running the tests

```bash
python manage.py test
```

## Configuration

The following environment variables can be set to configure the project for
deployment (sensible development defaults are provided):

| Variable | Default | Description |
| --- | --- | --- |
| `DJANGO_SECRET_KEY` | dev key | Secret key used by Django |
| `DJANGO_DEBUG` | `True` | Set to `False` in production |
| `DJANGO_ALLOWED_HOSTS` | `localhost,127.0.0.1` | Comma-separated allowed hosts |
| `DJANGO_CSRF_TRUSTED_ORIGINS` | _(empty)_ | Comma-separated trusted origins |

## Updating the content

Edit `portfolio/resume.py`. Every section — profile, stats, experience,
education, skills, and languages — is defined there as plain Python data.

## Project structure

```
.
├── manage.py
├── requirements.txt
├── portfolio_site/        # Django project (settings, urls, wsgi/asgi)
├── portfolio/             # Portfolio app
│   ├── resume.py          # Resume content (single source of truth)
│   ├── views.py
│   ├── urls.py
│   ├── tests.py
│   └── templates/portfolio/home.html
└── static/                # CSS & JS
    ├── css/styles.css
    └── js/main.js
```
