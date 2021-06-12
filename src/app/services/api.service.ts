import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  API_URL = 'https://localhost:44303/';
  constructor(private httpClient: HttpClient) {}

  get(path: string, params?: any): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.get(`${this.API_URL}${path}`, {
      headers,
      params: this.toHttpParams(params),
    });
  }

  post(path: string, body = {}): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.post(
      `${this.API_URL}${path}`,
      JSON.stringify(body),
      { headers }
    );
  }

  put(path: string, body = {}): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.put(`${this.API_URL}${path}`, JSON.stringify(body), {
      headers,
    });
  }

  delete(path: string, params?: any): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.delete(`${this.API_URL}${path}`, {
      headers,
      params: this.toHttpParams(params),
    });
  }

  private getHeaders() {
    const headers = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Accept: 'application/json',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
    } as any;

    return headers;
  }

  private toHttpParams(params): HttpParams {
    if (!params) {
      return new HttpParams();
    }
    return Object.getOwnPropertyNames(params).reduce(
      (p, key) => p.set(key, params[key]),
      new HttpParams()
    );
  }
}
