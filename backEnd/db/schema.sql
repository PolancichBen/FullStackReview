DROP DATABASE IF EXISTS gitHubRepoFetcher;

CREATE DATABASE gitHubRepoFetcher;
USE gitHubRepoFetcher;

CREATE TABLE repos (
id INT AUTO_INCREMENT PRIMARY KEY,
gitId INT,
creation VARCHAR(255),
handle VARCHAR(255) NOT NULL,
repo_description VARCHAR(255) NOT NULL,
repo_url VARCHAR(255) NOT NULL,
owner_starred VARCHAR(255) NOT NULL,
owner_starGazer INT,
owner_followers_url VARCHAR(255) NOT NULL,
owner_organizations_url VARCHAR(255) NOT NULL
);

