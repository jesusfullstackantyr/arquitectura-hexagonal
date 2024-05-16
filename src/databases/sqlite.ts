import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('src/databases/sqlite/esales.sqlite');

type QueryType = 'run' | 'all' | 'get';

const queryFunctions:Record<QueryType,Function> = {
    'run':db.run.bind(db),
    'all':db.all.bind(db),
    'get':db.get.bind(db)
};

export async function query (
    sql:string,
    params:any[],
    queryType:QueryType
):Promise<any> {

    return new Promise<any>((resolve, reject) => {
        const callback = function (this: any, err: Error | null, result: any):any {
            if (err) {
                reject(err);
            }
            queryType === 'run' ? resolve(this) : resolve(result);
        };

        queryFunctions[queryType](sql,params,callback);
    });
}