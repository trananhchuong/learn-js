### Hide address

# Page Apply
1. page search result 
2. page profile:
   - header address
   - clinic on profile
   - profile of doctor
3. Solution:
   - Back end respond 2 field: address_district, address_street
<div style="page-break-after: always;"></div>

# Chat
### patient chat status:
1. "Inquiry" Stage:
    - The customer has never booked with the doctor before
    - Patient can not call the doctor from chat, by either video or voice
    - Button Book Now pinned to top
2. "Upcoming" Stage:
   - Appear after the doctor accepts 
   - Button Book Now is hide
3. "Follow up" Stage:
   - Appear after the appointment is finished
   - Button Book Now pinned to top
4. "Closed" Stage:
   - Appear after doctors have a choice of muting a patient
   - Button Book Now pinned to top
   - Patient can not chat with doctor 
   - Doctor can reopen a muted chat room, patient can not

### pro chat status:
1. Accessing chat:
   - Appear in: side bar menu option, appointment tab, chat icon on home
   - When a provider has unread chats, there will be an icon dot on the link
2. Stage:
    - "inquiry": user has never booked with this provider
    - "customer": user booked if their appointment is in the past
3. All chats:
    - Show all chat in one screen, consists of Inquiries or Customers
    - If patient has confirm or completed booking, it show with icon 
    - Upcoming booking will also show in chat under name of patient
4. Upcoming Appointments:
   - Appointment time will be pinned to the top of the chat
   - Clicking or tapping the appointment time will open the card in calendar
5. Upcoming Telemedicine:
   - “Join Call” button pinned to the chat under the appointment time
   - Telemedicine appointments MUST be confirmed to Join
6. Requested Appointments:
   - Appointment time will be pinned to the top of the chat with an icon
   - Clicking or tapping the appointment time will open the card in calendar

















API update:
   ### Page search:
   1. https://develop.docosan.com/test/api/patients/find-doctor
      - item is clinic => data.address
      - item is doctor => data.clinic_address, data.clinic.address

   ### Page profile:
   1.  https://develop.docosan.com/test/api/clinics/info?id=191
      - data.address
      - data.profile_like_specialty.address
      
   2. https://develop.docosan.com/test/api/doctor/info?id=469&language=vi
      - data.owner_clinic.address 
      - data.staff_clinic.address 
      - data.profile_like_specialty.address 
      - case standalone doctor: data.address
