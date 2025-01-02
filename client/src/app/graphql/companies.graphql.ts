import { Injectable } from "@angular/core";
import { gql, Mutation, Query } from "apollo-angular";

import { User } from "./users.graphql";
import { Address } from "./addresses.graphql";
import { CompanyTranslation } from "./company_translations.graphql";

export interface Company {
  id: Number
  parent_id: Number
  address_id: Number
  logo_id: Number
  competent_id: Number
  tax_no: Number
  tax_office: String
  code: String
  created_at: Date
  updated_at: Date
  deleted_at: Date
  parent: Company
  address: Address
  competent: User
  company_translations: CompanyTranslation[]
}

interface ResponseArray {
  companies: Company[]
}

interface ResponseSingle {
  address_types_by_pk: Company
}

interface Aggregate {
  companies_aggregate: {
    aggregate: {
      count: number
    }
  }
}

interface InsertMutation {
  insert_companies: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface UpdateMutation {
  update_companies: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface DeleteMutation {
  delete_companies: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

@Injectable()
export class COMPANY_COUNT extends Query<Aggregate> {
  override document = gql`
  query COMPANY_COUNT($where: companies_bool_exp) {
    companies_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }`;
}

@Injectable()
export class COMPANIES extends Query<ResponseArray> {
  override document = gql`
  query COMPANIES($where: companies_bool_exp, $limit: Int, $offset: Int) {
    companies(where: $where, limit: $limit, offset: $offset, order_by: {id: desc}) {
      id
      parent_id
      address_id
      logo_id
      competent_id
      tax_no
      tax_office
      code
      created_at
      updated_at
      deleted_at
      company_translations{
        id
        title
        description
      }
      parent{
        id
        tax_no
        tax_office
        code
      }
      address{
        id
        address
      }
      competent{
        id
        firstname
        lastname
      }
    }
  }`;
}

@Injectable()
export class COMPANY extends Query<ResponseSingle> {
  override document = gql`
  query COMPANY($id: Int!) {
    companies_by_pk(id: $id) {
      id
      parent_id
      address_id
      logo_id
      competent_id
      tax_no
      tax_office
      code
      created_at
      updated_at
      deleted_at
      company_translations{
        id
        title
        description
      }
      parent{
        id
        tax_no
        tax_office
        code
      }
      address{
        id
        address
      }
      competent{
        id
        firstname
        lastname
      }
    }
  }`;
}

@Injectable()
export class COMPANIES_SELECT extends Query<ResponseArray> {
  override document = gql`
  query COMPANIES_SELECT($where: companies_bool_exp) {
    companies(where: $where) {
      id
      company_translations{
        id
        title
        description
      }
    }
  }`;
}

@Injectable()
export class COMPANY_CREATE extends Mutation<InsertMutation> {
  override document = gql`
  mutation COMPANY_CREATE($name: String!, $tax_no: bigint!, $tax_office: String! $active:Boolean, $policy_link:String, $web_service:String, $tax_name:String, $ama_code:Int, $sap_code:bigint, $representative:String, $note:String) {
    insert_companies(objects: {name:$name, tax_no:$tax_no, tax_office:$tax_office, active:$active, policy_link:$policy_link, web_service:$web_service, tax_name:$tax_name, ama_code:$ama_code, sap_code:$sap_code, representative:$representative, note:$note}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class COMPANY_UPDATE extends Mutation<UpdateMutation> {
  override document = gql`
  mutation COMPANY_UPDATE($id: Int!, $name: String!, $tax_no: bigint!, $tax_office: String!, $active:Boolean, $policy_link:String, $web_service:String, $tax_name:String, $ama_code:Int, $sap_code:bigint, $representative:String, $note:String) {
    update_companies(where: {id: {_eq: $id}}, _set: {name:$name, tax_no:$tax_no, tax_office:$tax_office, active:$active, policy_link:$policy_link, web_service:$web_service, tax_name:$tax_name, ama_code:$ama_code, sap_code:$sap_code, representative:$representative, note:$note}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class COMPANY_DELETE extends Mutation<DeleteMutation> {
  override document = gql`
  mutation COMPANY_DELETE($id: Int!) {
    delete_companies(where: {id: {_eq: $id}}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}