CREATE DATABASE IF NOT EXISTS job_portal;

USE job_portal;

CREATE TABLE jobs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  company VARCHAR(255),
  type VARCHAR(50),
  location VARCHAR(100),
  salary VARCHAR(100),
  description TEXT,
  verified BOOLEAN DEFAULT true
);

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255),
  name VARCHAR(255)
);

CREATE TABLE applications (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  job_id INT,
  status VARCHAR(50) DEFAULT 'pending'
);
