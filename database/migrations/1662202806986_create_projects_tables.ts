import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Projects extends BaseSchema {
  protected tableName = 'projects'

  public async up () {
    this.schema.table(this.tableName, (table) => {
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
    })
  }
}
