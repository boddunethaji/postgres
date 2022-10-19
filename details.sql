DROP TABLE IF EXISTS details;
CREATE TABLE details(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL
);


INSERT INTO details(ID,NAME,AGE,ADDRESS,SALARY)
VALUES (1, 'Paul', 32, 'California', 110.00 );

INSERT INTO details (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (2, 'nethaji', 22, 'palnadu',30000.00 );

select * from details;
