import { Injectable } from "@angular/core";
import { gql, Mutation, Query } from "apollo-angular";
import { Company } from "./companies.graphql";
import { Language } from "./languages.graphql";

export interface CompanyTranslation {
  id: Number
  company_id: Number
  language_id: Number
  title: String
  description: String
  company: Company
  language: Language
}

interface ResponseArray {
  company_translations: CompanyTranslation[]
}

interface ResponseSingle {
  company_translations_by_pk: CompanyTranslation
}

interface Aggregate {
  company_translations_aggregate: {
    aggregate: {
      count: number
    }
  }
}

interface InsertMutation {
  insert_company_translations: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface UpdateMutation {
  update_company_translations: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface DeleteMutation {
  delete_company_translations: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

@Injectable()
export class COMPANY_TRANSLATION_COUNT extends Query<Aggregate> {
  override document = gql`
  query COMPANY_TRANSLATION_COUNT($where: company_translations_bool_exp) {
    company_translations_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }`;
}

@Injectable()
export class company_translations extends Query<ResponseArray> {
  override document = gql`
  query company_translations($where: company_translations_bool_exp){
    company_translations(where:$where){
      id
      company_id
      language_id
      title
      description
      language{
        id
        name
      }
    }
  }`;
}

@Injectable()
export class COMPANY_TRANSLATION_CREATE extends Mutation<InsertMutation> {
  override document = gql`
  mutation COMPANY_TRANSLATION_CREATE($company_id:Int!, $email:String! $active:Boolean!, $priority:smallint!) {
    insert_company_translations(objects: {company_id:$company_id, email:$email, active:$active, priority:$priority}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class COMPANY_TRANSLATION_UPDATE extends Mutation<UpdateMutation> {
  override document = gql`
  mutation COMPANY_TRANSLATION_UPDATE($id: Int!, $company_id:Int!, $email:String!, $active:Boolean!, $priority:smallint!) {
    update_company_translations(where: {id: {_eq: $id}}, _set: {company_id:$company_id, email:$email, active:$active, priority:$priority}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class COMPANY_TRANSLATION_DELETE extends Mutation<DeleteMutation> {
  override document = gql`
  mutation COMPANY_TRANSLATION_DELETE($id: Int!) {
    delete_company_translations(where: {id: {_eq: $id}}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}