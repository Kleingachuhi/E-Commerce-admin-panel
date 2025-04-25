🛍️ E-Commerce Admin Panel
Hey there! 👋
Welcome to the E-Commerce Admin Dashboard — a React-powered application that enables admins to manage products through a clean and intuitive interface.

🚀 Features
Manage your e-commerce inventory effortlessly with features like:

✅ View Products – Browse all listed items in a user-friendly table

➕ Add Products – Add new items using a straightforward form

✏️ Edit Products – Update existing items with ease

🗑️ Delete Products – Remove items in a single click

🔁 Client-Side Routing – Navigate seamlessly without full-page reloads

🔐 User Authentication – Simple login system using mock user data

📁 Pages Included
🗂️ Products List – Displays all products with options to edit or delete

➕ Add Product – Form to create new products

🛠️ Edit Product – Form pre-filled with existing product data

🔐 Login Page – Basic login screen for admin access

🏠 Note: When you open the app in your browser, the Home Page (Products List) is shown by default.
Users must log in to access the dashboard — upon successful login, they are redirected to the Home Page.

👥 Login Credentials
To access the dashboard, log in using one of the following test accounts:

json
Copy
Edit
{
  "users": [
    { "id": "1", "username": "abigael", "password": "abigael" },
    { "id": "2", "username": "klein", "password": "klein" },
    { "id": "3", "username": "kelly", "password": "kelly" },
    { "id": "4", "username": "joseph", "password": "joseph" },
    { "id": "5", "username": "rodgers", "password": "rodgers" }
  ]
}
These are stored in the mock backend powered by JSON Server.

🛠 Tech Stack
This project was built using:

⚛️ React – Front-end library for building UIs

🌐 React Router DOM – Navigation without page reloads

🗃️ JSON Server – Mock backend for REST API

🎨 Plain CSS – Simple, responsive styling

📦 Getting Started
Follow these steps to run the project locally:

Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/ecommerce-admin-panel.git
cd ecommerce-admin-panel
Install dependencies

bash
Copy
Edit
npm install
Start the mock backend

bash
Copy
Edit
json-server --watch db.json --port 3000
Run the React app

bash
Copy
Edit
npm run dev
Open your browser

Visit http://localhost:5173 — the home page will load.
Login using one of the credentials listed above to access the dashboard.


📄 License
This project is licensed under the MIT License.
Feel free to use, modify, and distribute it for both personal and commercial purposes.

MIT License

Copyright (c) 2025 Klein

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
