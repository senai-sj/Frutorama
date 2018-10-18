class CreateRankings < ActiveRecord::Migration[5.0]
  def change
    create_table :rankings do |t|

    	t.integer :score,   null: false
    	t.timestamps :time, null: false
    	t.timestamps
      
    end
  end
end
