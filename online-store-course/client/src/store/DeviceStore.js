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
      { id: 5, name: 'Xiaomi' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 23000,
        rating: 5,
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/2/1/21c6dc6eebbbbdf5a291e66367f81acc.jpg',
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        price: 21000,
        rating: 4,
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/2/1/21c6dc6eebbbbdf5a291e66367f81acc.jpg',
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        price: 20000,
        rating: 3,
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/2/1/21c6dc6eebbbbdf5a291e66367f81acc.jpg',
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/2/1/21c6dc6eebbbbdf5a291e66367f81acc.jpg',
      },
      {
        id: 5,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/2/1/21c6dc6eebbbbdf5a291e66367f81acc.jpg',
      },
      {
        id: 6,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/2/1/21c6dc6eebbbbdf5a291e66367f81acc.jpg',
      },
      {
        id: 7,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/2/1/21c6dc6eebbbbdf5a291e66367f81acc.jpg',
      },
      {
        id: 8,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/2/1/21c6dc6eebbbbdf5a291e66367f81acc.jpg',
      },
      {
        id: 9,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/2/1/21c6dc6eebbbbdf5a291e66367f81acc.jpg',
      },
      {
        id: 10,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/2/1/21c6dc6eebbbbdf5a291e66367f81acc.jpg',
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
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
