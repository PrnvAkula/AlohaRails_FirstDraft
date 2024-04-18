const oracledb = require('oracledb');

async function run() {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: "system",
            password: "dbms123",
            connectString: "172.16.116.60/XE"
        });

        const sql = `
            CREATE TABLE trains (
                id NUMBER GENERATED ALWAYS AS IDENTITY,
                name VARCHAR2(100) NOT NULL,
                origin VARCHAR2(100) NOT NULL,
                destination VARCHAR2(100) NOT NULL,
                departure_time TIMESTAMP NOT NULL,
                PRIMARY KEY (id)
            )
        `;

        await connection.execute(sql);

        console.log("Table created successfully");
    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}

run();