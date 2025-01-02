import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { Permission } from '../../../interfaces/permission.interface';
import { CompanyListSearch } from '../../../interfaces/search.interface';
import { Company, COMPANIES, COMPANY_COUNT } from '../../../graphql/companies.graphql';

@Component({
  selector: 'app-company-list',
  standalone: false,
  templateUrl: './company-list.component.html',
  styles: ``,
  providers: [
    COMPANIES, COMPANY_COUNT
  ]
})
export class CompanyListComponent implements OnInit {

  public companies: Company[] = []
  public dataCount: number = 0
  public limit: number = 20
  public offset: number = 0
  public where: Object = {}
  public permission: Permission = {} as Permission
  public search: CompanyListSearch = {} as CompanyListSearch

  constructor(
    private getCompanies: COMPANIES,
    private countCompanies: COMPANY_COUNT,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.permission = this.authService.permission('admin', 'CompanyListComponent')

    // companies
    this.setOffset(this.offset)
  }

  setOffset(offset: number) {
    this.where = {
      "company_translations": {
        "language_id": {
          "_eq": 1
        }
      }
    }
    // Get Count and Calculate
    this.countCompanies.watch(
      { "where": this.where },
      { fetchPolicy: "no-cache" }
    ).valueChanges.subscribe(result => {
      this.dataCount = result.data.companies_aggregate.aggregate.count
    })
    // Get Companies
    this.offset = offset
    this.getCompanies.watch(
      { "where": this.where, "limit": this.limit, "offset": this.offset },
      { fetchPolicy: "no-cache" }
    ).valueChanges.subscribe(result => {
      this.companies = result.data.companies
      console.log(this.companies)
    })
  }

  searchClear() {
    this.search = {} as CompanyListSearch
    this.where = {}
    this.setOffset(this.offset)
  }

  searchChange() {
    this.where = {
      "company_translations": {
        "language_id": {
          "_eq": 1
        }
      }
    }
    this.offset = 0
    if (this.search.name && this.search.name.length) {
      Object.assign(this.where, { "name": { "_ilike": `%${this.search.name}%` } })
    }
    if (this.search.city && this.search.city.length) {
      Object.assign(this.where, { "address": { "city": { "name": { "_ilike": `%${this.search.city}%` } } } })
    }
    if (this.search.district && this.search.district.length) {
      Object.assign(this.where, { "address": { "district": { "name": { "_ilike": `%${this.search.district}%` } } } })
    }
    if (this.search.code) {
      Object.assign(this.where, { "code": { "_eq": this.search.code } })
    }
    if (this.search.tax_no) {
      Object.assign(this.where, { "tax_no": { "_eq": this.search.tax_no } })
    }
    this.setOffset(this.offset)
  }
}
