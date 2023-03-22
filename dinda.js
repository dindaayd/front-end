// my first exercise
// 1.mencari luas persegi panjang pxl
const sisi = 5;
const l = sisi * sisi;
console.log(l);

// 2.keliling persegi panjang p=8 l=4
let panjang = 8;
let lebar = 4;
let kel = (panjang + lebar) * 2;
console.log(kel);

// 3.mencari diameter keliling dan luas lingkaran
var jariJari= 5;
var diameter = jariJari * 2
var pi = 3.14;
var keliling = 2*pi*jariJari;
console.log(keliling);
var luas = pi * (jariJari ** 2);
console.log(luas);

//4.mencari sudut segitiga jika 2 sudut diberikan
const sudut_1 = 80;
const sudut_2 = 30;
const sudut_3 = 180 - sudut_1 - sudut_2;
console.log(sudut_3);

//5.mencari perbedaan waktu diantara hari
const date1 = (7/13/2010);
const date2 = (12/15/2010);
const diffTime = Math.abs(date2-date1);
console.log(diffTime);
const diffDays = Math.ceil(diffTime/(1000*60*60*24));
console.log(diffDays+"days");

// 6. convert hari bulan tahun
// soal : 400 hari
const day = 400
const year = Math.floor(day/365);
const month = Math.floor(day%365/30);
const dayss = day%365%30;
console.log(`${year}year, ${month}month, ${dayss}day)`);
