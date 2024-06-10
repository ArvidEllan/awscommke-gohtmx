package main

import (
    "html/template"
    "log"
    "net/http"
)

var templates = template.Must(template.ParseGlob("templates/*.html"))

func main() {
    http.HandleFunc("/", homeHandler)
    http.HandleFunc("/events", eventsHandler)
    http.HandleFunc("/blogs", blogsHandler)
    http.HandleFunc("/certifications", certificationsHandler)
    http.HandleFunc("/tickets", ticketsHandler)
    http.HandleFunc("/committee", committeeHandler)

    log.Println("Server started on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
    renderTemplate(w, "index.html")
}

func eventsHandler(w http.ResponseWriter, r *http.Request) {
    renderTemplate(w, "events.html")
}

func blogsHandler(w http.ResponseWriter, r *http.Request) {
    renderTemplate(w, "blogs.html")
}

func certificationsHandler(w http.ResponseWriter, r *http.Request) {
    renderTemplate(w, "certifications.html")
}

func ticketsHandler(w http.ResponseWriter, r *http.Request) {
    renderTemplate(w, "tickets.html")
}

func committeeHandler(w http.ResponseWriter, r *http.Request) {
    renderTemplate(w, "committee.html")
}

func renderTemplate(w http.ResponseWriter, tmpl string) {
    err := templates.ExecuteTemplate(w, tmpl, nil)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
    }
}
