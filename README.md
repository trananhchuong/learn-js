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


## Closure
>Là hàm có thể ghi nhớ nơi tạo ra nó & truy cập được biến bên ngoài phạm vi của nó

- Ứng dụng:
  - Giúp viết code ngắn hơn
  - Biểu diễn, ứng dụng tính **Private** trong OOP
- Lưu ý:
  - Biến được tham chiếu trong closure sẽ **không** được xoá khỏi bộ nhớ

## Bind
>Là một phương thức được đinh nghĩa trong Function Contructor, cho phép ràng buộc **this** cho phương thức/function đó

- Lưu ý:
  - Bind() trả về một hàm mới
  - Có thể nhận các đối số như hàm ban đầu

