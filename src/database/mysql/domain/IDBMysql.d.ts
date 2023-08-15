export interface IDBMysql {
  query: <T>(sql: string) => Promise<T>
}
