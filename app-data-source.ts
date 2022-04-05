import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "57006949",
    database: "evoSystems",
    entities: ["src/entities/*.ts"],
    migrations: ["src/migration/**/*.ts"],
})
