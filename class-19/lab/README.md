# Lab: AWS: Events

## Overview

Using only AWS Services: SQS, SNS, Lambda, create a cloud version of the CAPS system

## Feature Tasks & Requirements

Refer to the [CAPS System Overview](../../apps-and-libraries/caps/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

### Required Services

1. SNS Topic: **pickup** which will receive all pickup requests from vendors
1. SQS Queue (FIFO): **packages** which will contain all delivery requests from vendors, in order of receipt.
   - Subscribe this queue to the **pickup** topic so all pickups are ordered
1. SQS Queue (Standard) for each vendor (named for the vendor) which will contain all delivery notifications from the drivers

### Operations

#### Vendors:

- Vendors will post "pickup" messages containing delivery information into the SNS **pickup** topic
  - `{ orderId: 1234, customer: "Jane Doe", vendorId: queueArn}`
  - Note the `queueArn` -- this refers to the AWS 'arn' of the vendor's specific delivered queue
- Pickup requests should be moved into a FIFO queue for the drivers automatically
- Vendors should separately subscribe to their personal SQS queue and periodically poll the queue to see delivery notifications

#### Drivers:

- Drivers will poll the SQS **packages** queue and retrieve the next delivery order (message)
- After a time (e.g. 5 seconds), drivers will post a message to the Vendor specific SQS Queue using the `queueArn` specified in the order object

## Implementation Notes

Work in a non-main branch in a new repository called "caps-cloud"

Once you have the appropriate queues and topics setup at SNS and SQS, you'll need some NodeJS applications running to get the system started

1. `pickup.js` will post the "pickup" message
   - The order id and customer name can be randomized
   - The `queueArn` must be the arn from the Queue you created for the vendor
   - You can set this up in a number of ways:
     - Each time you run it, it makes one pickup request (or a few, using a loop)
     - Run it once, and have it make a new request every so often with a timer
1. `vendor.js` should be an SQS Subscriber
   - Connect it to the vendor's queue by using it's URL/ARN
   - As drivers deliver, this app will continually poll the queue, retrieve them, and log details out to the console
   - You should be able to disconnect this app, and see deliveries that happened while the app was not running
1. `driver.js`
   - Connect to the **packages** queue and get only the next package
   - Wait a random number of seconds
   - Post a message to the Vendor Queue (using the supplied arn) to alert them of the delivery
   - Repeat until the queue is empty

> You should eventually be able to have multiple drivers and vendors wired up and acting in concert


## Submission Instructions

Provide the GitHub Repository/Branch/PR so that we can test your system
Provide a UML diagram showcasing the architecture of your delivery system
Document the data and program flow for a package

Submit a well written README.md in your repository following the above general guidelines

