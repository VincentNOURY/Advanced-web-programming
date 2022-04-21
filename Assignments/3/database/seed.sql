INSERT INTO users (id, name, email, premium_id)
VALUES (0, 'Jack Spencer', 'jack.spencer@gmail.com', 0),
       (1, 'Jack Sparrow', 'jack.sparrow@gmail.com', NULL),
       (2, 'Walter White', 'walter.white@gmail.com', 1);

INSERT INTO premium (id, users_id, level, date_start_membership)
VALUES (0, 0, 1, TO_DATE('20/04/2022', 'DD/MM/YYYY')),
       (1, 2, 3, TO_DATE('11/04/2001', 'DD/MM/YYYY'));


INSERT INTO threads (id, theme, topic, creator_id)
VALUES (0, 'General', 'Why are things called what they are called ?', 0),
       (1, 'Film', 'Pirates of the caribbean is the best movie.', 1);


INSERT INTO messages (id, thread_id, message, creator_id)
VALUES (0, 0, 'That''s why we there are conventions.', 2),
       (0, 1, 'I think Avatar is better', 0);
