ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

describe Actor;

SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- 1)
-- a) Exclusão a coluna salary da tabela de atores.
-- b) Esse comando altera o nome da coluna gênero para sex com um VARCHAR(6).
-- c) Esse comando altera a coluna gênero mas gênero com um VARCHAR(255).
-- d) 
ALTER TABLE Actor MODIFY gender VARCHAR(100);

-- 2)
-- a) 
UPDATE Actor
SET birth_date = "1999-06-20"
WHERE id = "3";

-- b)
UPDATE Actor
SET name = "Talia"
WHERE id = 5 AND name="Talia"

UPDATE Actor
SET name = "Talia"
WHERE id = 5 "Talia";



