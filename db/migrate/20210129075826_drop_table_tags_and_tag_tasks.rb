class DropTableTagsAndTagTasks < ActiveRecord::Migration[6.0]
  def change
    drop_table :tag_tasks
    drop_table :tags
  end
end
