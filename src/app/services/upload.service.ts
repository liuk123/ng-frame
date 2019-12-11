import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable()
export class UploadService {

    constructor(
        private http: HttpClient,
        @Inject('BASE_CONFIG') private config
    ){}

    // //demo
    // getUserInfo(){
    //     const url = `${this.config.uri}/api/user`;
    //     return this.http.get(url)
    // }

    httpOptions = {
        headers: new HttpHeaders({
            // 'Authorization': '123',
            // "Content-type": "application/x-www-form-urlencoded"
            // "Content-type": "multipart/form-data"
            // 'Content-Type':  'application/json',
        }),
    };

     /**
     * 上传文件
     * @param data 
     */
    uploadFile(data:FormData){
        const uri=`${this.config.uri}/api/uploadpic`;
        return this.http.post(uri,data,this.httpOptions)
    }
    
    /**
     * 上传文件-显示进度
     * @param data 
     */
    uploadMoreFile(data:FormData){
        const uri = 'http://10.254.193.103:9988/upload'
        const req = new HttpRequest('POST',uri,data,
            {
                reportProgress:true, 
                headers:this.httpOptions.headers
            })
        return this.http.request(req)
    }
}