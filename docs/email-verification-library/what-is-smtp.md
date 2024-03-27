---
sidebar_position: 2
---

# What is SMTP?

Simple Mail Transfer Protocol (SMTP) is the standard protocol for sending emails across the Internet. It defines the rules for how email messages are transmitted between mail servers, and how users' email clients submit outgoing emails to their outgoing mail server.

### Why Validate Email Addresses?

Validating email addresses is crucial for several reasons:

- **Reduce Bounce Rates**: Ensuring that emails are sent to valid addresses prevents emails from being bounced back.
- **Improve Delivery Rates**: By filtering out invalid addresses, email campaigns can achieve higher delivery rates.
- **Enhance Security**: Verification helps prevent fraud and enhances the security of email communication by ensuring that emails are sent to intended recipients.
- **Save Resources**: By avoiding sending emails to non-existent or disposable addresses, businesses can save on server resources and focus on genuine users.

### Understanding Key Terms

- **Port**: In the context of SMTP, a port is a numerical designation that specifies a specific gateway for network communication. Common SMTP ports include 25 (default SMTP), 587 (for encrypted SMTP), and 465 (SMTPS).

- **FQDN (Fully Qualified Domain Name)**: This refers to the complete domain name of an Internet resource. In SMTP settings, it specifies the domain name of the SMTP server that is used to send emails. For example, `smtp.example.com`.

- **Sender**: The email address that appears in the 'From' field of an email. In email verification, it's used to simulate the sending process without actually sending an email, helping to verify the validity of the recipient's address.

Understanding these concepts is crucial for effectively utilizing `ping-email` and comprehending the mechanics of email verification and delivery.

## Risk of IP Blocking

When using `ping-email` for SMTP email verification, there is a risk of IP blocking. This risk arises because the method employed by the library to verify email addresses can be perceived as suspicious by email servers, especially when requests are frequent or in large volumes. Email servers may interpret these verification attempts as spam or malicious activity, leading to the blocking of your IP address.

### Mitigating the Risk

To mitigate this risk, it is crucial to use the library responsibly and understand the implications of SMTP email verification. If you are conducting bulk email verifications or are concerned about the potential for IP blocking, consider the following guidelines:

- **Rate Limiting**: Limit the number of requests you make to the SMTP server within a given time frame.
- **Use a Proxy**: Consider using a proxy server to distribute requests across multiple IP addresses, reducing the risk of being blocked.
- **Use a Dedicated IP**: If you have a high volume of email verification requests, consider using a dedicated IP address to avoid being blocked.

### `ignoreSMTPVerify` Option

The `ignoreSMTPVerify` option in `ping-email` allows you to skip the SMTP verification process, which can help reduce the risk of IP blocking. However, it is important to note that by doing so, you may miss out on valuable insights into the validity of email addresses and the integrity of the recipient's domain.

Here's an example of how to use the `ignoreSMTPVerify` option:

```js
const pingEmail = new PingEmail({
  ignoreSMTPVerify: true,
});
```

### Best Practices

- **Gradual Processing**: Gradually process large lists of email addresses to avoid sudden spikes in traffic that could lead to your IP being flagged.
- **Monitoring and Feedback**: Regularly monitor the feedback from the servers you are verifying against. If you notice an increase in failures or blocks, adjust your verification strategy accordingly.
- **Compliance and Ethics**: Always use email verification tools ethically and in compliance with internet standards and regulations to maintain a good sending reputation.

By following these guidelines and using `ping-email` judiciously, you can effectively verify email addresses while minimizing the risk of IP blocking and maintaining the integrity of your email verification processes.
