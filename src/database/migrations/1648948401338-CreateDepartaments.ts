import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateDepartaments1648948401338 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Departaments",
                columns: [
                    {
                        name: "id_departament",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "Name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "acronym",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "CREATED_AT",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Departaments");
    }

}
