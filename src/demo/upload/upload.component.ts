import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  form: FormGroup = this.fb.group({})
  fileList: FileList
  imgSrcs: string[] = []
  uploadProgress:number
  constructor(
    private srv: UploadService,
    private fb: FormBuilder,
    public _d: DomSanitizer
  ) { }

  ngOnInit() {
    
  }

  onSubmit({value,valid},ev){
    if(this.fileList&&this.fileList.length > 0) {
      let formData: FormData = new FormData()
      for(let i=0; i<this.fileList.length; i++){
        const singleFile = this.fileList.item(i)
        formData.append('file',singleFile)
        formData.append('picname','lobby-bg-max-desktop-1440x1120.jpg')
        formData.append('bidroomtype','1234')
      }
      this.srv.uploadMoreFile(formData).subscribe(v=>{
        if(v.type == HttpEventType.UploadProgress){
          this.uploadProgress = Math.round(100 * v.loaded / v.total)
        }else if(v instanceof HttpResponse){
          console.log('Files uploaded!')
        }
      })
    }
  }

  fileChange(ev) {
    this.imgSrcs = []
    this.fileList = ev.srcElement.files
    for(let i = 0; i<this.fileList.length; i++){
      console.log(window.URL.createObjectURL(this.fileList.item(i)))
      this.imgSrcs.push(window.URL.createObjectURL(this.fileList.item(i)))
    }
    console.log(this.imgSrcs)
  }
}
