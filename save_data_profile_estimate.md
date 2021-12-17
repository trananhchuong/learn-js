<!-- //1
  SELECT_TIME_FORM: "SELECT_TIME_FORM",
  //2
  SHOW_CART_CHECK_OUT_FORM: "SHOW_CART_CHECK_OUT_FORM",
  //3
  OPT_AUTHENTICATION_PHONE_NUMBER_FORM: "OPT_AUTHENTICATION_PHONE_NUMBER_FORM",
  OPT_AUTHENTICATION_OTP_INPUT_FORM: "OPT_AUTHENTICATION_OTP_INPUT_FORM",

  //4
  PERSONAL_DETAIL_FORM: "PERSONAL_DETAIL_FORM",
  PERSONAL_DETAIL_REASON_EXTRA_FORM: "PERSONAL_DETAIL_REASON_EXTRA_FORM",
  SHOW_CART_SERVICE_DETAIL_BY_SERVICE_SELECTED:
    "SHOW_CART_SERVICE_DETAIL_BY_SERVICE_SELECTED",

  //5
  SHOW_PAYMENT_FORM: "SHOW_PAYMENT_FORM",
  SHOW_SELECT_PAYMENT_METHOD_FORM: "SHOW_SELECT_PAYMENT_METHOD_FORM",
  //6
  SUCCESS_FORM: "SUCCESS_FORM",

  //back to screen profile
  BACK_TO_SCREEN_PROFILE: "BACK_TO_SCREEN_PROFILE",

 -->

# Feature "Save Patient Info if not Confirm Booking" Estimate: (7 days)

### save data: (2 days)
   1. change step booking
   2. reload or close page
   <!-- 3. when fill input info -->

### clear data: (0,5 days)
   1. booking success appointment
   2. click book now another profile

### show step checkout flow: (2,5 days)

   1. user is the choose time form 
   => booking widget show form select time 

   2. user is the OTP form 
   => show OTP input form 

   3. user is the cart select form
   => show cart select form 

   4. user is personal detail form
   => show personal detail form 

   5. user is payment form 
   => show payment form 

   6. user is select payment form 
   => show select payment form 


### testing & fix bug (2 days)
<!-- 
### solution:
1. when change step save data to:
   - redux store: handle data booking widget
   - local storage: handle data case user reload page -->
