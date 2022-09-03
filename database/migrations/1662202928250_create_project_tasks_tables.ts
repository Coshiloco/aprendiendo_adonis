import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProjectTasks extends BaseSchema {
  protected tableName = 'project_tasks'

  public async up () {
    this.schema.table(this.tableName, (table) => {
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
    })
  }
}
