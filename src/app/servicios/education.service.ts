import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getEducacion():Observable<Education[]>{
    return this.http.get<Education[]>(`${this.apiServerUrl}/educacion/all`);
  }

  public addEducacion(education: Education):Observable<Education>{
    return this.http.post<Education>(`${this.apiServerUrl}/educacion/add`, education);
  }

  public updateEducacion(education: Education):Observable<Education>{
    return this.http.put<Education>(`${this.apiServerUrl}/educacion/update`, education);
  }

  public deleteEducacion(educationId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/delete/${educationId}`);
  }
}
