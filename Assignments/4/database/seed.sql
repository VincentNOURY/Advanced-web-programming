INSERT INTO users (name, email, premium_id)
VALUES ('Jack Spencer', 'jack.spencer@gmail.com', 0),
       ('Jack Sparrow', 'jack.sparrow@gmail.com', NULL),
       ('Walter White', 'walter.white@gmail.com', 1);

INSERT INTO premium (users_id, level, date_start_membership)
VALUES (0, 1, TO_DATE('20/04/2022', 'DD/MM/YYYY')),
       (2, 3, TO_DATE('11/04/2001', 'DD/MM/YYYY'));


INSERT INTO threads (theme, topic, creator_id)
VALUES ('General', 'Why are things called what they are called ?', 0),
       ('Film', 'Pirates of the caribbean is the best movie.', 1);


INSERT INTO messages (thread_id, message, creator_id)
VALUES (0, 'That''s why we there are conventions.', 2),
       (1, 'I think Avatar is better', 0);
