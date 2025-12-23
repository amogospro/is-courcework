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
