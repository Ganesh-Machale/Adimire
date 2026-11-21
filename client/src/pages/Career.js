import React, { useState, useEffect } from 'react';
import {
  HiLocationMarker,
  HiOfficeBuilding,
  HiBriefcase,
  HiExternalLink,
} from 'react-icons/hi';
import { getCareers } from '../services/api';
import '../styles/Career.css';

const Career = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const data = await getCareers();
        if (data) {
          setCareers(data);
        }
      } catch (err) {
        // No careers available
      } finally {
        setLoading(false);
      }
    };
    fetchCareers();
  }, []);

  return (
    <div className="career-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Career Opportunities</h1>
          <p>
            Join our team of innovators. Explore current openings and take the
            next step in your career with Adimire.
          </p>
        </div>
      </div>

      {/* Career Content */}
      <div className="career-content">
        <div className="container">
          <div className="career-grid">
            {loading ? (
              <div className="career-loading">Loading opportunities...</div>
            ) : careers.length === 0 ? (
              <div className="career-empty">
                <div className="career-empty-icon">
                  <HiBriefcase />
                </div>
                <h3>No Openings Right Now</h3>
                <p>
                  We don't have any open positions at the moment, but we're
                  always looking for talented engineers and creators. Send your resume to{' '}
                  <strong style={{ color: 'var(--cyan)' }}>hrd@adimire.com</strong>
                </p>
              </div>
            ) : (
              careers.map((job) => (
                <div key={job._id} className="career-card">
                  <div className="career-card-header">
                    <h3>{job.title}</h3>
                    <span className="career-type-badge">{job.type}</span>
                  </div>

                  <div className="career-meta">
                    <div className="career-meta-item">
                      <HiOfficeBuilding className="meta-icon" />
                      <span>{job.department}</span>
                    </div>
                    <div className="career-meta-item">
                      <HiLocationMarker className="meta-icon" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  {job.description && <p>{job.description}</p>}

                  <button className="career-apply-btn">
                    Apply Now <HiExternalLink />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
