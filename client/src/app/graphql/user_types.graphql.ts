import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";

export interface UserType {
  id: Number
  name: String
  description: String
  active: Boolean
}

interface ResponseArray {
  user_types: UserType[]
}

interface ResponseSingle {
  user_types_by_pk: UserType
}

@Injectable()
export class USER_TYPES extends Query<ResponseArray> {
  override document = gql`
  query USER_TYPES($where: user_types_bool_exp){
    user_types(where:$where){
      id
      name
      description
      active
    }
  }`;
}