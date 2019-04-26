import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
    Res:Number;
  constructor() { }
  Addition(N1, N2)
  {
    
    this.Res=N1+N2;
    return this.Res;
  }
}
