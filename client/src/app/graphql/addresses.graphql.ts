import { Injectable } from "@angular/core";
import { gql, Mutation, Query } from "apollo-angular";

import { Country } from "./countries.graphql";
import { City } from "./cities.graphql";
import { District } from "./districts.graphql";
import { Town } from "./towns.graphql";

export interface Address {
  id: Number
  country_id: Number
  city_id: Number
  district_id: Number
  town_id: Number
  address: String
  latitude: Number
  longitude: Number
  describe: String
  active: Boolean
  created_at: Date
  updated_at: Date
  deleted_at: Date
  country: Country
  city: City
  district: District
  town: Town
}

interface ResponseArray {
  addresses: Address[]
}

interface ResponseSingle {
  addresses_by_pk: Address
}

interface Aggregate {
  addresses_aggregate: {
    aggregate: {
      count: number
    }
  }
}

interface InsertMutation {
  insert_addresses: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface UpdateMutation {
  update_addresses: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface DeleteMutation {
  delete_addresses: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

@Injectable()
export class ADDRESS_COUNT extends Query<Aggregate> {
  override document = gql`
  query ADDRESS_COUNT($where: addresses_bool_exp) {
    addresses_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }`;
}

@Injectable()
export class ADDRESSES extends Query<ResponseArray> {
  override document = gql`
  query ADDRESSES($where: addresses_bool_exp){
    addresses(where:$where){
      id
      country_id
      city_id
      district_id
      town_id
      address
      latitude
      longitude
      describe
      active
      created_at
      updated_at
      deleted_at
      country{
        id
        name
      }
      city{
        id
        name
      }
      district{
        id
        name
      }
      town{
        id
        name
      }
    }
  }`;
}

@Injectable()
export class ADDRESS_CREATE extends Mutation<InsertMutation> {
  override document = gql`
  mutation ADDRESS_CREATE($company_id:Int!, $email:String! $active:Boolean!, $priority:smallint!) {
    insert_addresses(objects: {company_id:$company_id, email:$email, active:$active, priority:$priority}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class ADDRESS_UPDATE extends Mutation<UpdateMutation> {
  override document = gql`
  mutation ADDRESS_UPDATE($id: Int!, $company_id:Int!, $email:String!, $active:Boolean!, $priority:smallint!) {
    update_addresses(where: {id: {_eq: $id}}, _set: {company_id:$company_id, email:$email, active:$active, priority:$priority}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class ADDRESS_DELETE extends Mutation<DeleteMutation> {
  override document = gql`
  mutation ADDRESS_DELETE($id: Int!) {
    delete_addresses(where: {id: {_eq: $id}}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}