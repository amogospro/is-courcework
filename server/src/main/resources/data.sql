-- Заполнение таблицы Person
INSERT INTO Person (FirstName, LastName, MiddleName, DateOfBirth, Gender, PhoneNumber, Email, Address)
VALUES
-- Пользователи
('Иван', 'Иванов', 'Иванович', '1985-05-20', 'M', '+71234567890', 'ivanov@example.com', 'ул. Ленина, д. 1'),
('Мария', 'Петрова', 'Сергеевна', '1990-08-15', 'F', '+79876543210', 'petrova@example.com', 'ул. Пушкина, д. 2'),
('Алексей', 'Смирнов', 'Алексеевич', '1978-12-30', 'M', '+79991234567', 'smirnov@example.com', 'ул. Мира, д. 3'),
-- Пациенты
('Елена', 'Кузнецова', 'Игоревна', '1995-03-10', 'F', '+79001234567', 'kuznetsova@example.com', 'ул. Советская, д.
4'),
('Дмитрий', 'Попов', 'Владимирович', '1982-11-25', 'M', '+79112223344', 'popov@example.com', 'ул. Садовая, д. 5');
-- Заполнение таблицы Role
INSERT INTO Role (RoleName, Description)
VALUES
    ('Администратор', 'Администратор системы'),
    ('Врач', 'Медицинский работник'),
    ('Техперсонал', 'Технический персонал');
-- Заполнение таблицы User
-- Предполагается, что ID пользователей в таблице Person начинаются с 1
INSERT INTO UserProfile (PersonID, Username, PasswordHash, DateRegistered)
VALUES
    (1, 'admin', '$2a$10$7DO2tMe6QSZw7/qpTug3uuoSX7FYhnPMvJ6sSENxvtu5gQBoi2svi', NOW()),
    (2, 'medic', '$2a$10$7DO2tMe6QSZw7/qpTug3uuoSX7FYhnPMvJ6sSENxvtu5gQBoi2svi', NOW()),
    (3, 'service', '$2a$10$7DO2tMe6QSZw7/qpTug3uuoSX7FYhnPMvJ6sSENxvtu5gQBoi2svi', NOW());
-- Заполнение таблицы UserRole
INSERT INTO UserRole (UserID, RoleID)
VALUES
    (1, 1), -- admin - Администратор
    (2, 2), -- medic - Врач
    (3, 3); -- service - Техперсонал
-- Заполнение таблицы Patient
-- ID пациентов в таблице Person начинаются с 4
INSERT INTO Patient (PersonID, InsurancePolicyNumber)
VALUES
    (4, '1234567890'),
    (5, '0987654321');
-- Заполнение таблицы Device
INSERT INTO Device (DeviceSN, Location, Status)
VALUES
    ('SN-001', 'Клиника №1', 'Работает'),
    ('SN-002', 'Клиника №2', 'В обслуживании');
-- Заполнение таблицы Study
INSERT INTO Study (PatientID, UserID, DeviceID, Status, Notes)
VALUES
    (1, 2, 1, 'Planned',
     'Исследование головного мозга'),
    (2, 2, 2, 'Planned',
     'Исследование позвоночника');
-- Заполнение таблицы DeviceComment
INSERT INTO DeviceComment (DeviceID, UserID, CommentText, Timestamp)
VALUES
    (1, 3, 'Проведено плановое обслуживание', NOW() - INTERVAL '1 day'),
    (2, 3, 'Необходимо заменить деталь', NOW());
-- Заполнение таблицы Schedule
INSERT INTO Schedule (StartTime, EndTime, StudyID, ScheduledByUserID, Comments)
VALUES
    (NOW() + INTERVAL '1 hour', NOW() + INTERVAL '2 hours', 1, 2, 'Запланировано исследование для пациента
Иванова'),
    (NOW() + INTERVAL '3 hours', NOW() + INTERVAL '4 hours', 2, 2, 'Запланировано исследование для пациента
Петрова');
-- Заполнение таблицы AuditLog
INSERT INTO AuditLog (UserID, ActionType, Entity, EntityID, Timestamp, Details)
VALUES
    (1, 'Создание', 'User', 1, NOW() - INTERVAL '2 days', 'Создан пользователь Иванов'),
    (1, 'Создание', 'User', 2, NOW() - INTERVAL '2 days', 'Создан пользователь Петрова'),
    (1, 'Создание', 'User', 3, NOW() - INTERVAL '2 days', 'Создан пользователь Смирнов'),
    (2, 'Создание', 'Study', 1, NOW() - INTERVAL '1 day', 'Создано исследование для пациента Кузнецова'),
    (2, 'Создание', 'Study', 2, NOW(), 'Создано исследование для пациента Попов');