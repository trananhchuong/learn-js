
# Chat Core Estimate (24 days)

## Authentication (2 days)
1. Initialize the Chat SDK with APP_ID (1 day)
2. Connect/Disconnect to Sendbird server (1 day)

## Conversation content (22 days)

1. Channel: (7 days)
     
   - Channel functions: (7 days)
    
     - Create channel (1 day)
  
     - Enter channel: function for user to receive messages (1 day)

     - Exit a channel: function for user can't receive any messages from that channel (1 day)
  
     - Member join channel (2 days)
     
     - Channel info: add/update channel name, add/update channel image (2 days)
 
<div style="page-break-after: always;"></div>

2. Message: (12 days)
   
   - Send a message: (4 days)
      - UserMessage: A text message sent by a user 
      - FileMessage: A binary file message sent by a user 
        
   - Receive a message: (2 days)
      - UserMessage: A text message sent by a user 
      - FileMessage: A binary file message sent by a user 

   - Load previous messages (2 days)

   - Update/Delete/Copy a message (2 days)

   - Push notifications (2 days)

3. Testing & fix bug (3 days)