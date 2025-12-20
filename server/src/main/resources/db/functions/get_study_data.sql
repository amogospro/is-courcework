CREATE OR REPLACE FUNCTION get_study_data(p_study_id bigint)
RETURNS TABLE (
    study_id bigint,
    patient_full_name varchar,
    device_sn varchar,
    status varchar(20),
    notes varchar(1000)
)
AS $$
BEGIN
    RETURN QUERY
    SELECT s.id,
           concat_ws(' ', p.last_name, p.first_name, p.middle_name),
           d.device_sn,
           s.status,
           s.notes
    FROM study s
             JOIN patient pt ON pt.id = s.patient_id
             JOIN person p ON p.id = pt.person_id
             LEFT JOIN device d ON d.id = s.device_id
    WHERE s.id = p_study_id;
END;
$$ LANGUAGE plpgsql;
