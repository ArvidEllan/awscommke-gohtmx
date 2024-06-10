package main

import (
    "context"
    "html/template"
    "net/http"
    "strings"

    "github.com/aws/aws-lambda-go/events"
    "github.com/aws/aws-lambda-go/lambda"
)

var templates = template.Must(template.New("").ParseGlob("templates/*.html"))

func main() {
    lambda.Start(handler)
}

func handler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
    path := request.Path

    var tmpl string
    switch path {
    case "/":
        tmpl = "index.html"
    case "/events":
        tmpl = "events.html"
    case "/blogs":
        tmpl = "blogs.html"
    case "/certifications":
        tmpl = "certifications.html"
    case "/tickets":
        tmpl = "tickets.html"
    case "/committee":
        tmpl = "committee.html"
    default:
        return events.APIGatewayProxyResponse{StatusCode: http.StatusNotFound, Body: "Page not found"}, nil
    }

    html, err := renderTemplate(tmpl)
    if err != nil {
        return events.APIGatewayProxyResponse{StatusCode: http.StatusInternalServerError, Body: err.Error()}, nil
    }

    return events.APIGatewayProxyResponse{
        StatusCode: http.StatusOK,
        Headers:    map[string]string{"Content-Type": "text/html"},
        Body:       html,
    }, nil
}

func renderTemplate(tmpl string) (string, error) {
    var buf strings.Builder
    err := templates.ExecuteTemplate(&buf, tmpl, nil)
    if err != nil {
        return "", err
    }
    return buf.String(), nil
}
