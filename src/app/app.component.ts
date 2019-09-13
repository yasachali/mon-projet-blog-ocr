import { Component } from '@angular/core';



@Component({
  /*balise pour afficher le compoment*/
  selector: 'app-root',
  /*url  du template pour le component*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  post = [
    {
      title: 'Mon premier post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression',
      loveIts: 5,
      create_at: '10/24/2017'
    },
    {
      title: 'Mon deuxième post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression',
      loveIts: 15,
      create_at: '10/24/2017'
    },
    {
      title: 'Encore un post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression',
      loveIts: -2,
      create_at: '10/24/2017'
    },
  ];
  constructor() {
  }
}
