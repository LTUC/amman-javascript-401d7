# Lab: AWS: S3 and Lambda

## Overview
AWS Lambda allows writing code that is triggered in the cloud, without thinking about maintaining servers. We'll use it today to automatically run some processing on image files after they're uploaded to an S3 Bucket

## Resources

## Feature Tasks

- A user should be able to upload an image at any size, and have both the original size and a thumbnail size
- When an image is uploaded to your S3 bucket, it should trigger a Lambda function which must;
  - Create a 50x50 pixel thumbnail version of that image
  - Save it to another S3 bucket.
  - It should do so with a predictable naming convention, so that your server and/or frontend know where that thumbnail image will be.

**HINT**: There are numerous examples of NodeJS Lambda functions that do this work. Do not reinvent the wheel. Focus your efforts on the architecture and mechanics

## Documentation

- In your `README.md` include:
  - a description of how to use your lambda.
  - a description of any issues you encountered during deployment of this lambda.
  - an image and thumbnail that your Lambda processed

## Stretch Goal

- Automatically deploy your function on check-ins to your main branch using a github action
- HINT: Explore the GitHub marketplace

## Submission Instructions

- Create a new repository for your lambda function, called 'image-lambda'
- Work on a non-main branch and make commits appropriately.
- Update your README.md file with the required documentation above.
- Create a pull request to your master branch with your work for this lab.
- Submit the link to that pull request on Canvas.

