import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";

export interface Language {
  id: Number
  name: String
  code: String
  active: Boolean
}

interface ResponseArray {
  languages: Language[]
}

interface ResponseSingle {
  languages_by_pk: Language
}

@Injectable()
export class LANGUAGES extends Query<ResponseArray> {
  override document = gql`
  query LANGUAGES($where: languages_bool_exp){
    languages(where:$where){
      id
      name
      code
      active
    }
  }`;
}