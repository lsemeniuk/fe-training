import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Смартфоны' },
      { id: 3, name: 'Ноутбуки' },
      { id: 4, name: 'Телевизоры' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'Asus' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 23000,
        rating: 5,
        img: 'http://localhost:5000/3f4df93d-445b-4a80-a99e-a3384c00bbf4.jpg',
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        price: 21000,
        rating: 4,
        img: 'http://localhost:5000/3f4df93d-445b-4a80-a99e-a3384c00bbf4.jpg',
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        price: 20000,
        rating: 3,
        img: 'http://localhost:5000/3f4df93d-445b-4a80-a99e-a3384c00bbf4.jpg',
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'http://localhost:5000/3f4df93d-445b-4a80-a99e-a3384c00bbf4.jpg',
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(deices) {
    this._deices = deices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get deices() {
    return this._deices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
