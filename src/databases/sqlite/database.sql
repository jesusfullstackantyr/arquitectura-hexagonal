CREATE TABLE IF NOT EXISTS business (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  type TEXT,
  description TEXT,
  status TEXT
);
