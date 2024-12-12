-- Drop existing tables if needed (optional)
-- Be cautious with DROP statements in a production environment
DROP TABLE IF EXISTS AuditLog;
DROP TABLE IF EXISTS Schedule;
DROP TABLE IF EXISTS DeviceComment;
DROP TABLE IF EXISTS Study;
DROP TABLE IF EXISTS Device;
DROP TABLE IF EXISTS Patient;
DROP TABLE IF EXISTS UserRole;
DROP TABLE IF EXISTS Role;
DROP TABLE IF EXISTS UserProfile;
DROP TABLE IF EXISTS Person;
DROP TYPE IF EXISTS GenderEnum CASCADE;
DROP TYPE IF EXISTS DeviceStatusEnum CASCADE;
DROP TYPE IF EXISTS ActionTypeEnum CASCADE;
-- Create ENUM types
CREATE TYPE GenderEnum AS ENUM ('M', 'F', 'O');
CREATE CAST (CHARACTER VARYING as GenderEnum) WITH INOUT AS IMPLICIT;

CREATE TYPE DeviceStatusEnum AS ENUM ('Работает', 'Неисправно', 'В обслуживании');
CREATE CAST (CHARACTER VARYING as DeviceStatusEnum) WITH INOUT AS IMPLICIT;

CREATE TYPE ActionTypeEnum AS ENUM ('Создание', 'Изменение', 'Удаление', 'Вход', 'Выход');
CREATE CAST (CHARACTER VARYING as ActionTypeEnum) WITH INOUT AS IMPLICIT;

-- Create the Person table
CREATE TABLE Person
(
    ID          SERIAL PRIMARY KEY,
    FirstName   VARCHAR        NOT NULL,
    LastName    VARCHAR        NOT NULL,
    MiddleName  VARCHAR,
    DateOfBirth DATE           NOT NULL,
    Gender      GenderEnum     NOT NULL,
    PhoneNumber VARCHAR UNIQUE NOT NULL,
    Email       VARCHAR UNIQUE NOT NULL,
    Address     VARCHAR        NOT NULL
);
-- Create the User table
CREATE TABLE UserProfile
(
    ID             SERIAL PRIMARY KEY,
    PersonID       INTEGER        NOT NULL UNIQUE REFERENCES Person (ID) ON DELETE CASCADE,
    Username       VARCHAR UNIQUE NOT NULL,
    PasswordHash   VARCHAR        NOT NULL,
    DateRegistered TIMESTAMP      NOT NULL DEFAULT NOW()
);
-- Create the Role table
CREATE TABLE Role
(
    ID          SERIAL PRIMARY KEY,
    RoleName    VARCHAR UNIQUE NOT NULL,
    Description TEXT
);
-- Create the UserRole table (Many-to-Many relationship between User and Role)
CREATE TABLE UserRole
(
    UserID INTEGER NOT NULL REFERENCES UserProfile (ID) ON DELETE CASCADE,
    RoleID INTEGER NOT NULL REFERENCES Role (ID) ON DELETE CASCADE,
    PRIMARY KEY (UserID, RoleID)
);
-- Create the Patient table
CREATE TABLE Patient
(
    ID                    SERIAL PRIMARY KEY,
    PersonID              INTEGER NOT NULL UNIQUE REFERENCES Person (ID) ON DELETE CASCADE,
    InsurancePolicyNumber VARCHAR
);
-- Create the Device table
CREATE TABLE Device
(
    ID       SERIAL PRIMARY KEY,
    DeviceSN VARCHAR UNIQUE   NOT NULL,
    Location VARCHAR          NOT NULL,
    Status   DeviceStatusEnum NOT NULL
);
-- Create the Study table
CREATE TABLE Study
(
    ID        SERIAL PRIMARY KEY,
    PatientID INTEGER     NOT NULL REFERENCES Patient (ID) ON DELETE CASCADE,
    UserID    INTEGER     NOT NULL REFERENCES UserProfile (ID) ON DELETE SET NULL, -- User who performed the study
    DeviceID  INTEGER     NOT NULL REFERENCES Device (ID) ON DELETE SET NULL,
    Status    VARCHAR(20) NOT NULL DEFAULT 'Planned',
    CONSTRAINT chk_status CHECK (Status IN ('Planned', 'Canceled', 'Successed')),
    DicomID   VARCHAR,
    Notes     TEXT
);
-- Create the DeviceComment table
CREATE TABLE DeviceComment
(
    ID          SERIAL PRIMARY KEY,
    DeviceID    INTEGER   NOT NULL REFERENCES Device (ID) ON DELETE CASCADE,
    UserID      INTEGER   NOT NULL REFERENCES UserProfile (ID) ON DELETE CASCADE,
    CommentText TEXT      NOT NULL,
    Timestamp   TIMESTAMP NOT NULL DEFAULT NOW()
);
-- Create the Schedule table
CREATE TABLE Schedule
(
    ID                SERIAL PRIMARY KEY,
    StartTime         TIMESTAMP NOT NULL,
    EndTime           TIMESTAMP NOT NULL,
    StudyID           INTEGER   NOT NULL REFERENCES Study (ID) ON DELETE SET NULL,
    ScheduledByUserID INTEGER   NOT NULL REFERENCES UserProfile (ID) ON DELETE CASCADE,
    Comments          TEXT
);
-- Create the AuditLog table
CREATE TABLE AuditLog
(
    ID         SERIAL PRIMARY KEY,
    UserID     INTEGER        NOT NULL REFERENCES UserProfile (ID) ON DELETE CASCADE,
    ActionType ActionTypeEnum NOT NULL,
    Entity     VARCHAR        NOT NULL,
    EntityID   INTEGER        NOT NULL,
    Timestamp  TIMESTAMP      NOT NULL DEFAULT NOW(),
    Details    TEXT
);

CREATE OR REPLACE FUNCTION get_study_data(p_study_id INTEGER)
    RETURNS TABLE
            (
                study_id          INTEGER,
                patient_full_name VARCHAR,
                device_sn         VARCHAR,
                params            JSON,
                notes             TEXT
            )
AS
$$
BEGIN
    RETURN QUERY
        SELECT s.ID,
               CONCAT(p.LastName, ' ', p.FirstName, ' ', COALESCE(p.MiddleName, '')) AS patient_full_name,
               d.DeviceSN,
               s.Notes
        FROM Study s
                 JOIN Patient pt ON pt.ID = s.PatientID
                 JOIN Person p ON p.ID = pt.PersonID
                 LEFT JOIN Device d ON d.ID = s.DeviceID
        WHERE s.ID = p_study_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_device_status(
    p_device_id INTEGER,
    p_new_status DeviceStatusEnum,
    p_user_id INTEGER,
    p_comment TEXT
)
    RETURNS VOID AS
$$
BEGIN
    UPDATE Device
    SET Status = p_new_status
    WHERE ID = p_device_id;
    IF p_comment IS NOT NULL THEN
        INSERT INTO DeviceComment (DeviceID, UserID, CommentText)
        VALUES (p_device_id, p_user_id, p_comment);
    END IF;
END;
$$ LANGUAGE plpgsql;