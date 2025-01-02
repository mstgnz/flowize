import { Injectable } from "@angular/core";
import { gql, Mutation, Query } from "apollo-angular";

export interface Country {
  id: Number
  name: String
}

interface ResponseArray {
  countries: Country[]
}

interface Aggregate {
  countries_aggregate: {
    aggregate: {
      count: number
    }
  }
}

interface InsertMutation {
  insert_countries: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface UpdateMutation {
  update_countries: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface DeleteMutation {
  delete_countries: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

@Injectable()
export class COUNTRIES extends Query<ResponseArray> {
  override document = gql`
  query COUNTRIES($where: countries_bool_exp) {
    countries(where:$where, order_by: {id: asc}) {
      id
      name
    }
  }`;
}

@Injectable()
export class COUNTRY_CREATE extends Mutation<InsertMutation> {
  override document = gql`
  mutation COUNTRY_CREATE($name:String!, $code:String, $flag:String, $tax_ratio:numeric) {
    insert_countries(objects: {name:$name, code:$code, flag:$flag, tax_ratio:$tax_ratio}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class COUNTRY_UPDATE extends Mutation<UpdateMutation> {
  override document = gql`
  mutation COUNTRY_UPDATE($id: smallint!, $name:String!, $code:String, $flag:String, $tax_ratio:numeric) {
    update_countries(where: {id: {_eq: $id}}, _set: {name:$name, code:$code, flag:$flag, tax_ratio:$tax_ratio}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class COUNTRY_DELETE extends Mutation<DeleteMutation> {
  override document = gql`
  mutation COUNTRY_DELETE($id: smallint!) {
    delete_countries(where: {id: {_eq: $id}}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}