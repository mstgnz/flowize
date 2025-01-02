import { Injectable } from "@angular/core";
import { gql, Mutation, Query } from "apollo-angular";
import { Country } from "./countries.graphql";
import { Region } from "./regions.graphql";

export interface City {
  id: Number
  country_id: Number
  region_id: Number
  name: String
  country: Country
  region: Region
}

interface ResponseArray {
  cities: City[]
}

interface ResponseSingle {
  cities_by_pk: City
}

interface Aggregate {
  cities_aggregate: {
    aggregate: {
      count: number
    }
  }
}

interface InsertMutation {
  insert_cities: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface UpdateMutation {
  update_cities: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface DeleteMutation {
  delete_cities: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

@Injectable()
export class CITY_COUNTRY_ID extends Query<ResponseArray> {
  override document = gql`
  query CITY_COUNTRY_ID($country_id: smallint = 1) {
    cities(where: {country_id: {_eq: $country_id}}) {
      id
      name
    }
  }`;
}

@Injectable()
export class CITIES extends Query<ResponseArray> {
  override document = gql`
  query CITIES($where: cities_bool_exp) {
    cities(where: $where, order_by: {id: asc}) {
      id
      name
      country_id
      region_id
      country{
        id
        name
      }
      region{
        id
        name
      }
    }
  }`;
}

@Injectable()
export class CITY extends Query<ResponseSingle> {
  override document = gql`
  query CITY($id: smallint!) {
    cities_by_pk(id: $id) {
      id
      name
    }
  }`;
}

@Injectable()
export class CITY_CREATE extends Mutation<InsertMutation> {
  override document = gql`
  mutation CITY_CREATE($name:String!, $country_id:smallint!, $region_id:smallint!) {
    insert_cities(objects: {name:$name, country_id:$country_id, region_id:$region_id}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class CITY_UPDATE extends Mutation<UpdateMutation> {
  override document = gql`
  mutation CITY_UPDATE($id: smallint!, $name:String!, $country_id:smallint!, $region_id:smallint!) {
    update_cities(where: {id: {_eq: $id}}, _set: {name:$name, country_id:$country_id, region_id:$region_id}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class CITY_DELETE extends Mutation<DeleteMutation> {
  override document = gql`
  mutation CITY_DELETE($id: smallint!) {
    delete_cities(where: {id: {_eq: $id}}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}