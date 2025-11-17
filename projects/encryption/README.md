# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:9
My Partner's Key:7

Our initial shared key:16

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message  | Key |
| --------------- | ---------------  | --- |
| Y KW REXQBI     | I am hungry      | 16  |
|ST GJHFZXJ RJ YTT| No because me too| 21  |
| RAAP BXQMEQ     | Food Please      | 14  |
| VLR EXSB POJB?  | You have Some?   | 3   |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:

#### TDzoXj

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

#### 01010100 01000100 01111010 01101111 01011000 01101010 

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: Jonah Kauffman 
    Destination: Mariana Lee
    Sequence: 1/3
    Data: [01010100] [01000100]
    =========
    Packet 2:

    Source: Jonah Kauffman
    Destination: Mariana Lee
    Sequence: 2/3 
    Data: [01111010] [01101111]
    =========
    Packet 3:

    Source: Jonah Kauffman
    Destination: Mariana Lee
    Sequence: 3/3
    Data: [01011000] [01101010]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?

The difference between symmetric and asymmetric encryption is that symmetric encryption uses the same key for encrypting
 and decrypting messages. This is easy but less secure. On the other hand, asymmetric encryption uses one key to encrypt
 the data and another to decrypt text. The first one is shared with sender and reciever, while the second is only held
 by the receiver. This is harder but more secure.

- Why is it important that this protocol uses a new key for each message?

If they used the same key, then eventually, they will figure out what the key is, if you keep using new ones then it is
impossible to predict them.

- Why is it important that you never share your secret key?

You should never share this becuase it basically grants full access to what is on your computer. This could be very dangerous
to you and leave you very vulnerable.

- In the transport layer, do these messages use TCP or UDP? Why?

They use TCP becuase it is a lot more reliable and secure compared to UDP. However, TCP is slower, but it grants the benefits
of being way safer.

- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
 
In the internet layer, the packets are sent to many routers in an effort to find its destination. In the link layer, the computer is connected and the data is moved.

- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what otherinformation can they still see?

They can stil see your IP address and what computer is communicating.


