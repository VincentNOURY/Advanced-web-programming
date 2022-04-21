SELECT users.name, messages.message FROM users JOIN messages ON users.id = messages.creator_id;
SELECT users.name, messages.message FROM users JOIN messages ON users.id = messages.creator_id JOIN premium ON premium.users_id = users.id WHERE premium.id = 1;
SELECT messages.message FROM messages JOIN threads ON messages.thread_id = threads.id WHERE threads.theme LIKE 'Gene%';
SELECT threads.topic FROM threads JOIN users ON users.id = threads.creator_id WHERE users.name = 'John Doe';
