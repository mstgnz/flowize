import { Injectable } from "@angular/core";
import { gql, Mutation, Query } from "apollo-angular";
import { City } from "./cities.graphql";
import { Zone } from "./zones.graphql";

export interface District {
  id: Number
  city_id: Number
  zone_id: Number
  name: String
  city: City
  zone: Zone
}

interface ResponseArray {
  districts: District[]
}

interface ResponseSingle {
  districts_by_pk: District
}

interface Aggregate {
  districts_aggregate: {
    aggregate: {
      count: number
    }
  }
}

interface InsertMutation {
  insert_districts: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface UpdateMutation {
  update_districts: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface DeleteMutation {
  delete_districts: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

@Injectable()
export class DISTRICT_CITY_ID extends Query<ResponseArray> {
  override document = gql`
  query DISTRICT_CITY_ID($city_id: smallint!) {
    districts(where: {city_id: {_eq: $city_id}}, order_by: {name: asc}) {
      id
      city_id
      name
      city{
        id
        name
      }
      zone{
        id
        name
      }
    }
  }`;
}

@Injectable()
export class DISTRICTS extends Query<ResponseArray> {
  override document = gql`
  query DISTRICTS($where: districts_bool_exp) {
    districts(where: $where, order_by: {name: asc}) {
      id
      city_id
      name
      city{
        id
        name
        country_id
      }
      zone{
        id
        name
      }
    }
  }`;
}

@Injectable()
export class DISTRICT extends Query<ResponseSingle> {
  override document = gql`
  query DISTRICT($id: Int!) {
    districts_by_pk(id: $id) {
      id
      city_id
      name
      city{
        id
        name
        country_id
      }
      zone{
        id
        name
      }
    }
  }`;
}

@Injectable()
export class DISTRICT_CREATE extends Mutation<InsertMutation> {
  override document = gql`
  mutation DISTRICT_CREATE($city_id:smallint!, $name:String!) {
    insert_districts(objects: {city_id:$city_id, name:$name}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class DISTRICT_UPDATE extends Mutation<UpdateMutation> {
  override document = gql`
  mutation DISTRICT_UPDATE($id: Int!, $city_id:smallint!, $name:String!) {
    update_districts(where: {id: {_eq: $id}}, _set: {city_id:$city_id, name:$name}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class DISTRICT_DELETE extends Mutation<DeleteMutation> {
  override document = gql`
  mutation DISTRICT_DELETE($id: Int!) {
    delete_districts(where: {id: {_eq: $id}}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}