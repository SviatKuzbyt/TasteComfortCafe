export default class MealService {
    static #categories = [
        {id: 1, name: "Холодні страви"},
        {id: 2, name: "Гарячі страви"},
        {id: 3, name: "Десерти"},
        {id: 4, name: "Напої"},
    ]

    static #meals = [
        //Холодні страви
        { id: 1, name: 'Салат "Цезар"', description: "Порція: 250 г. Складники: куряче філе, айсберг, пармезан, сухарики, соус «Цезар».", price: 165, image: "meal1.jpg", category: 1},
        { id: 2, name: "Грецький салат", description: "Порція: 230 г. Складники: помідори, огірки, болгарський перець, маслини, фета, оливкова олія.", price: 145, image: "meal2.jpg", category: 1},
        { id: 3, name: "Карпачо з лосося", description: "Порція: 180 г. Складники: маринований лосось, лимон, каперси, руккола, оливкова олія.", price: 210, image: "meal3.jpg", category: 1},
        { id: 4, name: "Брускети з томатами та базиліком", description: "Порція: 150 г. Складники: хліб, томати, базилік, часник, оливкова олія.", price: 95, image: "meal4.jpg", category: 1},
        { id: 5, name: "Тартар з яловичини", description: "Порція: 160 г. Складники: сире м’ясо яловичини, жовток, гірчиця, спеції, цибуля.", price: 225, image: "meal5.jpg", category: 1},
        { id: 6, name: "Овочева тарілка", description: "Порція: 300 г. Складники: морква, огірки, помідори, селера, болгарський перець.", price: 110, image: "meal6.jpg", category: 1},

        //Гарячі страви
        { id: 7, name: "Борщ український з пампушками", description: "Порція: 350 г. Складники: буряк, картопля, капуста, морква, квасоля, м’ясо, часникові пампушки.", price: 130, image: "meal7.jpg", category: 2},
        { id: 8, name: "Курячі крильця BBQ", description: "Порція: 300 г. Складники: курячі крильця, соус BBQ, зелень.", price: 175, image: "meal8.jpg", category: 2},
        { id: 9, name: "Паста Карбонара", description: "Порція: 280 г. Складники: спагеті, бекон, вершки, пармезан, яйце.", price: 165, image: "meal9.jpg", category: 2},
        { id: 10, name: "Стейк з лосося на грилі", description: "Порція: 220 г. Складники: лосось, лимон, оливкова олія, спеції.", price: 345, image: "meal10.jpg", category: 2},
        { id: 11, name: "Котлета по-київськи", description: "Порція: 250 г. Складники: куряче філе, вершкове масло, панірувальні сухарі.", price: 195, image: "meal11.jpg", category: 2},
        { id: 12, name: "Різотто з грибами", description: "Порція: 270 г. Складники: рис арборіо, білі гриби, вершки, пармезан, трюфельна олія.", price: 210, image: "meal12.jpg", category: 2},

        //Десерти
        { id: 13, name: "Чізкейк Нью-Йорк", description: "Порція: 140 г. Складники: вершковий сир, печиво, ваніль, вершки.", price: 120, image: "meal13.jpg", category: 3},
        { id: 14, name: "Тірамісу", description: "Порція: 150 г. Складники: маскарпоне, савоярді, кава, какао.", price: 125, image: "meal14.jpg", category: 3},
        { id: 15, name: "Шоколадний фондан", description: "Порція: 160 г. Складники: чорний шоколад, яйця, масло, борошно, цукор.", price: 135, image: "meal15.jpg", category: 3},
        { id: 16, name: "Яблучний штрудель з морозивом", description: "Порція: 180 г. Складники: яблука, тісто філо, кориця, ванільне морозиво.", price: 140, image: "meal16.jpg", category: 3},
        { id: 17, name: "Медовик", description: "Порція: 160 г. Складники: медові коржі, сметанний крем.", price: 110, image: "meal17.jpg", category: 3},
        { id: 18, name: "Мусовий десерт з манго", description: "Порція: 130 г. Складники: манго, вершки, білий шоколад.", price: 145, image: "meal18.jpg", category: 3},

        //Напої
        { id: 19, name: "Еспресо", description: "Порція: 50 мл. Кава арабіка.", price: 55, image: "meal19.jpg", category: 4},
        { id: 20, name: "Капучино", description: "Порція: 200 мл. Кава арабіка, молоко, молочна піна.", price: 75, image: "meal20.jpg", category: 4},
        { id: 21, name: "Лате ванільний", description: "Порція: 250 мл. Кава арабіка, молоко, ванільний сироп.", price: 85, image: "meal21.jpg", category: 4},
        { id: 22, name: "Свіжовижатий апельсиновий сік", description: "Порція: 200 мл. Складники: апельсини.", price: 95, image: "meal22.jpg", category: 4},
        { id: 23, name: "Домашній лимонад (малина-базилік)", description: "Порція: 300 мл. Складники: малина, базилік, лимон, газована вода.", price: 90, image: "meal23.jpg", category: 4},
        { id: 24, name: "Чай зелений/чорний/трав'яний", description: "Порція: 400 мл. Складники: чайні листки, за бажанням мед чи лимон.", price: 65, image: "meal24.jpg", category: 4},
    ]

    static #recommendations = [1, 8, 15, 21]

  static getCategories() {
    try {
        return this.#categories;
    } catch(error){
        console.log("SKLT | ERROR getCategories |", error);
        return []
    }
  }

  static getRecommendations(){
    try {
        return this.#meals.filter(meal => this.#recommendations.includes(meal.id))
    } catch(error){
        console.log("SKLT | ERROR getRecommendations |", error);
        return []
    }    
  }

  static getMeals(categoryId){
    try {
        return this.#meals.filter(meal => meal.category === categoryId)
    } catch(error){
        console.log("SKLT | ERROR getRegetMeals |", error);
        return []
    } 
  }
}