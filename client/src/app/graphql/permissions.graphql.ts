import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";
import { PermissionProfile } from "./permission_profiles.graphql";
import { DbTable } from "./db_tables.graphql";

export interface Permission {
  id: Number
  permission_profile_id: Number
  db_table_id: Number
  create: Boolean
  read: Boolean
  update: Boolean
  delete: Boolean
  permission_profile: PermissionProfile
  db_table: DbTable
}

interface ResponseArray {
  permissions: Permission[]
}

interface ResponseSingle {
  permissions_by_pk: Permission
}

@Injectable()
export class PERMISSION extends Query<ResponseArray> {
  override document = gql`
  query PERMISSION($where: permissions_bool_exp){
    permissions(where:$where){
      id
      name
      description
      active
    }
  }`;
}