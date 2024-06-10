import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as path from 'path';

export class AwsCommunityDayKenyaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define the Lambda function
    const awsCommunityDayLambda = new lambda.Function(this, 'AwsCommunityDayLambda', {
      runtime: lambda.Runtime.GO_1_X,
      handler: 'main',
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')),
    });

    // Define the API Gateway REST API
    const api = new apigateway.LambdaRestApi(this, 'AwsCommunityDayApi', {
      handler: awsCommunityDayLambda,
      proxy: false,
    });

    const paths = ['/', '/events', '/blogs', '/certifications', '/tickets', '/committee'];

    paths.forEach((path) => {
      const resource = api.root.addResource(path === '/' ? '' : path.slice(1));
      resource.addMethod('GET');
    });
  }
}
