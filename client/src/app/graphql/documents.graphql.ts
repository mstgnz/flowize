import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";
import { Company } from "./companies.graphql";
import { DocumentType } from "./document_types.graphql";

export interface Document {
  id: Number
  company_id: Number
  document_type_id: Number
  name: String
  document: String
  active: Boolean
  created_at: Date
  updated_at: Date
  deleted_at: Date
  company: Company
  document_type: DocumentType
}

interface ResponseArray {
  documents: Document[]
}

interface ResponseSingle {
  documents_by_pk: Document
}

@Injectable()
export class DOCUMENTS extends Query<ResponseArray> {
  override document = gql`
  query DOCUMENTS($where: documents_bool_exp){
    documents(where:$where){
      id
      name
      description
      active
    }
  }`;
}