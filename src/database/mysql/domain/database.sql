USE bank;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(200) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

insert into
  users (username, email, password)
values
  ('admin1', 'admin@admin.es1', 'admin1'),
  ('admin2', 'admin@admin.es2', 'admin2'),
  ('admin3', 'admin@admin.es3', 'admin3'),
  ('admin4', 'admin@admin.es4', 'admin4'),
  ('admin5', 'admin@admin.es5', 'admin5');