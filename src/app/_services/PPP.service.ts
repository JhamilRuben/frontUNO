import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PPP } from '../_models/PPP.model';


@Injectable({
  providedIn: 'root'
})
export class PPPService {

  private baseUrl = 'http://ec2-18-206-140-180.compute-1.amazonaws.com:9090/api/ppps/';
  private baseUrlTutor = 'http://ec2-18-206-140-180.compute-1.amazonaws.com:9090/api/ppps/idTutor';
  private baseUrlPra = 'http://ec2-18-206-140-180.compute-1.amazonaws.com:9090/api/ppps/idPracticante';

  constructor(private http: HttpClient) { }
 
  // public getAllTutoriales():Observable<any>{
  //   return this.http.get(this.API_URL);
  // }     

  getAll(): Observable<PPP[]> {
    return this.http.get<PPP[]>(this.baseUrl);
  }

  get(id: any): Observable<PPP> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByNombre(nombre: any): Observable<PPP[]> {
    return this.http.get<PPP[]>(`${this.baseUrl}?nombre=${nombre}`);
  }

  findByIddd(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrlTutor}/${id}`);
  }
  findByIdddPra(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrlPra}/${id}`);
  }

}

