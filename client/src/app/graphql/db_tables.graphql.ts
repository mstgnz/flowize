import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";

export interface DbTable {
  id: Number
  name: String
}

interface ResponseArray {
  db_tables: DbTable[]
}

interface ResponseSingle {
  db_tables_by_pk: DbTable
}

@Injectable()
export class DB_TABLE extends Query<ResponseArray> {
  override document = gql`
  query DB_TABLE($where: db_tables_bool_exp){
    db_tables(where:$where){
      id
      name
    }
  }`;
}