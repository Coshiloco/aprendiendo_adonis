import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProjectUsers extends BaseSchema {
  protected tableName = 'project_users'

  public async up () {
    this.schema.table(this.tableName, (table) => {
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
    })
  }
}
