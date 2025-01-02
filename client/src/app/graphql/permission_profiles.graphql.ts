import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";

export interface PermissionProfile {
  id: Number
  name: String
  description: String
  active: Boolean
}

interface ResponseArray {
  permission_profiles: PermissionProfile[]
}

interface ResponseSingle {
  permission_profiles_by_pk: PermissionProfile
}

@Injectable()
export class PERMISSION_PROFILE extends Query<ResponseArray> {
  override document = gql`
  query PERMISSION_PROFILE($where: permission_profiles_bool_exp){
    permission_profiles(where:$where){
      id
      name
      description
      active
    }
  }`;
}