import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap/index';

export class CardTypesModalContext extends BSModalContext {
  public type: string;
}

@Component({
  selector: 'app-modal-card-types',
  templateUrl: './modal-card-types.component.html',
  styleUrls: ['./modal-card-types.component.scss']
})
export class ModalCardTypesComponent implements OnInit,CloseGuard, ModalComponent<CardTypesModalContext> {

  context: CardTypesModalContext;

  constructor(
    public dialog: DialogRef<CardTypesModalContext>
  ) { 
    
  }

  ngOnInit() {
    this.context = this.dialog.context;
    this.dialog.setCloseGuard(this);
  }

  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return false;
  }

  closeModal(){
    this.dialog.close();
  }

  add(){
    this.dialog.close(this.context);
  }

}
