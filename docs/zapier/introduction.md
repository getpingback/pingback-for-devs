---
sidebar_position: 1
---

# Zapier APIs Endpoints

This document outlines the API endpoints used by the Pingback integration for Zapier.

## Base URL

All API calls should be made to the following base URL:

```
https://api.pingback.com/zapier
```

## Authentication

All requests to the API must include a valid API key provided in the `X-API-Key` header.

```
X-API-Key: YOUR_API_KEY
```

You can generate your API key within your Pingback account's [integrations page](https://pingback.com/publish/settings/integrations).

## API Reference

### Check Authentication (`/me`)

Verifies the provided API key and returns basic channel information associated with the key. This is used by Zapier during the connection setup process.

- **Method:** `GET`
- **Path:** `/me`
- **Headers:**
  - `X-API-Key`: Your Pingback Zapier API Key.
- **Success Response (200 OK):**
  ```json
  {
    "details": {
      "channelUid": "unique-channel-identifier",
      "channelName": "Example Channel Name"
    }
  }
  ```

### Subscribe to Webhook (`/webhook/subscribe`)

Creates a new webhook subscription for a specific trigger event type. Zapier uses this endpoint when a user creates a Zap with a Pingback trigger.

- **Method:** `POST`
- **Path:** `/webhook/subscribe`
- **Headers:**
  - `X-API-Key`: Your Pingback Zapier API Key.
  - `Content-Type`: `application/json`
- **Request Body:**
  ```json
  {
    "hookUrl": "https://hooks.zapier.com/...",
    "triggerEventType": "CONTACT_CONTACT_CREATED",
    "payload": {
      // Optional, depends on the triggerEventType
      "segmentedListId": "optional-list-id",
      "issueUid": "optional-issue-uid",
      "issueLink": "optional-issue-link"
    }
  }
  ```
  - `hookUrl` (string, required): The URL Zapier provides for Pingback to send event notifications.
  - `triggerEventType` (string, required): The specific Pingback event that should trigger this webhook. Supported values are:
    - `CONTACT_CONVERSION_CREATED`
    - `CONTACT_CONTACT_CREATED`
    - `CONTACT_CONTACT_UPDATED`
    - `CONTACT_EMAIL_DELIVERY`
    - `CONTACT_EMAIL_OPEN`
    - `CONTACT_EMAIL_CLICK`
    - `CONTACT_ADDED_TO_SEGMENTED_LIST`
    - `CONTACT_REMOVED_FROM_SEGMENTED_LIST`
  - `payload` (object, optional): Additional data required for certain event types.
    - `segmentedListId` (string, optional): Identifier for a segmented list (used for list-related triggers).
    - `issueUid` (string, optional): Identifier for a specific issue.
    - `issueLink` (string, optional): Link related to a specific issue.
- **Success Response (200 OK):**
  ```json
  {
    "success": true,
    "data": {
      "id": "unique-subscription-db-id",
      "payload": {
        "issueUid": "unique-identifier"
      },
      "triggerEventType": "CONTACT_CONTACT_CREATED",
      "status": "active",
      "targetUrl": "https://hooks.zapier.com/...",
      "channelUid": "unique-channel-identifier",
      "createdAt": "2023-10-27T10:00:00.000Z",
      "updatedAt": "2023-10-27T10:00:00.000Z"
    }
  }
  ```

### Unsubscribe from Webhook (`/webhook/unsubscribe`)

Removes an existing webhook subscription. Zapier uses this endpoint when a user turns off or deletes a Zap with a Pingback trigger.

- **Method:** `POST`
- **Path:** `/webhook/unsubscribe`
- **Headers:**
  - `X-API-Key`: Your Pingback Zapier API Key.
  - `Content-Type`: `application/json`
- **Request Body:**
  ```json
  {
    "hookUrl": "https://hooks.zapier.com/...",
    "triggerEventType": "CONTACT_CONTACT_CREATED"
  }
  ```
  - `hookUrl` (string, required): The webhook URL to unsubscribe.
  - `triggerEventType` (string, required): The specific event type associated with the webhook (must match one of the supported types listed in the subscribe section).
- **Success Response (200 OK):**
  ```json
  {
    "success": true,
    "data": {
      "id": "unique-subscription-db-id",
      "payload": {
        "issueUid": "unique-identifier"
      },
      "triggerEventType": "CONTACT_CONTACT_CREATED",
      "status": "inactive",
      "targetUrl": "https://hooks.zapier.com/...",
      "channelUid": "unique-channel-identifier",
      "createdAt": "2023-10-27T10:00:00.000Z",
      "updatedAt": "2023-10-27T10:00:00.000Z"
    }
  }
  ```

### Get Recent Items (`/recent-items`)

Fetches sample data for a specific trigger event type. Zapier uses this during Zap setup to allow users to test their trigger and map fields.

- **Method:** `GET`
- **Path:** `/recent-items`
- **Headers:**
  - `X-API-Key`: Your Pingback Zapier API Key.
- **Query Parameters:**
  - `triggerEventType` (string, required): The event type for which to fetch sample data. Must be one of the supported types listed in the `/webhook/subscribe` section.
- **Success Response (200 OK):**

  - Returns an array of 1-3 sample objects representing recent items matching the `triggerEventType`. The structure varies based on the event type. If no data exists, placeholder examples are returned.

  **Example for `CONTACT_CONVERSION_CREATED`:**

  ```json
  [
    {
      "email": "real-contact@example.com",
      "source": "Form",
      "origin": {
        "url": "https://form-url.com"
      },
      "attributesValues": {
        "name": "Real Contact Name",
        "company": "Real Company Inc."
      }
    }
  ]
  ```

  **Example for `CONTACT_CONTACT_CREATED`:**

  ```json
  [
    {
      "id": "contact_uuid_123",
      "email": "real-contact@example.com",
      "source": "Form",
      "origin": {
        "url": "https://form-url.com"
      },
      "status": "active",
      "attributesValues": {
        "name": "Real Contact Name",
        "phone": "555-1234"
      }
    }
  ]
  ```

  **Example for `CONTACT_CONTACT_UPDATED`:**

  ```json
  [
    {
      "id": "contact_uuid_123",
      "email": "real-contact@example.com",
      "source": "API Update",
      "previousChangedFields": {
        "status": "pending"
      },
      "newChangedFields": {
        "status": "active"
      }
    }
  ]
  ```

  **Example for `CONTACT_EMAIL_DELIVERY`, `CONTACT_EMAIL_OPEN`:**

  ```json
  [
    {
      "email": "recipient@example.com",
      "contactId": "contact_uuid_456",
      "subject": "Your Weekly Newsletter",
      "issueUid": "issue_uuid_789"
    }
  ]
  ```

  **Example for `CONTACT_EMAIL_CLICK`:**

  ```json
  [
    {
      "email": "recipient@example.com",
      "contactId": "contact_uuid_456",
      "subject": "Special Offer Inside!",
      "issueUid": "issue_uuid_abc",
      "link": "https://yourproduct.com/special-offer"
    }
  ]
  ```

  **Example for `CONTACT_ADDED_TO_SEGMENTED_LIST`, `CONTACT_REMOVED_FROM_SEGMENTED_LIST`:**

  ```json
  [
    {
      "email": "member@example.com",
      "contactId": "contact_uuid_xyz",
      "source": "Automation Rule",
      "segmentedListId": "segment_uuid_123",
      "segmentedListName": "High Value Customers"
    }
  ]
  ```

### Get Dropdown Items (`/dropdown-items/:itemType`)

Provides a list of items for dynamic dropdown fields within Zapier trigger or action steps.

- **Method:** `GET`
- **Path:** `/dropdown-items/{itemType}`
- **Headers:**
  - `X-API-Key`: Your Pingback Zapier API Key.
- **Path Parameters:**
  - `itemType` (string, required): The type of items to fetch. Supported values:
    - `emails`: Fetches sent or automated email campaigns (Issues).
    - `segmentedLists`: Fetches contact segments/lists.
- **Query Parameters:**
  - `page` (integer, optional, default: 0): For pagination, the zero-indexed page number to retrieve.
- **Success Response (200 OK):**

  - Returns an array of objects suitable for populating a dropdown.

  **Example for `itemType` = `emails`:**

  ```json
  [
    {
      "id": "issue_uuid_789",
      "name": "Your Weekly Newsletter"
    },
    {
      "id": "issue_uuid_abc",
      "name": "Special Offer Inside!"
    }
  ]
  ```

  **Example for `itemType` = `segmentedLists`:**

  ```json
  [
    {
      "id": "segment_uuid_123",
      "name": "High Value Customers"
    },
    {
      "id": "segment_uuid_456",
      "name": "Newsletter Subscribers"
    }
  ]
  ```
