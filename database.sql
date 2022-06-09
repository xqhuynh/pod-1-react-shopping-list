-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- Create table
CREATE TABLE cart (
	id SERIAL PRIMARY KEY, 
	item VARCHAR(75),
	quantity INT,
	unit VARCHAR(10),
	purchased BOOLEAN DEFAULT FALSE
	);
	
-- Test data
INSERT INTO cart (item, quantity, unit)
	VALUES ('banana', '2', 'bunch'),
    VALUES ('apples', '5', 'lbs');
 	
-- Show table
SELECT * FROM cart;