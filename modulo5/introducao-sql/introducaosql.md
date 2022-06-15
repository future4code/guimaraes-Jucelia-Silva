CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- a)
-- Primary Key no id para identificação;
-- VARCHAR para declarar strings;
-- DATE representa uma data no formato internacional
-- O NOT NULL significa que o campo não pode ficar vazio.

-- b)
-- O comando SHOW DATABASES mostra o banco de dados, e o SHOW TABLES mostra a tabela Actor.

-- c)
-- DESCRIBE Actor mostrou a tabela inteira.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
002,
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
002,
"Murilo",
1500000,
"1991-08-23",
"male"
);

-- Error Code 1062, Duplicate entry '2' for key PRIMARY. 
-- Esse erro indica que usei uma key PRIMARY que já está sendo utilizada.

-- c)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- O erro acima acontec porque foi adicionado no 'body' do insert informações
-- que não foram passadas dentro dos parâmetros do início. 
-- Para resolver, usei birth_date e gender nos parênteses. 

-- d)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Luiz",
  400000,
  "1949-04-18", 
  "male"
);

-- Aqui o erro dá-se porque diz que o campo name não tem um campo vazio, 
-- Foi passado para ele o valor NOT NULL. O campo deve ser preenchido.
-- Para resolver, adicionei um nome nesse campo. 

-- e)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- Incorrect date value. A data precisa ser inserida entre strings.

-- e)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);