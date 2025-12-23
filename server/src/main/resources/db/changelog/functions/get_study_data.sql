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
               NULL::JSON AS params,
               s.Notes
        FROM Study s
                 JOIN Patient pt ON pt.ID = s.PatientID
                 JOIN Person p ON p.ID = pt.PersonID
                 LEFT JOIN Device d ON d.ID = s.DeviceID
        WHERE s.ID = p_study_id;
END;
$$ LANGUAGE plpgsql;
