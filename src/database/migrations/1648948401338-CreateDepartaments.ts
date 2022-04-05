import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateDepartaments1648948401338 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "departamento",
                columns: [
                    {
                        name: "id_departamento",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "sigla",
                        type: "varchar",
                        isUnique: true
                    },
                   /* {
                        name: "CREATED_AT",
                        type: "timestamp",
                        default: "now()"
                    }*/
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("departamento");
    }

}
