import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { InnowayService } from "app/services";
import { DetailPageInterface } from "app/interface/detailPageInterface";

declare var swal, _: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, DetailPageInterface {

  employeeTypeService: any;
  id: string;
  item: any;
  itemFields: any = ['$all',{
    category: ["name"]
  }];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public innoway: InnowayService
  ) {
    this.employeeTypeService = innoway.getService('product');
  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      this.setData()
    } else {
      this.alertItemNotFound()
      this.backToList()
    }
  }

  async setData() {
    try {
      this.item = await this.employeeTypeService.get(this.id, {
        fields: this.itemFields
      })

      alert(JSON.stringify(this.item));
    } catch (err) {
      this.alertItemNotFound()
      this.backToList()
    }
  }

  editItem() {
    this.router.navigate(['/products/add', this.id]);
  }

  backToList() {
    this.router.navigate(['/products/list'])
  }

  alertItemNotFound() {
    return swal({
      title: 'Không còn tồn tại',
      type: 'warning',
      timer: 2000
    })
  }
}
