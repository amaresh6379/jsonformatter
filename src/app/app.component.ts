import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FlexLayoutModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'jsonformatter';
  inputJson: string = '';
  outputJson: string = '';
  errorMessage: string = '';
  jsonLength: number = 0;
  splitedJson1: string = '';
  splitedJson2: string = '';
  splitCondition: boolean = false;

  formatJson(){
    try{
      const parsedJson  = JSON.parse(this.inputJson);
      this.outputJson = JSON.stringify(parsedJson,null, 2);
      this.jsonLength = JSON.stringify(this.inputJson).length;
      this.errorMessage='';
    }catch(err){
      this.errorMessage = 'Invalid json type.Please check the input!'
    }
  }

  splitJson(){
    this.splitCondition = true;
    let jsonstring = this.inputJson;
    if( jsonstring.length > 30000){
      this.splitedJson1 = jsonstring.substring(0,30000);
      this.splitedJson2 = jsonstring.substring(30000, jsonstring.length);
      this.outputJson = this.splitedJson1;
    }
  }

 

}
