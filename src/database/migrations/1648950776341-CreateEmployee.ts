import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEmployee1648950776341 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "funcionario",
                columns: [
                    {
                        name: "id_funcionario",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
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
                        name: "id_departamento",
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
                        name: "funcionario_id_departamento_fkey",
                        columnNames: ["id_departamento"],
                        referencedTableName: "departamento",
                        referencedColumnNames: ["id_departamento"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("funcionario");
    }

}
