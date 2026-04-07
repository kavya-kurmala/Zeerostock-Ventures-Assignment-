# Inventory Search & Management Assignment

## 📌 Overview
This project implements a simple inventory search system along with a basic database design for managing suppliers and inventory.

It consists of:
- A backend API for searching inventory
- A frontend UI for interacting with the search
- A database schema for suppliers and inventory

---

## 🚀 Features

### 🔹 Search API
- Search products by name (partial & case-insensitive)
- Filter by category
- Filter by price range (min & max)
- Supports combining multiple filters
- Returns all products if no filters are applied

### 🔹 UI Features
- Search input field
- Category dropdown
- Price range filters
- Clean card-based result display
- Handles:
  - No results found
  - Invalid price range
  - Loading state

---

## 🛠️ Tech Stack
- Backend: Node.js, Express
- Frontend: HTML, CSS, JavaScript
- Database: SQL (schema provided)

---

## 📂 Project Structure

├── backend/
│ ├── server.js
│ ├── data.json
│ └── db/
│ ├── schema.sql
│ └── query.sql
│
├── frontend/
│ └── index.html
│
└── README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup

cd backend
npm install
node server.js


Server will run at:
http://localhost:5000


---

### 2️⃣ Frontend Setup

- Open `frontend/index.html` in browser  
OR  
- Use Live Server in VS Code

---

## 🔍 API Endpoint

### GET /search

#### Query Parameters:
- `q` → product name (partial match)
- `category` → filter by category
- `minPrice` → minimum price
- `maxPrice` → maximum price

#### Example:
http://localhost:5000/search?q=phone&category=Electronics&minPrice=100&maxPrice=600


---

## ⚠️ Edge Cases Handled

- Empty search → returns all products
- Invalid price range → returns error
- No matching results → shows "No results found"

---

## 🗄️ Database Design

### Tables:

#### Suppliers
- id (Primary Key)
- name
- city

#### Inventory
- id (Primary Key)
- supplier_id (Foreign Key)
- product_name
- quantity (≥ 0)
- price (> 0)

### Relationship:
- One supplier → Many inventory items

---

## 📊 Required Query

Returns total inventory value per supplier:

```sql
SELECT 
  s.name,
  SUM(i.quantity * i.price) AS total_value
FROM suppliers s
JOIN inventory i ON s.id = i.supplier_id
GROUP BY s.name
ORDER BY total_value DESC;

⚡ Performance Improvement

For large datasets:

-Add indexing on product_name and supplier_id
-Implement pagination
-Use search engines like Elasticsearch for faster queries
🎥 Demo

The project demonstrates:

Working search API with filters
Interactive UI
Proper handling of edge cases
Database schema and query design

✅ Conclusion

This project provides a complete working solution for:

Inventory search functionality
Backend API design
Basic frontend UI
Database modeling





















