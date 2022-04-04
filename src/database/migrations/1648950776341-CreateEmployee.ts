import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEmployee1648950776341 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Employee",
                columns: [
                    {
                        name: "id_employee",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "Name",
                        type: "varchar",
                    },
                    {
                        name: "img",
                        type: "bytea",
                    },
                    {
                        name: "rg",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "id_departament",
                        type: "uuid",
                    },
                    /*{
                        name: "CREATED_AT",
                        type: "timestamp",
                        default: "now()"
                    }*/
                ],
                foreignKeys: [
                    {
                        name: "fk_employee_departament",
                        columnNames: ["id_departament"],
                        referencedTableName: "Departaments",
                        referencedColumnNames: ["id_departament"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Employee");
    }

}
