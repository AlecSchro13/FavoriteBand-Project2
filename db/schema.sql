DROP DATABASE IF EXISTS usermusic_db;

CREATE DATABASE usermsuic_db;

USE usermusic_db;

--creates table for the users music on the dashboard--
CREATE TABLE music (
    id INT NOT NULL,
    songs VARCHAR(100) NOT NULL,
    artists VARCHAR(100) NOT NULL,
    albums VARCHAR(100) NOT NULL,
);
