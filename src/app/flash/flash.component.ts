import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Subject } from 'rxjs';
import { NgFlashMessageService } from 'ng-flash-messages';
import { FlashMessage } from 'angular-flash-message';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css'],

})
export class FlashComponent implements OnInit {
  title = 'FLASH MESSAGES...';

  constructor(private ngFlashMessageService: NgFlashMessageService,private modalService: NgbModal)  {}

  ngOnInit() {
    console.log("@hii")
   /* this.flashMessagesService.show('My component has initialized!', {
      classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
      timeout: 1000, // Default is 3000
    });*/
    this.ngFlashMessageService.showFlashMessage({
      // Array of messages each will be displayed in new line
      messages: ["DANGER FLASH MESSAGE..."], 
      // Whether the flash can be dismissed by the user defaults to false
      dismissible: true, 
      // Time after which the flash disappears defaults to 2000ms
      timeout: false,
      // Type of flash message, it defaults to info and success, warning, danger types can also be used
      type: 'success'
    });
  }
  closeResult: string;


  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
