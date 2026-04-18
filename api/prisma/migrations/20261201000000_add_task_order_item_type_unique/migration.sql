-- Deduplicate historical rows before enforcing uniqueness.
-- Policy: keep the canonical row with the lowest `id` per (`order_item_id`, `type`)
-- and remove additional duplicates. Rows with NULL `order_item_id` are excluded.
DELETE duplicate_task
FROM `task` AS duplicate_task
INNER JOIN `task` AS canonical_task
  ON duplicate_task.`order_item_id` = canonical_task.`order_item_id`
  AND duplicate_task.`type` = canonical_task.`type`
  AND duplicate_task.`id` > canonical_task.`id`
WHERE duplicate_task.`order_item_id` IS NOT NULL;

ALTER TABLE `task`
  ADD CONSTRAINT `task_order_item_id_type_key`
  UNIQUE (`order_item_id`, `type`);
