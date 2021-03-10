import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePointItems1612724466100
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'point_items',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isGenerated: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'point_id',
            type: 'uuid',
          },
          {
            name: 'item_id',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_point_id',
            columnNames: ['point_id'],
            referencedTableName: 'points',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'fk_item_id',
            columnNames: ['item_id'],
            referencedTableName: 'items',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('point_items');
  }
}
