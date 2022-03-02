
###  Medicine api backend support

  #### [Link figma UI](https://www.figma.com/file/dgaZ32IyH9RsIESxNT9igo/Docosan-UI?node-id=10308%3A13470)


  #### function save medicine csv (excel file)
    - Api save csv (excel) list medicine: save list medicine in file csv
    - function download template prototype => call api
  
  #### function display list medicine to dashboard
    - Api get medicine list 
    - Pagination
    - Detail:
      - return medicine list (array)
      - return units list (array) -> data option for form add/update 
      - paging info: current_page, total, total_page

  #### function CRUD medicine:
    - Api add medicine 
    - Api update medicine
    - Api delete medicine

  
  #### function medicine setting:
    - Api get clinic info:
      - Detail:
        - return list clinic info (array): avatar, clinic_name, address, phone, tax_code, clinic_id, avatar
    - Api update clinic info: clinic_name, address, phone, tax_code, ...
    - Api update avatar


