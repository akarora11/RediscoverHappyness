import { Inject, Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class FeedBackService{
    baseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    private async request(method: string , url : string, data?: any){
        // const token = await this.authService.currentUserValue.token;

        // console.log('request ' + JSON.stringify(data));
        const result = this.http.request(method, url, {
            body: data,
            responseType: 'json',
            observe: 'body',
        });
        return new Promise<any>((resolve, reject) => {
            result.subscribe(resolve as any, reject as any);
        });
    }

    postFeedback(feedbackForm: any) {
        return this.request('post', this.baseUrl + 'feedback/create', feedbackForm );
    }

}