import React, { useState } from "react";
import BasePage from "./BasePage";
import "./DiscussionForum.css";

function DiscussionForum() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [replyContent, setReplyContent] = useState("");

  const courses = [
    {
      id: 1,
      title: "Database Management System",
      instructor: "Dr. Sarah Chen",
      provider: "Amazon",
      threads: [
        {
          id: 1,
          title: "Help with SQL JOIN queries",
          author: "John Doe",
          date: "2024-12-15",
          replies: 12,
          views: 45,
          lastActivity: "2 hours ago",
          content: "I'm having trouble understanding how to properly use JOIN operations in SQL. Can someone explain the difference between INNER JOIN and LEFT JOIN with examples?",
          tags: ["sql", "queries", "help"],
          repliesList: [
            {
              id: 1,
              author: "Dr. Sarah Chen",
              date: "2024-12-15",
              content: "Great question! INNER JOIN returns only matching rows from both tables, while LEFT JOIN returns all rows from the left table and matching rows from the right table.",
              isInstructor: true
            },
            {
              id: 2,
              author: "Jane Smith",
              date: "2024-12-15",
              content: "Here's a simple example: SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id;",
              isInstructor: false
            }
          ]
        },
        {
          id: 2,
          title: "Database normalization best practices",
          author: "Mike Johnson",
          date: "2024-12-14",
          replies: 8,
          views: 32,
          lastActivity: "5 hours ago",
          content: "What are some real-world examples of database normalization up to 3NF?",
          tags: ["normalization", "design"],
          repliesList: [
            {
              id: 1,
              author: "Dr. Sarah Chen",
              date: "2024-12-14",
              content: "Excellent question! Let me share a practical example from our course materials.",
              isInstructor: true
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Object Oriented Programming",
      instructor: "Dr. James Wilson",
      provider: "Microsoft",
      threads: [
        {
          id: 1,
          title: "Understanding polymorphism in Java",
          author: "Sarah Wilson",
          date: "2024-12-16",
          replies: 6,
          views: 28,
          lastActivity: "1 hour ago",
          content: "Can someone explain runtime polymorphism with a practical example?",
          tags: ["java", "polymorphism", "oop"],
          repliesList: []
        },
        {
          id: 2,
          title: "Design patterns discussion",
          author: "Alex Chen",
          date: "2024-12-13",
          replies: 15,
          views: 67,
          lastActivity: "3 hours ago",
          content: "What's your favorite design pattern and why?",
          tags: ["design-patterns"],
          repliesList: []
        }
      ]
    },
    {
      id: 3,
      title: "Frontend Development",
      instructor: "Jessica Lee",
      provider: "Meta",
      threads: [
        {
          id: 1,
          title: "React hooks best practices",
          author: "Tom Brown",
          date: "2024-12-15",
          replies: 9,
          views: 41,
          lastActivity: "30 minutes ago",
          content: "When should I use useCallback and useMemo hooks?",
          tags: ["react", "hooks"],
          repliesList: []
        }
      ]
    }
  ];

  const [posts, setPosts] = useState(courses);

  const handleCreatePost = (courseId) => {
    if (newPost.title && newPost.content) {
      const updatedCourses = posts.map(course => {
        if (course.id === courseId) {
          const newThread = {
            id: Date.now(),
            title: newPost.title,
            author: "You",
            date: new Date().toISOString().split('T')[0],
            replies: 0,
            views: 0,
            lastActivity: "Just now",
            content: newPost.content,
            tags: ["new"],
            repliesList: []
          };
          return {
            ...course,
            threads: [newThread, ...course.threads]
          };
        }
        return course;
      });
      setPosts(updatedCourses);
      setNewPost({ title: "", content: "" });
    }
  };

  const handleAddReply = (courseId, threadId) => {
    if (replyContent.trim()) {
      const updatedCourses = posts.map(course => {
        if (course.id === courseId) {
          const updatedThreads = course.threads.map(thread => {
            if (thread.id === threadId) {
              const newReply = {
                id: Date.now(),
                author: "You",
                date: new Date().toISOString().split('T')[0],
                content: replyContent,
                isInstructor: false
              };
              return {
                ...thread,
                replies: thread.replies + 1,
                repliesList: [...thread.repliesList, newReply],
                lastActivity: "Just now"
              };
            }
            return thread;
          });
          return { ...course, threads: updatedThreads };
        }
        return course;
      });
      setPosts(updatedCourses);
      setReplyContent("");
    }
  };

  return (
    <BasePage 
      title="Discussion Forum" 
      description="Participate in course discussions and ask questions"
      activeItem="forum"
    >
      <div className="discussion-forum-container">
        {/* Create New Post Section */}
        <div className="create-post-section">
          <h3>Create New Discussion</h3>
          <div className="post-form">
            <select 
              className="course-select"
              onChange={(e) => setSelectedCourse(e.target.value)}
              value={selectedCourse || ""}
            >
              <option value="">Select a course</option>
              {posts.map(course => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            </select>
            
            {selectedCourse && (
              <>
                <input
                  type="text"
                  placeholder="Post title"
                  className="post-title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                />
                <textarea
                  placeholder="What would you like to discuss?"
                  className="post-content"
                  rows="4"
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                />
                <button 
                  className="submit-post-btn"
                  onClick={() => handleCreatePost(parseInt(selectedCourse))}
                >
                  Create Post
                </button>
              </>
            )}
          </div>
        </div>

        {/* Course Discussions */}
        <div className="discussions-grid">
          {posts.map(course => (
            <div key={course.id} className="course-discussion-card">
              <div className="discussion-header">
                <div className="course-info">
                  <div className="course-provider">{course.provider}</div>
                  <h3>{course.title}</h3>
                  <p>Instructor: {course.instructor}</p>
                </div>
                <div className="threads-count">
                  {course.threads.length} {course.threads.length === 1 ? 'thread' : 'threads'}
                </div>
              </div>

              <div className="threads-list">
                {course.threads.map(thread => (
                  <div key={thread.id} className="thread-card">
                    <div className="thread-header">
                      <h4>{thread.title}</h4>
                      <div className="thread-meta">
                        <span className="author">by {thread.author}</span>
                        <span className="date">{thread.date}</span>
                      </div>
                    </div>
                    
                    <div className="thread-content">
                      <p>{thread.content}</p>
                    </div>

                    <div className="thread-tags">
                      {thread.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>

                    <div className="thread-stats">
                      <span>💬 {thread.replies} replies</span>
                      <span>👁️ {thread.views} views</span>
                      <span>🕒 {thread.lastActivity}</span>
                    </div>

                    {/* Replies Section */}
                    <div className="replies-section">
                      <h5>Replies ({thread.repliesList.length})</h5>
                      <div className="replies-list">
                        {thread.repliesList.map(reply => (
                          <div key={reply.id} className={`reply ${reply.isInstructor ? 'instructor-reply' : ''}`}>
                            <div className="reply-header">
                              <strong>{reply.author}</strong>
                              {reply.isInstructor && <span className="instructor-badge">Instructor</span>}
                              <span className="reply-date">{reply.date}</span>
                            </div>
                            <p>{reply.content}</p>
                          </div>
                        ))}
                      </div>

                      {/* Reply Form */}
                      <div className="reply-form">
                        <textarea
                          placeholder="Write your reply..."
                          rows="3"
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                        />
                        <button 
                          className="submit-reply-btn"
                          onClick={() => handleAddReply(course.id, thread.id)}
                        >
                          Post Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {course.threads.length === 0 && (
                <div className="no-threads">
                  <p>No discussions yet. Start the first one!</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </BasePage>
  );
}

export default DiscussionForum;