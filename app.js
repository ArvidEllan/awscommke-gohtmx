import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pastMeetups, setPastMeetups] = useState([]);
  const [futureMeetups, setFutureMeetups] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [ticketInfo, setTicketInfo] = useState({});
  const [committeeMembers, setCommitteeMembers] = useState([]);

  useEffect(() => {
    axios.get('https://your-api-gateway.execute-api.your-region.amazonaws.com/past-meetups')
      .then(response => {
        setPastMeetups(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('https://your-api-gateway.execute-api.your-region.amazonaws.com/future-meetups')
      .then(response => {
        setFutureMeetups(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('https://your-api-gateway.execute-api.your-region.amazonaws.com/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('https://your-api-gateway.execute-api.your-region.amazonaws.com/certifications')
      .then(response => {
        setCertifications(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('https://your-api-gateway.execute-api.your-region.amazonaws.com/committee-members')
      .then(response => {
        setCommitteeMembers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://your-api-gateway.execute-api.your-region.amazonaws.com/buy-tickets', ticketInfo)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>AWS Community Day Kenya</h1>
      <h2>Past Meetups</h2>
      <ul>
        {pastMeetups.map((meetup, index) => (
          <li key={index}>{meetup.name}</li>
        ))}
      </ul>
      <h2>Future Meetups</h2>
      <ul>
        {futureMeetups.map((meetup, index) => (
          <li key={index}>{meetup.name}</li>
        ))}
      </ul>
      <h2>Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>{blog.title}</li>
        ))}
      </ul>
      <h2>Certifications</h2>
      <ul>
        {certifications.map((certification, index) => (
          <li key={index}>{certification.name}</li>
        ))}
      </ul>
      <h2>Buy Tickets</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={ticketInfo.name} onChange={(event) => setTicketInfo({ ...ticketInfo, name: event.target.value })} />
        </label>
        <label>
          Email:
          <input type="email" value={ticketInfo.email} onChange={(event) => setTicketInfo({ ...ticketInfo, email: event.target.value })} />