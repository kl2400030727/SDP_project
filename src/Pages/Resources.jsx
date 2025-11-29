import React, { useState } from "react";
import BasePage from "./BasePage";
import "./Resources.css";

function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const resources = [
    {
      id: 1,
      title: "Database Management System",
      provider: "Amazon",
      materials: [
        {
          id: 1,
          title: "SQL Cheat Sheet",
          type: "pdf",
          size: "2.4 MB",
          uploadDate: "2024-12-10",
          downloads: 145,
          description: "Quick reference guide for SQL commands and syntax",
          category: "cheatsheet"
        },
        {
          id: 2,
          title: "Database Design Patterns",
          type: "pdf",
          size: "3.1 MB",
          uploadDate: "2024-12-08",
          downloads: 89,
          description: "Common database design patterns and best practices",
          category: "guide"
        },
        {
          id: 3,
          title: "Normalization Examples",
          type: "zip",
          size: "5.2 MB",
          uploadDate: "2024-12-05",
          downloads: 67,
          description: "Real-world examples of database normalization",
          category: "examples"
        },
        {
          id: 4,
          title: "SQL Practice Exercises",
          type: "pdf",
          size: "1.8 MB",
          uploadDate: "2024-12-12",
          downloads: 203,
          description: "Practice problems with solutions",
          category: "exercises"
        }
      ]
    },
    {
      id: 2,
      title: "Object Oriented Programming",
      provider: "Microsoft",
      materials: [
        {
          id: 1,
          title: "OOP Principles Guide",
          type: "pdf",
          size: "2.1 MB",
          uploadDate: "2024-12-09",
          downloads: 112,
          description: "Comprehensive guide to OOP principles",
          category: "guide"
        },
        {
          id: 2,
          title: "Design Patterns Examples",
          type: "zip",
          size: "4.3 MB",
          uploadDate: "2024-12-06",
          downloads: 78,
          description: "Code examples for common design patterns",
          category: "examples"
        },
        {
          id: 3,
          title: "Java Best Practices",
          type: "pdf",
          size: "1.9 MB",
          uploadDate: "2024-12-11",
          downloads: 95,
          description: "Coding standards and best practices for Java",
          category: "guide"
        }
      ]
    },
    {
      id: 3,
      title: "Frontend Development",
      provider: "Meta",
      materials: [
        {
          id: 1,
          title: "React Hooks Reference",
          type: "pdf",
          size: "1.5 MB",
          uploadDate: "2024-12-13",
          downloads: 167,
          description: "Complete reference for React hooks",
          category: "cheatsheet"
        },
        {
          id: 2,
          title: "CSS Grid Tutorial",
          type: "pdf",
          size: "2.8 MB",
          uploadDate: "2024-12-07",
          downloads: 134,
          description: "Step-by-step CSS Grid layout tutorial",
          category: "tutorial"
        },
        {
          id: 3,
          title: "JavaScript ES6+ Features",
          type: "pdf",
          size: "2.2 MB",
          uploadDate: "2024-12-14",
          downloads: 156,
          description: "Modern JavaScript features and syntax",
          category: "guide"
        },
        {
          id: 4,
          title: "Project Templates",
          type: "zip",
          size: "6.7 MB",
          uploadDate: "2024-12-04",
          downloads: 89,
          description: "Starter templates for React projects",
          category: "templates"
        }
      ]
    },
    {
      id: 4,
      title: "Probability and Statistics",
      provider: "Stanford",
      materials: [
        {
          id: 1,
          title: "Probability Formulas",
          type: "pdf",
          size: "1.2 MB",
          uploadDate: "2024-12-08",
          downloads: 98,
          description: "Essential probability formulas and theorems",
          category: "cheatsheet"
        },
        {
          id: 2,
          title: "Statistical Tables",
          type: "pdf",
          size: "1.8 MB",
          uploadDate: "2024-12-05",
          downloads: 67,
          description: "Z-table, T-table, and other statistical tables",
          category: "reference"
        }
      ]
    },
    {
      id: 5,
      title: "Open Source Engineering",
      provider: "GitHub",
      materials: [
        {
          id: 1,
          title: "Git Commands Guide",
          type: "pdf",
          size: "1.6 MB",
          uploadDate: "2024-12-12",
          downloads: 178,
          description: "Essential Git commands and workflows",
          category: "cheatsheet"
        },
        {
          id: 2,
          title: "Contributing Guidelines",
          type: "pdf",
          size: "2.3 MB",
          uploadDate: "2024-12-09",
          downloads: 92,
          description: "How to contribute to open source projects",
          category: "guide"
        }
      ]
    }
  ];

  const categories = [
    { id: "all", name: "All Resources" },
    { id: "cheatsheet", name: "Cheat Sheets" },
    { id: "guide", name: "Guides" },
    { id: "examples", name: "Examples" },
    { id: "exercises", name: "Exercises" },
    { id: "tutorial", name: "Tutorials" },
    { id: "templates", name: "Templates" },
    { id: "reference", name: "Reference" }
  ];

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'zip': return '📦';
      case 'doc': return '📝';
      case 'video': return '🎥';
      default: return '📁';
    }
  };

  const filteredResources = resources.map(course => ({
    ...course,
    materials: course.materials.filter(material =>
      material.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" || material.category === selectedCategory)
    )
  })).filter(course => course.materials.length > 0);

  const handleDownload = (material) => {
    // Simulate download
    alert(`Downloading: ${material.title}`);
  };

  return (
    <BasePage 
      title="Resources" 
      description="Additional learning resources and references for your courses"
      activeItem="resources"
    >
      <div className="resources-container">
        {/* Search and Filter Section */}
        <div className="resources-header">
          <div className="search-section">
            <input
              type="text"
              placeholder="Search resources..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="search-icon">🔍</div>
          </div>
          
          <div className="filter-section">
            <select 
              className="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="resources-grid">
          {filteredResources.map(course => (
            <div key={course.id} className="course-resources-card">
              <div className="resources-header-card">
                <div className="course-info">
                  <div className="course-provider">{course.provider}</div>
                  <h3>{course.title}</h3>
                  <p>{course.materials.length} resources available</p>
                </div>
              </div>

              <div className="materials-list">
                {course.materials.map(material => (
                  <div key={material.id} className="material-card">
                    <div className="material-icon">
                      {getFileIcon(material.type)}
                    </div>
                    
                    <div className="material-info">
                      <h4>{material.title}</h4>
                      <p className="material-description">{material.description}</p>
                      <div className="material-meta">
                        <span className="material-type">{material.type.toUpperCase()}</span>
                        <span className="material-size">{material.size}</span>
                        <span className="material-date">{material.uploadDate}</span>
                        <span className="material-downloads">📥 {material.downloads}</span>
                      </div>
                      <span className={`material-category ${material.category}`}>
                        {categories.find(cat => cat.id === material.category)?.name}
                      </span>
                    </div>

                    <div className="material-actions">
                      <button 
                        className="download-btn"
                        onClick={() => handleDownload(material)}
                      >
                        Download
                      </button>
                      <button className="preview-btn">Preview</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="no-resources">
            <h3>No resources found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Quick Stats */}
        <div className="resources-stats">
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-content">
              <h4>Total Resources</h4>
              <div className="stat-value">
                {resources.reduce((total, course) => total + course.materials.length, 0)}
              </div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📄</div>
            <div className="stat-content">
              <h4>PDF Documents</h4>
              <div className="stat-value">
                {resources.reduce((total, course) => 
                  total + course.materials.filter(m => m.type === 'pdf').length, 0
                )}
              </div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div className="stat-content">
              <h4>Zip Files</h4>
              <div className="stat-value">
                {resources.reduce((total, course) => 
                  total + course.materials.filter(m => m.type === 'zip').length, 0
                )}
              </div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📥</div>
            <div className="stat-content">
              <h4>Total Downloads</h4>
              <div className="stat-value">
                {resources.reduce((total, course) => 
                  total + course.materials.reduce((sum, m) => sum + m.downloads, 0), 0
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasePage>
  );
}

export default Resources;