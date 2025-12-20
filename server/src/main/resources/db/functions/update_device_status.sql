CREATE OR REPLACE FUNCTION update_device_status(
    p_device_id bigint,
    p_new_status device_status_enum,
    p_user_id bigint,
    p_comment varchar
)
RETURNS void
AS $$
BEGIN
    UPDATE device
    SET status = p_new_status
    WHERE id = p_device_id;

    IF p_comment IS NOT NULL THEN
        INSERT INTO device_comment (device_id, user_id, comment_text)
        VALUES (p_device_id, p_user_id, p_comment);
    END IF;
END;
$$ LANGUAGE plpgsql;
