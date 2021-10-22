import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'digital';
 closeResult = '';
  createForm: FormGroup;
  red = false;
    red1 = false;
      red2 = false;
        red3 = false;
          red4 = false;
            red5 = false;
              red6 = false;
                red7 = false;
  black = true;
   black1 = true;
   black2 = true;
    black3 = true;
     black4 = true;
      black5 = true;
       black6 = true;
        black7 = true;

  constructor(public authService: AuthserviceService, private fb:FormBuilder, private modalService: NgbModal,){
    this.createForm = this.fb.group({
        job_type: ['', Validators.required],
    })    
  }
 
   ngOnInit(): void {       
 
  }

  open(content: any) {    
    
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
      return `with: ${reason}`;
    }
  }
  

  save(){
  console.log(this.authService.postjobs);


    if(this.authService.postjobs.job_type == "1"){
      this.red=true;
      this.black=false;
    

     
    }
    else if(this.authService.postjobs.job_type == "2"){
      this.red1=true;
      this.black1=false;
    }
        else if(this.authService.postjobs.job_type == "3"){
   this.red2=true;
      this.black2=false;
    }
        else if(this.authService.postjobs.job_type == "4"){
      this.red3=true;
      this.black3=false;
    }
        else if(this.authService.postjobs.job_type == "5"){
      this.red4=true;
      this.black4=false;
    }
        else if(this.authService.postjobs.job_type == "6"){
     this.red5=true;
      this.black5=false;
    }
    else if(this.authService.postjobs.job_type == "7"){
     this.red6=true;
      this.black6=false;
    }
    else{
      this.red7=true;
      this.black7=false;
    }
}

  
 
}
