# MyUnifi-Dashboard
```
Improved Django & React App for the MyUnifi user dashboard.
```

## Dependencies
This project used Django to render login page and provide user auth, and React renders all dashboard pages and visual components.
pip package managment is used with the back-end and npm package management is used with the front-end.

### Back-End Dependencies
- pip install **django**
- pip install **djangorestframework**
- pip install **social-auth-app-django**

### Front-End Dependencies
- npm i **react**
- npm i **material-ui**

## Side notes
 - BrowserRouter was not loading React components in Django, so HashRouter was used as a workaround in **front-end/frontend/src/App.JS**
 - Admin SDK Google API is used to check the Google Workspace group of each user
 - The main login page was made using plain HTML. It can be edited in **back-end/templates/login.html**. It uses a shortcode for the google auth
