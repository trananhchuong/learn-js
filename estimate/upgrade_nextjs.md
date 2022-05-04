
1. Next.js Upgrade:
   - Next.js có 2 cơ chế re-rendering: SSG, SSR
   - Sử dụng cơ chế SSG của nextjs: fetch data, render html
   - Các thẻ <img/> thay bằng thẻ <Image/> của Next.js: tối ưu size, lazy load,..
   - Research thêm Next.js các case khác...
  
2. Tối ưu source code:
   - Remove jquery: viết lại bằng react, hoặc js
   - Remove library bootstrap, cái nào đã xài rồi thì copy class bootstrap vào file style 
   - Dùng react.memo đối với các component lớn để cache, tránh re-render
   - Build component sử dụng state hợp lí, hạn chế để re-render component