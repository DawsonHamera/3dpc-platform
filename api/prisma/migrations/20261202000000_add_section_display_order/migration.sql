-- Add nullable display_order column used by products section ordering
ALTER TABLE `section`
  ADD COLUMN `display_order` INTEGER NULL;
