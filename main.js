// ---------------#03---------------------------
/* 変数の静的型付け　<> 動的型付け

// JavaScript
var x = 10;
x = "hello";

// TypeScript
var x: number = 10;
x = "hello";

*/
define(["require", "exports", "./user_amd"], function (require, exports, User) {
    "use strict";
    exports.__esModule = true;
    console.log(User.name);
});
