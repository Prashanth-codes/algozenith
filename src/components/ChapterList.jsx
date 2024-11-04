import React from 'react';
import './ChapterList.css';
import clock from '../assets/clock.png';
function ChapterList({ chapters, selectedChapter, onChapterSelect }) {
  return (
    <div className="chapter-list">
      {chapters.map((chapter) => (
        <button
          key={chapter}
          className={chapter === selectedChapter ? "active-chapter" : ""}
          onClick={() => onChapterSelect(chapter)}
        >
          <span className="chapter-name">{chapter}</span>
          {chapter === selectedChapter && <span className="chapter-time"><img src={clock} alt="clock" className='clock'/>05:00:00</span>}
        </button>
      ))}
    </div>
  );
}

export default ChapterList;
