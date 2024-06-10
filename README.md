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

    sh
    Copy code
    npm install -g serverless
    2. Configure AWS Lambda Functions and API Gateway
    Create a new Serverless service:

    sh
    Copy code
    mkdir aws-community-day-kenya
    cd aws-community-day-kenya
    serverless create --template aws-go-dep --path .
    This command creates the necessary directory structure and files for a Go-based Serverless project.
