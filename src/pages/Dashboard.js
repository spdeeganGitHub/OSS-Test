import React from 'react';

function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Student Dashboard</h2>
      <h3>Academics</h3>
      <ul>
        <li>Class: COMP 101 - Grade: A</li>
        <li>Class: HIST 210 - Grade: B+</li>
        <li>Upcoming Assignment: COMP 101 Project due Jan 20</li>
      </ul>
      <h3>Financial Aid</h3>
      <p>Status: Approved for Spring 2025</p>
      <h3>Student Records</h3>
      <p>Major: Computer Science</p>
      <p>GPA: 3.75</p>
      <h3>Campus Life</h3>
      <ul>
        <li>Housing: Morrison Hall</li>
        <li>Dining Plan: Unlimited</li>
        <li>Club: Coding for Good</li>
      </ul>
    </div>
  );
}

export default Dashboard;
