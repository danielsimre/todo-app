class CreateJoinTableTagTask < ActiveRecord::Migration[6.0]
  def change
    remove_foreign_key :tags, :tasks
    create_table :tag_tasks do |t|
      t.belongs_to :tag, index: true, null: false, foreign_key: true
      t.belongs_to :task, index: true, null: false, foreign_key: true

      t.timestamps
    end
    remove_column :tags, :task_id, :bigint
  end
end
