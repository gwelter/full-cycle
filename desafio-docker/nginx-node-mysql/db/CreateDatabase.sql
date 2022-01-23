USE nodedb;

CREATE TABLE IF NOT EXISTS people (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;