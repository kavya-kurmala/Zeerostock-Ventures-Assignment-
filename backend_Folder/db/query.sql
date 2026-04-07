SELECT 
  s.name,
  SUM(i.quantity * i.price) AS total_value
FROM suppliers s
JOIN inventory i ON s.id = i.supplier_id
GROUP BY s.name
ORDER BY total_value DESC;
