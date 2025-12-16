Syracuse Student Life Review Hub

Overview
The Syracuse Student Life Review Hub is a web application where students can log in, browse, and post reviews of campus dining halls, dorms, and study spaces. The system supports multiple pages, user authentication, and a MySQL database to store reviews, ratings, and user information. Optional features include search and filtering tools, star ratings with comments, and “top rated” lists for quick browsing.

---

Prerequisites

- Java Development Kit (JDK) 17 or higher
- XAMPP 
- MySQL 8.0 or higher
- HTML, CSS, and JavaScript for front-end


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
- View “top rated” lists for quick browsing.



---


Project Structure

```
/html        -> Front-end pages (Dining, Student Center, etc.)
/css         -> Stylesheets
/js          -> Client-side scripts (ratings, interactivity)
/src         -> Java Servlets and JSP files
/db          -> Database schema and seed data
/tests       -> Unit and integration tests
```

---

Testing

- Run unit tests with:
  ```
  mvn test
  ```
- Integration tests simulate login, posting reviews, and database queries.

Fill in the actual test framework (JUnit, Selenium, etc.).

---

Known Issues and Limitations
- Ratings currently stored in offline database, meaning added reviews are only saved locally.  
- Limited mobile responsiveness.  
- Search and filter may not cover all categories.  

---
