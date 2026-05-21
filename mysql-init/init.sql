-- Initialization script for todo_db (safe to run multiple times)
CREATE DATABASE IF NOT EXISTS todo_db;
USE todo_db;

CREATE TABLE IF NOT EXISTS todos (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  completed BOOLEAN DEFAULT FALSE,
  created_at DATETIME
);

-- sample data
INSERT INTO todos (title, description, completed, created_at)
SELECT 'Sample task', 'This is a sample todo', FALSE, NOW()
FROM DUAL
WHERE NOT EXISTS (SELECT 1 FROM todos LIMIT 1);
