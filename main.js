// ---------------#03---------------------------
/* 変数の静的型付け　<> 動的型付け

// JavaScript
var x = 10;
x = "hello";

// TypeScript
var x: number = 10;
x = "hello";

*/
// ---------------#04---------------------------
// 型
/*
number
string
boolean
any

var i: number;
var i = 10; // i: numberだと自動で推論してくれる

var x; // var x: any
x = 10;
x = "hello";

var results: number[];
results = [10, 5, 3];

*/
// ---------------#05---------------------------
/* 列挙型
Signal

enum Signal {
    Red = 0,
    Blue = 1,
    Yellow = 2
}

enum Signal {
    Red, // 0
    Blue = 3,
    Yellow // 4
}

enum Signal {
    Green = 5
}

var Result: Signal;

// if (result== Signal.Yellow){ ... }
// if (result== Signal['Yellow']){ ... }

console.log(Signal[2]); // Yellow
console.log(Signal[3]); // Blue
console.log(Signal.Green); // 5
*/
// ---------------#06---------------------------
// 関数
/*
void 帰り値がない場合に記入
? 引数をオプション（引数があるかわからない状態）にしたいとき。このあとの引数に必須のものは書けない。

// 引数に型を指定
function add(a: number, b: number): number {
    return a + b;
}


// 引数にオプションを指定
function add(a: number, b?: number): number {
    if (b) {
        return a + b;
    } else {
        return a + a;
    }
}

// 引数にデフォルト値を指定
function add(a: number, b: number= 10): number {
    if (b) {
        return a + b;
    } else {
        return a + a;
    }
}

console.log(add(5, 3));
console.log(add(5, "hello"));
console.log(add(5, 3));
console.log(add(5));
*/
// ---------------#07---------------------------
/* 関数
var add = function(a: number,b: number): number {
    return a + b;
}

// アロー関数
var add = (a: number,b: number): number => {
    return a + b;
}

// アロー関数(１行)
var add = (a: number,b: number): number => a + b

console.log(add(5, 3))
*/
// ---------------#08---------------------------
/*
// 関数のオーバーロード：引数や戻り値が異なる、同じ名前の関数を宣言すること

function add(a: number, b: number): number; // シグネチャ：引数や返り値の組み合わせのこと
function add(a: string, b: string): string;


// この関数が使われる
function add(a: any, b: any): any {
    if(typeof a === "string" && typeof b === "string"){
        return a + " " + b;
    }
    return a + b;
}

console.log(add(5, 3)); // 8
console.log(add("hello", "world")); // hello world

console.log(add("hello", 3));

*/
// ---------------#09---------------------------
/*
クラス
アクセス修飾子: public, protected, private(デフォルトはpublic)

class User {
    // public name: string;
    // コンストラクタで引数のnameをクラスのname変数にセットする
    //constructor(name: string) {
    //    this.name = name;
    //}
    // 上の変数宣言、代入の処理を下の１行で書ける
    constructor(public name: string){
    }

    public sayHi(): void {
        console.log("Hi! I am " + this.name);
    }
}

var tom = new User("Tom");
console.log(tom.name);
tom.sayHi();

*/
// ---------------#10---------------------------
/*
クラス、ゲッターセッター
アクセス修飾子: public, protected, private(デフォルトはpublic)
privateの変数は、_を先頭につける
class User {
    constructor(private _name: string){
    }
    public sayHi(): void {
        console.log("Hi! I am " + this._name);
    }
    get name() {
        return this._name;
    }
    set name(newValue: string) {
        this._name = newValue;
    }
}

var tom = new User("Tom");
console.log(tom.name);
tom.name = "TOM";
console.log(tom.name);
tom.sayHi();
*/
// ---------------#11---------------------------
/*
クラス、ゲッターセッター
アクセス修飾子: public, protected, private(デフォルトはpublic)
private: 自分のクラスの中のみアクセス可能。変数は、_を先頭につける
protected: 自分のクラスおよび、それを継承するクラスでアクセス可能

class User {
    constructor(protected _name: string){
    }
    public sayHi(): void {
        console.log("Hi! I am " + this._name);
    }
}

// クラスの継承（属性やメソッドを受け継ぐ）
class AdminUser extends User {
    private _age: number;
    constructor(_name: string, _age: number) {
        super(_name);
        this._age = _age;
    }
    // メソッドのオーバーライド
    public sayHi(): void {
        console.log("My age: " + this._age);
        console.log("My name: " + this._name);
        super.sayHi(); // 親クラスのメソッドを呼び出す
    }
}

var bob = new AdminUser("Bob", 23);
bob.sayHi();
*/
// ---------------#12---------------------------
/*
静的メンバ: インスタンスではなく、クラス内に持つ。ここではcountが静的メンバ
アクセス修飾子: public, protected, private(デフォルトはpublic)
private: 自分のクラスの中のみアクセス可能。変数は、_を先頭につける
protected: 自分のクラスおよび、それを継承するクラスでアクセス可能
メンバ：そのクラスの変数やメソッドをまとめて、メンバと呼ぶ

class User {
    name: string;
    constructor(name: string){
        this.name = name;
        User.count++; // 静的メンバにアクセスするにはクラス名をつける。
    }
    sayHi(): void {
        console.log("Hi! I am " + this.name);
    }
    static count: number = 0;
    static showDescription(): void {
        console.log("this class is about users");
    }
}

var tom = new User("Tom");
var bob = new User("Bob");
console.log(User.count);
User.showDescription(); // インスタンスを生成しなくても実行できる。

*/
// ---------------#13---------------------------
/*
Interface: オブジェクトの型に名前をつけるための機能
構造的部分型: interfaceの中身を網羅していれば、プラスして他の値が定義されていてもエラーにならない

interface Result {
    a: number;
    b: number;
}

function getTotal(result: Result) {
    return result.a + result.b;
}
var result = {
    a: 32,
    b: 58,
    c: "hello" // interfaceに c:number は存在しないが、a, bがあるのでコンパイルは通る
};

console.log(getTotal(result));

*/
// ---------------#14---------------------------
/*
Interfaceの継承

interface SpringResult {
    a: number;
}

interface FallResult {
    b: number;
}

// ２つのinterfaceを継承する
interface FinalResult extends SpringResult, FallResult {
    final?: number; // オプションは?で設定できる
}


// function getTotal(result: FinalResult) {
//     return result.a + result.b + result.final;
// }

function getTotal(result: FinalResult) {
    if (result.final) {
        return result.a + result.b + result.final;
    } else {
        return result.a + result.b;
    }
}

// var result = {
//     a: 32,
//     b: 58,
//     final: 82
// };

// finalをオプションにしたので、a, bのみでもコンパイルOK
var result = {
    a: 32,
    b: 58,
};

console.log(getTotal(result));

*/
// ---------------#15---------------------------
/*
Interface -> Class

interface GameUser {
    score: number;
    showScore(): void;
}
// implementsを定義することで、Userクラスは必ずinterfaceの中身を持っていなくてはいけなくなる。
class User implements GameUser {
    name: string;
    score: number = 0;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): void {
        console.log("Hi! I am " + this.name);
    }
    showScore(): void {
        console.log("Score: " + this.score);
    }
}
*/
// ---------------#16---------------------------
/*
Generics: 抽象化されたデータ型

// function getStringArray(value: string): string[] {
//     return [value, value, value];
// }

// function getNumberArray(value: number): number[] {
//     return [value, value, value];
// }

// 上の2つの関数を１つにまとめる。（データ型を実行時に指定して、１つの関数にできる）
// Tはtypeの頭文字。<T>と書くことで、実行時に型を指定できる。
function getArray<T>(value: T): T[] {
    return [value, value, value];
}

console.log(getArray<number>(3));
console.log(getArray<string>("hello"));

*/
// ---------------#17---------------------------
/*
Generics
Classでも<T>を使ってGenericsを使用できる。
また、GenericsにInterfaceを継承させることもできる。

interface Result {
    a: number;
    b: number;
}
interface FinalResult {
    a: number;
    b: number;
    c: string;
}

class MyData<T extends Result> {
    constructor(public value: T) {}
    getArray(): T[] {
        return [this.value, this.value, this.value];
    }
}

// var v1 = new MyData<string>("hello");
// console.log(v1.getArray());
// var v2 = new MyData<number>(234);
// console.log(v2.getArray());

// Resultのinterfaceをgenericsで継承する
// var v3 = new MyData<Result>({a: 32, b: 16});
// console.log(v3.getArray());

// FinalResultのinterfaceをgenericsで継承する。
// MyDataではResult型からTが継承されているが、部分的構造型なので、cを含むFinalResultでもOK
var v4 = new MyData<FinalResult>({a: 32, b: 16, c: "hello"});
console.log(v4.getArray());

*/
// ---------------#18---------------------------
