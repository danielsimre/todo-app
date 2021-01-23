class ModifyRefForTasksAndTags < ActiveRecord::Migration[6.0]
  def change
    remove_foreign_key "tags", "tasks"
    remove_foreign_key "tasks", "users"
    add_foreign_key "tags", "tasks", on_delete: :cascade
    add_foreign_key "tasks", "users", on_delete: :cascade
  end
end
