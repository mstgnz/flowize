import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";
import { Language } from "./languages.graphql";

export interface DocumentType {
  id: Number
  language_id: Number
  name: String
  active: Boolean
  language: Language
}

interface ResponseArray {
  document_types: DocumentType[]
}

interface ResponseSingle {
  document_types_by_pk: DocumentType
}

@Injectable()
export class DOCUMENT_TYPES extends Query<ResponseArray> {
  override document = gql`
  query DOCUMENT_TYPES($where: document_types_bool_exp){
    document_types(where:$where){
      id
      language_id
      name
      active
    }
  }`;
}