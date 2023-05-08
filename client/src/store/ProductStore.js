import {makeAutoObservable} from 'mobx';

export default class ProductStore {
    constructor() {
        this._types = [
            {id: 3, name: 'косметика и гигиена'},
            {id: 4, name: 'Для дома'},
            
        ]
        this._brands = [
            {id: 2, name: 'Seventh Generation'},
            {id: 7, name: 'Method'},
           
           
        ]
        this._products = [
            {id: 2, name: 'Peppermint Fluoride-Free Toothpaste', price: 10, rating: 5, img: 'f70eb146-c249-4198-aa9b-31b55eec07d7.jpg'},
            {id: 3, name:  "Tom's of Maine Natural Beauty Bar Soap", price: 10, rating: 5, img: 'a2dd09b7-3aac-43cf-bedf-f79f155336e3.jpg'},
            {id: 4, name: "Tom's of Maine Natural Wicked Fresh! Mouthwash", price: 12, rating: 5, img: 'c1fc85c7-a4a8-4c00-af5d-0a9a373f768a.jpg'},
            {id: 5, name: ' Method All-Purpose Cleaner', price: 12, rating: 5, img: 'd15c34d7-0f3c-4abb-9d33-9b323208c575.jpg'},
            {id: 6, name: 'Method Dish Soap', price: 15, rating: 5, img: 'a4dd558f-3971-489c-a61c-6db43e49dff0.jpg'}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types 
    }
    setBrands(brands) {
        this._brands = brands
    }
    setProducts(products) {
        this._products = products
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }
    get products() {
        return this._products
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}