import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {


  afuConfig = {
    uploadAPI:  {
      url:"https://deepgoat.com/api/post.php",
      params: {
        'page': '1'
      },
     
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  docUpload(event: Event)
  {
    console.log('File Uploader Complete');
  }
}
