import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageBehaviorService {
  public $whatsappShow = new BehaviorSubject<boolean>(true);
  constructor() { }
}
