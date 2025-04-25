🛍️ E-Commerce Admin Panel
Hey there! 👋
Welcome to the E-Commerce Admin Dashboard — a simple and clean React app that lets admins manage products with ease. Whether you're adding new items or updating existing ones, this dashboard makes inventory management a breeze!


🔗 Live Demo:
👉 View Deployed App on Vercel : https://e-commerce-admin-panel-4sy1.vercel.app/


🖼 Demo
![Screencastfrom2025-04-2514-02-00-ezgif com-effects](https://github.com/user-attachments/assets/592ee478-168f-4c79-87cd-83a09e00c94e)



🚀 Features
✅ View Products – See all your products in a neat table layout

➕ Add Products – Use a user-friendly form to add new items

✏️ Edit Products – Make changes to existing products easily

🗑️ Delete Products – Remove products in just one click

🔁 Client-Side Routing – Smooth navigation without reloading pages

🔐 Login System – Basic authentication with sample user accounts



📁 Pages Included
🗂️ Products List – View or edit products

➕ Add Product – Add new product with a simple form

🛠️ Edit Product – Update product info using a pre-filled form

🔐 Login Page – Sign in to access the dashboard. It redirects to the home page --> navigates

🏠 Note: When the app loads, you must log in first.

👥 Login Credentials
Use any of these test accounts to sign in:

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
These accounts are stored in a mock backend using JSON Server.
Type in the username which is the same as the password and click on the log in button.


🛠 Tech Stack.

⚛️ React – For the frontend User Interface

🌐 React Router DOM – For routing and navigation

🗃️ JSON Server – Mock backend to simulate a REST API

🎨 Plain CSS – Simple, responsive styling

▲ Vercel – Used for deploying the app online


📦 Getting Started
1. Clone the project
bash
Copy
Edit
git clone https://github.com/your-username/ecommerce-admin-panel.git
cd ecommerce-admin-panel
2. Install dependencies
nginx
Copy
Edit
npm install
3. Start the mock backend
pgsql
Copy
Edit
json-server --watch db.json --port 3000
4. Run the React app
arduino
Copy
Edit
npm run dev
5. Open in your browser
Visit: http://localhost:5173
Login using any of the test credentials above to access the dashboard.

📄 License
MIT License

Copyright (c) 2025 Klein

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
