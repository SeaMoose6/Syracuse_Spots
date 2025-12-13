Syracuse Student Life Review Hub

Overview
The Syracuse Student Life Review Hub is a web application where students can log in, browse, and post reviews of campus dining halls, dorms, and study spaces. The system supports multiple pages, user authentication, and a MySQL database to store reviews, ratings, and user information. Optional features include search and filtering tools, star ratings with comments, and “top rated” lists for quick browsing.

---

Table of Contents
1. Overview  
2. Prerequisites  
3. Installation  
4. Configuration  
5. Running the System  
6. Usage  
7. Credentials  
8. Online Access  
9. Project Structure  
10. Testing  
11. Known Issues and Limitations  
12. Contributors and Credits  
13. License  

---

Prerequisites
- Java Development Kit (JDK) 17 or higher  
- Apache Tomcat (or another servlet container)  
- MySQL 8.0 or higher  
- HTML, CSS, and JavaScript for front-end  
- Optional: Node.js if client-side tooling is used  



---

Installation
1. Clone the repository:  
   ```
   git clone https://github.com/your-team/Syracuse_Spots.git
   ```
2. Set up the MySQL database:  
   - Create a database named `student_life_reviews`.  
   - Import the schema from `/db/schema.sql`.  
3. Configure Tomcat to deploy the project.  
4. Build the project with your chosen build tool (Maven or Gradle).  

Fill in the exact build commands and schema file location.

---

Configuration |||||||MAKE EDITS||||||||
- Environment variables or `.env` file should include:  
  - DB_HOST  
  - DB_USER  
  - DB_PASS  
- Update `web.xml` or servlet configuration with database connection details.  

Fill in any other configs (ports, session settings, etc.).

---

Running the System    |||||||MAKE EDITS||||||||
- Start the MySQL server.  
- Deploy the `.war` file to Tomcat.  
- Access the app at:  
  ```
  http://localhost:8080/SyracuseSpots
  ```

---

Usage
- Browse reviews of dining halls, dorms, and study spaces.  
- Post reviews after logging in.  
- Use search and filter tools to find reviews by category or rating.  
- View “top rated” lists for quick browsing.  

Add screenshots or examples of the interface for clarity.

---

Credentials  |||||||MAKE EDITS||||||||
For grading and testing, use the following accounts:  
- Admin: `admin / admin123`  
- Test User: `student / student123`  

Fill in actual credentials you have set up.

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
- Ratings currently stored in text or JSON files (not yet integrated with the database).  
- Limited mobile responsiveness.  
- Search and filter may not cover all categories.  


---

Contributors and Credits
- Seamus — Front-end design (HTML/CSS)  
- Mamnun and Diego — Back-end logic (Java Servlets/JSP)  
- Brandon — Database schema and queries (MySQL)  
- Michael — Testing and deployment  

---

License
Fill in MIT, GPL, or other license if applicable.

---

This version is strictly text with no bold formatting. You can now expand it with the missing details such as installation commands, credentials, screenshots, test framework, and deployment URL.
