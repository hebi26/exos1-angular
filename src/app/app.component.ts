import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pos : number = 0;
  titre: string = "Exos Angular";
  paragraphe: string = "Angular c'est pas si facile !";
  today: number;
  matieres = ['html', 'css', 'php', 'js', 'jquery', 'sql', 'angular'];
  carrousel = ['./assets/image2.jpg', './assets/image3.jpg', './assets/image4.jpg'];
  i: number =0;

  my_Class: string ="style1";

  list=[
    {'name' : 'pain', clicked : false},
    {'name' : 'lait', clicked : false},
    {'name' : 'beurre', clicked : false},
    {'name' : 'farine', clicked : false}
  ];


  displaydate(){
    this.today = Date.now();
  }
  afficheAlert(){
    alert('Angular c\'est de la bombe !!!');
  }
  walk(){
    if (this.pos==474){
      this.pos =0;
    }
    else{
      this.pos +=79;
    }
    let marcheur = document.getElementById('homme');
    marcheur.style.right= this.pos +"px";
  }
  changeImage(){
    let cadreImage = document.getElementById('box');
    cadreImage.innerHTML = ('<img src="'+this.carrousel[this.i]+'">');
      if(this.i==2){
        this.i =0;
      }
      else{
        this.i++;
    }
  }
  addProduct(newproduct: string){
    let chose = {'name' : newproduct, clicked : false};
  this.list.push(chose);
  }

  toggle(i){
    this.list[i].clicked = true;
  }
}
