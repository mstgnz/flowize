import { Injectable } from "@angular/core";
import { gql, Mutation, Query } from "apollo-angular";
import { District } from "./districts.graphql";

export interface Town {
  id: Number
  district_id: Number
  name: String
  latitude: Number
  longitude: Number
  district: District
}

interface ResponseArray {
  towns: Town[]
}

interface ResponseSingle {
  towns_by_pk: Town
}

interface Aggregate {
  towns_aggregate: {
    aggregate: {
      count: number
    }
  }
}

interface InsertMutation {
  insert_towns: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface UpdateMutation {
  update_towns: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface DeleteMutation {
  delete_towns: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

@Injectable()
export class TOWNS extends Query<ResponseArray> {
  override document = gql`
    query TOWNS($where: towns_bool_exp){
      towns(where: $where) {
        id
        district_id
        name
        latitude
        longitude
        district{
          id
          name
        }
      }
    }
  `;
}

@Injectable()
export class TOWN_DISTRICT_ID extends Query<ResponseArray>{
  override document = gql`
  query TOWN_DISTRICT_ID($district_id: Int!) {
    towns(where: {district_id: {_eq: $district_id}}) {
      id
      district_id
      name
      latitude
      longitude
      district{
        id
        name
      }
    }
  }`;
}

@Injectable()
export class TOWN_ID extends Query<ResponseSingle>{
  override document = gql`
  query TOWN_ID($id: Int!) {
    towns_by_pk(id: $id) {
      id
      district_id
      name
      latitude
      longitude
      district{
        id
        name
      }
    }
  }`;
}

@Injectable()
export class TOWN_CREATE extends Mutation<InsertMutation> {
  override document = gql`
  mutation TOWN_CREATE($district_id:Int!, $name:String!) {
    insert_towns(objects: {district_id:$district_id, name:$name}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class TOWN_UPDATE extends Mutation<UpdateMutation> {
  override document = gql`
  mutation TOWN_UPDATE($id: Int!, $district_id:Int!, $name:String!) {
    update_towns(where: {id: {_eq: $id}}, _set: {district_id:$district_id, name:$name}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class TOWN_DELETE extends Mutation<DeleteMutation> {
  override document = gql`
  mutation TOWN_DELETE($id: Int!) {
    delete_towns(where: {id: {_eq: $id}}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}