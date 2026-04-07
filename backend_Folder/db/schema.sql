CREATE TABLE suppliers (
  id SERIAL PRIMARY KEY,
  name TEXT,
  city TEXT
);

CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  supplier_id INT REFERENCES suppliers(id),
  product_name TEXT,
  quantity INT CHECK (quantity >= 0),
  price FLOAT CHECK (price > 0)
);
