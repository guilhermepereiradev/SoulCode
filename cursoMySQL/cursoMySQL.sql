CREATE DATABASE empresa;

USE empresa;

CREATE TABLE cargo(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE,
	funcao VARCHAR(100)
);

SELECT * FROM cargo;

INSERT INTO cargo (nome, funcao) VALUES ("RH", "Recursos Humanos");
INSERT INTO cargo (nome, funcao) VALUES ("TI", "Tecnologia da informação");
INSERT INTO cargo (nome, funcao) VALUES ("MK", "Marketing");
INSERT INTO cargo (nome, funcao) VALUES ("FN", "Financeiro");
INSERT INTO cargo (nome, funcao) VALUES ("OP", "OPERACIONAL");

SELECT * FROM cargo;

SELECT nome,id FROM cargo WHERE nome = "TI";

ALTER TABLE cargo ADD numero_funcionarios INT;

ALTER TABLE cargo DROP COLUMN numero_funcionarios;

ALTER TABLE cargo CHANGE nascimento data_nascimento DATE;

UPDATE cargo SET nome = "FIN" WHERE id = 4;

UPDATE cargo SET nome = "MKT" WHERE id = 3;

DELETE FROM cargo WHERE id = 5;

-- DROP DATABASE empresa;