class ChangeColumnsToNotNullable < ActiveRecord::Migration[6.0]
  def change
    change_column_null :tasks, :title, false
    change_column_null :tasks, :description, false
    change_column_null :tasks, :status, false

    change_column_null :users, :username, false

  end
end
