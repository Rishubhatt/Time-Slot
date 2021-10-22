import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

postjobs = { 
  job_type:'',
  first:'',
  last:'',
  number:''
}

  constructor() { }
}
