Inventory Search & Management Assignment
Overview
This project implements a simple inventory search system along with a basic database design for
managing suppliers and inventory.
Features
1 Search products by name (case-insensitive, partial match)
2 Filter by category and price range
3 Combine multiple filters
4 Handles no results and invalid price range
Tech Stack
1 Backend: Node.js, Express
2 Frontend: HTML, CSS, JavaScript
3 Database: SQL (schema provided)
Project Structure
inventory-assignment/
■■■ backend/
■ ■■■ server.js
■ ■■■ data.json
■ ■■■ db/
■ ■■■ schema.sql
■ ■■■ query.sql
■■■ frontend/
■ ■■■ index.html
■■■ README.md
Setup Instructions
Backend:
cd backend
npm install
node server.js
Frontend:
Open index.html in browser or use Live Server in VS Code.
API Endpoint
GET /search with query params: q, category, minPrice, maxPrice
http://localhost:5000/search?q=phone&category=Electronics&minPrice=100&maxPrice=600
Edge Cases Handled
1 Empty search returns all products
2 Invalid price range returns error
3 No results found handled in UI
Database Design
1 Suppliers table (id, name, city)
2 Inventory table (id, supplier_id, product_name, quantity, price)
3 One-to-many relationship
Required Query
SELECT s.name,
SUM(i.quantity * i.price) AS total_value
FROM suppliers s
JOIN inventory i ON s.id = i.supplier_id
GROUP BY s.name
ORDER BY total_value DESC;
Performance Improvement
1 Add indexing on product_name and supplier_id
2 Use pagination for large datasets
3 Use Elasticsearch for faster search
Conclusion
This project demonstrates backend API development, frontend UI integration, and database design.
