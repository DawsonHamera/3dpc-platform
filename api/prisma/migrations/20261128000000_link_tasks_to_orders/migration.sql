-- Add nullable relation from task to order_item with SET NULL behavior
ALTER TABLE `task`
  ADD COLUMN `order_item_id` INTEGER NULL;

ALTER TABLE `task`
  ADD INDEX `task_order_item_id_idx`(`order_item_id`);

ALTER TABLE `task`
  ADD CONSTRAINT `task_order_item_id_fkey`
    FOREIGN KEY (`order_item_id`) REFERENCES `order_item`(`id`)
    ON DELETE SET NULL
    ON UPDATE NO ACTION;
