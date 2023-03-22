console.log("hello world!");
var nama = "dinda";
console.log(nama);
// var , let , const 
// var bisa di redeclared
// let value nya bisa di ganti
// example
let age = 21;
age = 22;
console.log(age);
// const tdk bisa ganti value
const address = "bekasi";
console.log(address)
// untuk penamaan variabel hanya boleh
// huruf,angka, symbols $ , `_`

// non primitive(satu data) = data types yg ada di js string""",number,boolean (true,false),null(kosong),
//undefined(belum pernah di kasih value)
// primitive (data lebih dari satu)= oject (bisa mengandung banyak property)
//array(bisa menyimpan data lebih dari satu)

const hello = "dinda";
const size = 39;
const mantan = 1237803882n;
const cantik = true;
const noData = null;
let notAssigned;
// gabisa pake const karna const harus punya value
// typeoff untuk mengecek type data
console.log(typeof(hello));
console.log(typeof(size));
console.log(typeof(mantan));
console.log(typeof(cantik));
console.log(typeof(noData));
console.log(typeof(notAssigned));

// mutable = data nya bisa dirubah object,array
// imutable = data nnya bisa dirubah cnth nya number string
// contoh imutable
let aku = "dinda";
aku = aku + "ayudya";
console.log(aku);

// penggunaan object
var namaDepan = "Dinda";
var namaBelakang = "Ayudya";
var fullName = `${namaDepan} ${namaBelakang}`
console.log(fullName);

// contoh ubah int ke string (toString)
let usia = 21;
console.log(typeof(usia.toString()));

// new date data types
const str = new Date().toLocaleString(`en-US` , {timeZone: `Asia/Jakarta`});
console.log(str);

// get month date or year
var currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getMonth());

// basic operator
console.log(5+5); // addition
console.log(5-5); // substraction / kurang
console.log(5*5); // multiple / kali
console.log(5/5); // division / bagi
console.log(5%5); // modulus (sisa dari pembagian)
console.log(5**5); // pangkat (exponensi)

// unary,binary,operand
// contoh operand
var angka = 1
angka = -angka;
console.log(angka);
// string concatenation with binary "+"
console.log("1" + 2); // "12"
console.log(2+"1"); // "21"
console.log(1+1+"1"); // "21"
console.log("1"+1+1);// "12" kl depan string dianggap string kebelakang

// modify in place
var num = 5;
// num += 10;
// num *= 10;
// console.log(num)
// increment & decrement increase by 1
num++;
console.log(num);
num--;
console.log(num);

// postfix & prefix form
let preCounter = 0;
console.log(++preCounter);
let postCounter = 0;
console.log(postCounter++);

// comparison menghasilkan boolean
console.log(5==5); // equal / tidak membandingkan tipe data hanya value
console.log(5!=5); // not equal
console.log(5>5); // lebih besar
console.log(5<5); // lebih kecil
console.log(5>=5); // lebih besar
console.log(5<=5); // lebih kecil
console.log(5===5); // membandingkan tipe data dan value
 




