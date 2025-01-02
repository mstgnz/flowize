import { Injectable } from "@angular/core";
import { gql, Mutation, Query } from "apollo-angular";

export interface Region {
  id: Number
  name: String
}

interface ResponseArray {
  regions: Region[]
}

interface Aggregate {
  regions_aggregate: {
    aggregate: {
      count: number
    }
  }
}

interface InsertMutation {
  insert_regions: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface UpdateMutation {
  update_regions: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

interface DeleteMutation {
  delete_regions: {
    affected_rows: number
    returning: [{
      id: Number
    }]
  }
}

@Injectable()
export class REGIONS extends Query<ResponseArray>{
  override document = gql`
  query REGIONS($where: regions_bool_exp) {
    regions(where:$where, order_by: {id: asc}) {
      id
      name
    }
  }`;
}

@Injectable()
export class REGION_CREATE extends Mutation<InsertMutation> {
  override document = gql`
  mutation REGION_CREATE($name:String!) {
    insert_regions(objects: {name:$name}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class REGION_UPDATE extends Mutation<UpdateMutation> {
  override document = gql`
  mutation REGION_UPDATE($id: smallint!, $name:String!) {
    update_regions(where: {id: {_eq: $id}}, _set: {name:$name}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}

@Injectable()
export class REGION_DELETE extends Mutation<DeleteMutation> {
  override document = gql`
  mutation REGION_DELETE($id: smallint!) {
    delete_regions(where: {id: {_eq: $id}}) {
      affected_rows
      returning {
        id
      }
    }
  }`;
}