"use strict";

function getCounter() {
  let counter = 0;

  function increase() {
    return counter++;
  }

  return increase;
}


const counter = getCounter()
console.log("counter", counter())
console.log("counter", counter())
console.log("counter", counter())
console.log("counter", counter())
console.log("counter", counter())
console.log("counter", counter())
console.log("counter", counter())


/*

  Chúc em iu ngày càng thêm xinh đẹp, năm mới mọi việc đều thuận lợi, gia đình luôn bình an,
  anh ước hai đứa mãi thương nhau, hãy luôn bên nhau cục cưng nhé!

  Chúc "ku lửa" luôn mạnh mẽ, năm mới có nhiều niềm vui, may mắn hơn trong cuộc sống!

  Chúc ông và gia đình luôn mạnh phẽ, năm mới công việc & tình yêu được thăng tiến, và luôn may mắn hơn trong cuộc sống

  Chúc Toàn và gia đình luôn mạnh phẽ, năm mới công việc & tình yêu thăng hoa, vạn sự như ý nha!

  Chúc em năm mới dui dẻ, mãi xinhhh đẹp, gia đình luôn hạnh phúc, được nhiều may mắn trong công việc và cuộc sống!

  Chúc chú Thọ năm mới nhiều niềm dui, gia đình luôn hạnh phúc, luôn thăng hoa công việc & tình yêu nha chú :3 

  Chúc em gái ngày càng xinh đẹp và học giỏi hơn, gánh vác tiếp ba mẹ việc nhà cửa, luôn có nhiều may mắn trong cuộc sống!


*/ 