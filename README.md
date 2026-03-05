# 🌐 Mayank Sharma – Developer Portfolio

This repository contains the complete source code for my **personal developer portfolio website** built using **React and modern frontend technologies**. The goal of this project is to showcase my skills, projects, certifications, and contact information in a clean and interactive way.

This README explains the project in a beginner-friendly way so that anyone can understand what this project does, how it works, and how it can be improved or extended.

---

# 📌 Project Overview

This portfolio website is designed to serve as a **personal brand and professional showcase**. It highlights:

• Who I am as a developer  
• My technical skills  
• Projects I have built  
• Certifications I have earned  
• A contact form to reach me directly  

The website is fully responsive, visually modern, and built with reusable components so that it can be easily extended in the future.

The project focuses on:

• clean UI design  
• smooth animations  
• reusable React components  
• modern CSS styling  
• dark and light theme support  

---

# 🧰 Technologies Used

This project uses the following technologies.

### Frontend
React.js  
JavaScript (ES6+)  
HTML5  
CSS3

### Styling
Custom CSS  
CSS Variables  
Responsive Design  
Glassmorphism Effects  
Gradient Backgrounds  
Animated Elements

### Libraries / Tools
React Hooks  
EmailJS (for contact form email sending)

### Development Tools
Node.js  
npm  
Vite (for fast React development environment)

---

# 📂 Project Structure

Below is the simplified structure of the project.

portfolio-website
│
├── public
│ ├── github.png
│ ├── linkedin.svg
│
├── src
│ │
│ ├── components
│ │ ├── Navbar.jsx
│ │ ├── Hero.jsx
│ │ ├── About.jsx
│ │ ├── Projects.jsx
│ │ ├── ProjectCard.jsx
│ │ ├── ProjectModal.jsx
│ │ ├── Certificates.jsx
│ │ ├── CertificateCard.jsx
│ │ ├── Skills.jsx
│ │ ├── Contact.jsx
│ │ ├── Footer.jsx
│ │
│ ├── data
│ │ └── projectsData.js
│ │
│ ├── styles
│ │ ├── navbar.css
│ │ ├── hero.css
│ │ ├── about.css
│ │ ├── projects.css
│ │ ├── projectCard.css
│ │ ├── certificates.css
│ │ ├── contact.css
│ │ ├── footer.css
│ │
│ ├── App.jsx
│ └── main.jsx
│
└── package.json


Each section of the website is separated into a **React component**, which keeps the code organized and easier to maintain.

---

# 🎨 Features of the Website

### 1. Modern Hero Section

The hero section introduces the developer with a bold title and background animations.

Features:
• layered text shadow effect  
• glowing typography  
• gradient background  
• floating cards and icons  
• grid panel design  

---

### 2. About Section

This section explains the developer's background and interests.

Features:
• animated gradient blobs  
• responsive layout  
• informational cards  

---

### 3. Projects Section

Displays projects dynamically using reusable project cards.

Features:
• project filtering system  
• interactive hover effects  
• animated borders  
• modal popup with full project details  
• tech stack badges  

---

### 4. Certifications Section

Displays certificates earned by the developer.

Features:
• 3D hover effect  
• glowing animated borders  
• responsive grid layout  

---

### 5. Skills Section

Shows developer skill levels visually using progress bars.

Features:
• categorized skills (Frontend, Backend, Tools)  
• animated progress bars  

---

### 6. Contact Section

Allows visitors to send a message directly.

Features:
• form validation  
• EmailJS integration  
• success and error status message  

---

### 7. Theme Toggle (Dark / Light Mode)

The website supports both dark and light themes.

Features:
• animated theme toggle icon  
• CSS variable based theme system  
• smooth transition between themes  

---

# ✉️ Contact Form Integration

The contact form uses **EmailJS**, which allows sending emails without creating a backend server.

Workflow:

1. User fills the contact form
2. Form data is sent to EmailJS
3. EmailJS sends the email to the developer
4. User receives a success message

Example code used:

javascript
emailjs.send(
  "service_id",
  "template_id",
  formData,
  "public_key"
)

⚙️ Installation Guide

Follow these steps to run the project locally.

Step 1: Clone the Repository
git clone https://github.com/yourusername/portfolio-website.git
Step 2: Go into the project folder
cd portfolio-website
Step 3: Install dependencies
npm install
Step 4: Run the development server
npm run dev

After running the command, the site will open at:

http://localhost:5173
🚀 How Beginners Can Improve This Project

This project is designed so that beginners can easily extend it.

Here are some ideas.

Add More Projects

Update the file:

src/data/projectsData.js

Add a new project object.

Add Animations

You can integrate animation libraries like:

Framer Motion
GSAP

This can make the UI even more interactive.

Add Backend Support

Currently the contact form uses EmailJS.

You could also:

• create a Node.js backend
• store messages in a database
• build a dashboard for managing messages

Improve SEO

You can add:

meta tags
Open Graph tags
structured data

to make the website more discoverable.

Add Blog Section

Create a blog page where you share:

• development learnings
• tutorials
• project breakdowns

Deploy the Website

You can deploy the site using:

Vercel
Netlify
GitHub Pages

📱 Responsiveness

The website is fully responsive.

It adapts to:

Desktop screens
Tablets
Mobile devices

Responsive layouts are handled using:

• CSS Grid
• Flexbox
• Media queries

🎯 Purpose of the Project

This project was created to:

• practice modern frontend development
• build a professional developer portfolio
• demonstrate real world React component architecture
• improve UI/UX design skills

👨‍💻 Author

Mayank Sharma
Computer Science Student
Frontend Developer
Content Creator

⭐ Support

If you like this project, consider giving the repository a star ⭐ on GitHub. It helps others discover the project and supports the work.
