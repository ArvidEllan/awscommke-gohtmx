AWS COMMUNITY KENYA WEBSITE & PWA 
Built using golang and HTMX
Starting with Monolith Setup Before Migrating to Serveless 

#Instructions for Server Setup

Setting Up the Go Server
    First, initialize a new Go module:

    sh
    Copy code
    mkdir aws-community-day-kenya
    cd aws-community-day-kenya
    go mod init aws-community-day-kenya

#Set Up the Serverless Framework
    First, you need to install the Serverless Framework if you haven't already:

    
    #Copy code
    npm install -g serverless
    2. Configure AWS Lambda Functions and API Gateway
    Create a new Serverless service:

    #Copy code
    mkdir aws-community-day-kenya
    cd aws-community-day-kenya
    serverless create --template aws-go-dep --path .
    This command creates the necessary directory structure and files for a Go-based Serverless project.

    #Build and Deploy the Application
    Build the Go application:

    sh
    Copy code
    GOOS=linux GOARCH=amd64 go build -o bin/main
    Deploy the application using the Serverless Framework:

    sh
    Copy code
    serverless deploy
    This command will package your application, deploy it to AWS Lambda, and set up the necessary API Gateway endpoints.


    ###################################################################################
    1. Install AWS CDK and Create a New CDK Project
    First, install the AWS CDK if you haven't already:

    Copy code
    npm install -g aws-cdk
    Create a new CDK project:

    Copy code
    mkdir aws-community-day-kenya
    cd aws-community-day-kenya
    cdk init app --language typescript
    2. Set Up the Go Lambda Function
    Create a directory for the Go code inside your CDK project:

    Copy code
    mkdir -p lambda

    4. Deploy the Application Using CDK
    First, build your Go code for Linux (as Lambda runs on a Linux environment):

    
    Copy code
    cd lambda
    GOOS=linux GOARCH=amd64 go build -o main
    cd ..
    Now, you can deploy the stack using AWS CDK:

   
    Copy code
    cdk bootstrap
    cdk deploy