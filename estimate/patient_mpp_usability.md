## Forum Patient-MPP usability (5 days)

### Patient functions (2 days):
   - Auto fill special information: birthday, address, identifier (0.5 days) done
   - Birthday from the popup window or type/erase the birthday  (1 day) done
   - Display none-hidden birthday datetime picker (0.5 days) done

### MPP functions (3 days):
   - Checkout flow - Search by phone number (start with +84, 0) (0.5 days) done
   - Type DOB: Make it allow CS to type the DOB, even without /, the date will show DD/MM/YYYY (1 day) 
     - => even without /: not done 
   - Search bar custom appear (0.5 days) done
   - Auto fill special information when select patient (1 day)
   - Tab to open gender (do research if it's possible)

### API support:
   - Patient - function auto fill special information: birthday, address, identifier:
     - api: https://develop.docosan.com/test/api/verify-otp 
         => data.patient_info add field: address, birthday, id_card_number or return data like api https://develop.docosan.com/test/api/me 
   
   - MPP - Auto fill special information when select patient
      - api: https://develop.docosan.com/test/api/diseases 
            => mpp_autocomplete add field: address, birthday, id_card_number