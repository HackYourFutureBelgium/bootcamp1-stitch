import React from 'react';
import '.././../styles/styleTimeline.css';
import Header from '../Header';

const timelineData = [
  {
    text: 'Started working on the app-ideas repository',
    date: 'February 25 2019',
    category: {
      tag: 'app-ideas',
      color: '#FFDB14'
    },
    link: {
      url: 'https://hackyourfuture.be/',
      text: 'Check it out on GitHub'
    }
  },
  {
    text: 'Started the Weekly Coding Challenge program',
    date: 'March 04 2019',
    category: {
      tag: 'blog',
      color: '#e17b77'
    },
    link: {
      url: 'https://hackyourfuture.be/',
      text: 'Check it out here'
    }
  },
  {
    text: 'Got 1.000 followers on Twitter',
    date: 'March 07 2019',
    category: {
      tag: 'twitter',
      color: '#1DA1F2'
    },
    link: {
      url: 'https://hackyourfuture.be/',
      text: 'See profile'
    }
  },
  {
    text: 'I published my first article in the FreeCodeCamp Medium Publication',
    date: 'March 18 2019',
    category: {
      tag: 'medium',
      color: '#6ef'
    },
    link: {
      url: 'https://hackyourfuture.be/',
      text: 'Check it out here'
    }
  },
  {
    text: 'Over 12.000 views in a single day on my Medium posts',
    date: 'April 05 2019',
    category: {
      tag: 'medium',
      color: 'orange'
    },
    link: {
      url: 'https://hackyourfuture.be/',
      text: 'See profile'
    }
  }
];

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.img}</p>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default function Timeline1() {
  return (
    <React.Fragment>
      <Header />
      <h1>React Timeline</h1>
      <Timeline />
    </React.Fragment>
  );
}
