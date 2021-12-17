
# Chat Core Estimate (43 days)

## Authentication (5 days)
1. Initialize the Chat SDK with APP_ID (1 day)
2. Connect/Disconnect to Sendbird server (1 day)
3. Update user profile (3 days)

## Application (4 days)
1. Settings: Limits on number of messages per second (0,5 days)
2. Manage connections with Sendbird server (0,5 days)
3. Retrieve a list of users (1 day)
4. Block and unblock other users (1 day)
5. Check if a user is online (1 day)


## Chatbot content (pending)
## Conversation content (34 days)

1. Channel: (13 days)
     
   - Display channel UI: build an UI for user to interact with channel functions (3 days)
  
   - Channel functions: (10 days)
    
     - Create channel (1 day)
  
     - Enter channel: function for user to receive messages (1 day)

     - Exit a channel: function for user can't receive any messages from that channel (1 day)
  
     - Delete a channel (1 day)
     
     - Add/delete member (2 days)
     
     - Channel info: add/update channel name, add/update channel image (2 days)
  
    - Ban and unban a user (1 day)
    
    - Mute and unmute a user (1 day)

<div style="page-break-after: always;"></div>

2. Message: (13 days)
   
   - Send a message: (4 days)
      - UserMessage: A text message sent by a user 
      - FileMessage: A binary file message sent by a user 
        
   - Receive a message: (2 days)
      - UserMessage: A text message sent by a user 
      - FileMessage: A binary file message sent by a user 

    - Reply to a message (reply to a specific message in a channel) (3 day)
        - Reply with a text message (1 day)
        - Reply with a file message (2 days)

    - Load previous messages (2 days)

    - Update/Delete/Copy a message (2 days)

3. Push notifications (2 days)

4. Logger (1 day)

5. Testing & fix bug (5 days)