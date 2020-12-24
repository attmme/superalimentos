import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Aplicació web';
  name = new FormControl('');
  diaryMenu: Object[] = [{}]
  afegirProducte = false;
  

  public newProduct(nom, calories, imatge) {
    this.afegirProducte = !this.afegirProducte;

    let newElement = {
      name: nom,
      calories: calories,
      image: imatge,
      quantity: 0
    }

    this.foods.push(newElement);
  }

  public producteLlista(objecte) {
    // Si està repetit, ho juntem amb el que ja hi ha
    if (objecte.quantity > 0) {
      let quantitat = 0;

      // Es mira si ja existeix aquell producte
      this.diaryMenu.map((el, i) => {
        if (el['name'] == objecte.name) {
          quantitat = el['quantitat'];
          this.diaryMenu.splice(i, 1);
        }
      })

      // S'afegeix el nou element i es suma amb el vell
      this.diaryMenu.push({
        name: objecte.name,
        quantitat: +objecte.quantity + quantitat,
        calories: (+objecte.calories * (+objecte.quantity + quantitat))
      })
      objecte.quantity = 0;
    }
  }

  public deleteProduct(name) {
    this.diaryMenu.map((el, i) => {
      if (el['name'] == name) {
        this.diaryMenu.splice(i, 1);
      }
    })
  }

  foods: Object[] = [
    {
      name: "Pizza",
      calories: 400,
      image: "https://i.imgur.com/eTmWoAN.png",
      quantity: 0
    },
    {
      name: "Salad",
      calories: 150,
      image: "https://i.imgur.com/DupGBz5.jpg",
      quantity: 0
    },
    {
      name: "Sweet Potato",
      calories: 120,
      image: "https://i.imgur.com/hGraGyR.jpg",
      quantity: 0
    },
    {
      name: "Gnocchi",
      calories: 500,
      image: "https://i.imgur.com/93ekwW0.jpg",
      quantity: 0
    },
    {
      name: "Pot Roast",
      calories: 350,
      image: "https://i.imgur.com/WCzJDWz.jpg",
      quantity: 0
    },
    {
      name: "Lasagna",
      calories: 750,
      image: "https://i.imgur.com/ClxOafl.jpg",
      quantity: 0
    },
    {
      name: "Hamburger",
      calories: 400,
      image: "https://i.imgur.com/LoG39wK.jpg",
      quantity: 0
    },
    {
      name: "Pad Thai",
      calories: 475,
      image: "https://i.imgur.com/5ktcSzF.jpg",
      quantity: 0
    },
    {
      name: "Almonds",
      calories: 75,
      image: "https://i.imgur.com/JRp4Ksx.jpg",
      quantity: 0
    },
    {
      name: "Bacon",
      calories: 175,
      image: "https://i.imgur.com/7GlqDsG.jpg",
      quantity: 0
    },
    {
      name: "Hot Dog",
      calories: 275,
      image: "https://i.imgur.com/QqVHdRu.jpg",
      quantity: 0
    },
    {
      name: "Chocolate Cake",
      calories: 490,
      image: "https://i.imgur.com/yrgzA9x.jpg",
      quantity: 0
    },
    {
      name: "Wheat Bread",
      calories: 175,
      image: "https://i.imgur.com/TsWzMfM.jpg",
      quantity: 0
    },
    {
      name: "Orange",
      calories: 85,
      image: "https://i.imgur.com/abKGOcv.jpg",
      quantity: 0
    },
    {
      name: "Banana",
      calories: 175,
      image: "https://i.imgur.com/BMdJhu5.jpg",
      quantity: 0
    },
    {
      name: "Yogurt",
      calories: 125,
      image: "https://i.imgur.com/URhdrAm.png",
      quantity: 0
    }
  ]

}