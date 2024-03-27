---
sidebar_position: 1
---

# Introduction

`ping-email` is a Node.js library that provides a simple and efficient way to verify email addresses. It performs syntax, domain, and SMTP checks to determine the validity of an email address. By integrating `ping-email` into your applications, you can ensure that users provide valid email addresses, reducing the risk of errors and improving communication reliability.

## Install

```bash
npm install ping-email
# or
yarn add ping-email
```

## Setup

```js
import { PingEmail } from "ping-email";
const pingEmail = new PingEmail({
  port: 25, // Default SMTP port
  fqdn: "mail.example.org", // Fully Qualified Domain Name of your SMTP server
  sender: "name@example.org", // Email address to use as the sender in SMTP checks,
  timeout: 10000, // Time in milliseconds to wait for a response from the SMTP server
  attempts: 3, // Number of attempts to verify the email address
});
```

## Usage

### Verifying an Email Address

To verify an email address using `ping-email`, call the ping method with the target email address:

```js
const { email, valid, message } = await pingEmail.ping("test@example.com");

if (valid) {
  console.log("Email is valid:", email);
} else {
  console.error("Verification failed:", message);
}
```

### Ping Response

The ping method returns an object with the following properties:

- `email`: The email address being verified.
- `valid`: A boolean indicating the overall validity of the email based on syntax, domain, and SMTP checks.
- `success`: A boolean indicating if the verification process executed without encountering system-level errors (e.g., network issues).
- `message`: A string providing detailed feedback about the verification outcome. This message can be one of the following, as defined in `PingResponseMessages`:
  - `"Valid email"`: The email address is valid.
  - `"Invalid email"`: The email address is invalid.
  - `"Valid domain"`: The domain of the email address is valid.
  - `"Invalid domain"`: The domain of the email address is invalid.
  - `"Email is required"`: No email address was provided for verification.
  - `"No MX records found"`: The domain does not have MX records, indicating it cannot receive emails.
  - `"Invalid email syntax"`: The email address provided does not meet the syntactical standards for email addresses.
  - `"SMTP connection error"`: There was an error connecting to the SMTP server for verification.
  - `"Disposable email is not allowed"`: The email address belongs to a disposable email provider.
  - `"Domain verification failed"`: The domain verification process failed.
  - `"Unable to verify email"`: The email verification process failed for an unknown reason.
  - `"Connection timeout"`: The connection to the SMTP server timed out.
  - `"Exceeded attempts"`: The maximum number of attempts to verify the email address was exceeded.
  - `"Valid email (ignored SMTP verification)"`: The email address is valid, but the SMTP verification process was skipped.

These messages provide clear insights into the verification process, helping you understand the specific reason for an email's validation outcome.

### Error Handling

When integrating `ping-email` into your applications, pay special attention to the success and message properties in the ping method response. They are key to identifying and handling different scenarios, such as invalid email syntax, domain issues, or SMTP server connectivity problems. Logging these details can be helpful for debugging purposes or improving user feedback in your application interface.

### Options

You can customize `ping-email` by providing different options when you instantiate it. The available options are:

- `port`: The port number to connect to the SMTP server `(default: 25)`.
- `attempts`: The number of attempts to verify the email address `(default: 3)`.
- `fqdn`: The Fully Qualified Domain Name of your SMTP server `(default: "mail.example.org")`.
- `sender`: The email address used as the sender in SMTP checks `(default: "name@example.org")`.
- `timeout`: The time in milliseconds to wait for a response from the SMTP server `(default: 10000)`.
- `ignoreSMTPVerify`: A boolean indicating whether to skip the SMTP verification process `(default: false)`.
- `debug`: A boolean indicating whether to enable debug mode, which logs detailed information about the verification process `(default: false)`.

This allows you to tailor the library to your specific requirements, ensuring compatibility with your email verification workflow.

### Example

Here's a complete example demonstrating how to verify an email address:

```js
import { PingEmail } from "ping-email";

const pingEmail = new PingEmail({
  port: 587,
  fqdn: "smtp.example.org",
  sender: "verify@example.org",
  timeout: 15000,
  attempts: 5,
});

const { email, valid, success, message } = await pingEmail.ping("user@example.com");
```
