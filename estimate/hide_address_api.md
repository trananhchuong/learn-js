# API update
   ### Page search:
   - [https://develop.docosan.com/test/api/patients/find-doctor](https://develop.docosan.com/test/api/patients/find-doctor)
      - item is clinic => data.address
      - item is doctor => data.clinic_address, data.clinic.address

   ### Page profile:
   - [https://develop.docosan.com/test/api/clinics/info?id=191](https://develop.docosan.com/test/api/clinics/info?id=191)
      - data.address
      - data.profile_like_specialty.address

   - [https://develop.docosan.com/test/api/doctor/info?id=469&language=vi](https://develop.docosan.com/test/api/doctor/info?id=469&language=vi)
      - data.owner_clinic.address 
      - data.staff_clinic.address 
      - data.profile_like_specialty.address 
      - case standalone doctor: data.address
`