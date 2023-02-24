import { Component, OnInit } from '@angular/core';
import { GoogletranslateService } from './services/googletranslate.service';
import { FormControl } from '@angular/forms';
import { GoogleObj } from './solution';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  private translateBtn: any;
  private content: any;
  constructor(private google: GoogletranslateService) {
  }

  ngOnInit() {
    
    this.translateBtn = document.getElementById('translatebtn');
    this.content = document.getElementById('content');
  }

   send() {
    
    const googleObj: GoogleObj = {
      q: this.content.innerHTML,
      target: 'es'
    };

    this.translateBtn.disabled = true;

    this.google.translate(googleObj).subscribe(
      (res: any) => {
        this.translateBtn.disabled = false;
        var translated = res.data.translations[0].translatedText;
        console.log(translated);
        this.content.innerHTML = translated;
      },
      err => {
        console.log(err);
      }
    );
  }


}