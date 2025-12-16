Syracuse Student Life Review Hub

Overview
The Syracuse Student Life Review Hub is a web application where students can log in, browse, and post reviews of campus dining halls, dorms, and study spaces. The system supports multiple pages, user authentication, and a MySQL database to store reviews, ratings, and user information. Optional features include community signup, star ratings with comments, and “top rated” lists for quick browsing.

---

Prerequisites

- Java Development Kit (JDK) 17 or higher
- Xampp apache
- MySQL 8.0 or higher
- HTML, CSS, and JavaScript for front-end
- JavaScript and PHP for server side scripting to backend

---

How to Run Syracuse_Spots Website
Prerequisites

- Install XAMPP (includes Apache and MySQL).
- Download the project folder Syracuse_Spots.
- Ensure you have the SQL file spots_query.sql included in the Syracuse_Spots folder.
  Setup Instructions
- Install XAMPP for your operating system.
- Navigate to your XAMPP installation directory.
  Open the htdocs folder.
  Place the entire Syracuse_Spots folder inside htdocs.
- Launch the XAMPP Control Panel.
  Start Apache and MySQL services.
  Confirm both are running.
- Import the database.
  In the XAMPP Control Panel, click Admin for MySQL to open phpMyAdmin.
  Select the Import tab.
  Click Choose File and select spots_query.sql from the Syracuse_Spots folder.
  Scroll down and click Import to load the database.
- Run the website.
  Open your default browser.
  Type:
  http://localhost/Syracuse_Spots/
  Press Enter to launch the site.
  Completion
  The Syracuse_Spots website should now be running locally. You can log in, browse dining hall reviews, and test all features.

---

Usage

- Browse reviews of dining halls, dorms, and study spaces.
- Post reviews after logging in.
- Use search and filter tools to find reviews by category or rating.

---

Project Structure

```
/html        -> Front-end pages (Dining, Student Center, etc.)
/css         -> Stylesheets
/js          -> Client-side scripts (ratings, interactivity)
/php.        -> Server side scripting to database
/sql          -> Database schema and seed data
/tests       -> Unit and integration tests
```

---

Known Issues and Limitations

- Ratings currently stored in offline database, meaning added reviews are only saved locally.
- Limited mobile responsiveness.
- Search and filter may not cover all categories.

---

Files

community.php           	-> Allows users to sign up to the community and then set reviews and ratings

database.php           	-> Establishes the connection to the database for all other php files

dining.php           		-> Retrieves and updates user ratings and reviews

study.php			-> For future development purposes, to add favorite studying spots

index.html           		-> Welcome page containing a sign-up form at the the end

index.css          		-> Styling for all HTML files

ratings.js         		 -> Handles all the star ratings

reviews.js         		-> Handles the reveiws

script.js         			-> Allows users to sign up to the community and then set reviews and ratings

spots_querry.sql  		-> Creates EatingSpots database

---
