import { Injectable } from "@angular/core";
import { gql, Mutation, Query } from "apollo-angular";

export interface Zone {
  id: Number
  name: String
}

interface ResponseArray {
  zones: Zone[]
}

interface Aggregate {
  zones_aggregate: {
    aggregate: {
      count: number
    }
  }
}

interface InsertMutation {
  insert_zones: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface UpdateMutation {
  update_zones: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface DeleteMutation {
  delete_zones: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

@Injectable()
export class ZONES extends Query<ResponseArray> {
  override document = gql`
  query ZONES($where: zones_bool_exp) {
    zones(where:$where, order_by: {id: asc}) {
      id
      name
    }
  }`;
}

@Injectable()
export class ZONE_CREATE extends Mutation<InsertMutation> {
  override document = gql`
  mutation ZONE_CREATE($name:String!) {
    insert_zones(objects: {name:$name}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class ZONE_UPDATE extends Mutation<UpdateMutation> {
  override document = gql`
  mutation ZONE_UPDATE($id: smallint!, $name:String!) {
    update_zones(where: {id: {_eq: $id}}, _set: {name:$name}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class ZONE_DELETE extends Mutation<DeleteMutation> {
  override document = gql`
  mutation ZONE_DELETE($id: smallint!) {
    delete_zones(where: {id: {_eq: $id}}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}