# Learn Javascript

>## IIFE *(Immediately Invoked Function Expression)*
### What is it?
- Is a function/expression that is called/executed immediately
- Should add a ";" at the beginning of the IIFE expression to avoid the error
- Its scope is "private", so it helps to encapsulate the function/library without having the same variable name


>## Scope

- Javascript has three types of scope:
   - Global scope
   - Function scope *// var, function*
   - Block scope *// let, const*
- When calling a function **always** a new scope is created
- Khi nào một biến được xoá khỏi bộ nhớ?
  - Biến toàn cầu: khi web/app được tắt/refresh
  - Biến trong code block & trong hàm: sau khi thoát khỏi phạm vi của biến đó
  - Biến trong hàm được tham chiếu bởi một hàm: closure

