import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

export default function CreativeBase({ isAdmin = false }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [reports, setReports] = useState([]);
  const [uploadForm, setUploadForm] = useState({
    title: '',
    description: '',
    file: null
  });
  const [showUploadForm, setShowUploadForm] = useState(false);

  useEffect(() => {
    const storedReports = localStorage.getItem('creativeBaseReports');
    if (storedReports) {
      setReports(JSON.parse(storedReports));
    }
  }, []);

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleShowSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleCloseAuth = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadForm(prev => ({
        ...prev,
        file: file
      }));
    }
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    
    if (!uploadForm.title || !uploadForm.file) {
      alert('Please fill in all required fields');
      return;
    }

    const newReport = {
      id: Date.now(),
      title: uploadForm.title,
      description: uploadForm.description,
      fileName: uploadForm.file.name,
      uploadDate: new Date().toLocaleDateString(),
      fileSize: `${(uploadForm.file.size / 1024 / 1024).toFixed(2)} MB`
    };

    const updatedReports = [...reports, newReport];
    setReports(updatedReports);
    localStorage.setItem('creativeBaseReports', JSON.stringify(updatedReports));

    setUploadForm({
      title: '',
      description: '',
      file: null
    });
    setShowUploadForm(false);
  };

  const handleDeleteReport = (reportId) => {
    const updatedReports = reports.filter(report => report.id !== reportId);
    setReports(updatedReports);
    localStorage.setItem('creativeBaseReports', JSON.stringify(updatedReports));
  };

  return (
    <div className="min-h-screen bg-soft-white">
      <Header onLoginClick={handleShowLogin} />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Creative Base
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {reports.length === 0 ? "No reports yet" : `${reports.length} reports available`}
              </p>
            </motion.div>

            {isAdmin && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold text-gray-900">Admin Panel</h2>
                    <button
                      onClick={() => setShowUploadForm(!showUploadForm)}
                      className="bg-deep-blue hover:bg-sky-blue text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      {showUploadForm ? 'Cancel' : 'Upload New Report'}
                    </button>
                  </div>

                  <AnimatePresence>
                    {showUploadForm && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t pt-4"
                      >
                        <form onSubmit={handleUploadSubmit} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Report Title *
                            </label>
                            <input
                              type="text"
                              value={uploadForm.title}
                              onChange={(e) => setUploadForm(prev => ({ ...prev, title: e.target.value }))}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                              placeholder="Enter report title"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Description
                            </label>
                            <textarea
                              value={uploadForm.description}
                              onChange={(e) => setUploadForm(prev => ({ ...prev, description: e.target.value }))}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                              placeholder="Enter report description"
                              rows="3"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Report File *
                            </label>
                            <input
                              type="file"
                              onChange={handleFileUpload}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                              accept=".pdf,.doc,.docx,.txt"
                              required
                            />
                            {uploadForm.file && (
                              <p className="mt-2 text-sm text-gray-600">
                                Selected: {uploadForm.file.name}
                              </p>
                            )}
                          </div>

                          <button
                            type="submit"
                            className="bg-deep-blue hover:bg-sky-blue text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                          >
                            Upload Report
                          </button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {reports.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {reports.map((report, index) => (
                  <motion.div
                    key={report.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 p-6"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {report.title}
                        </h3>
                        {report.description && (
                          <p className="text-gray-600 text-sm mb-2">{report.description}</p>
                        )}
                      </div>
                      {isAdmin && (
                        <button
                          onClick={() => handleDeleteReport(report.id)}
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      )}
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>File:</span>
                        <span className="font-medium">{report.fileName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span className="font-medium">{report.fileSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Uploaded:</span>
                        <span className="font-medium">{report.uploadDate}</span>
                      </div>
                    </div>

                    <button className="mt-4 w-full bg-deep-blue hover:bg-sky-blue text-white py-2 rounded-lg font-medium transition-colors duration-200">
                      Download Report
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {reports.length === 0 && !isAdmin && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center py-12"
              >
                <div className="text-gray-400 text-6xl mb-4">📄</div>
                <p className="text-xl text-gray-600">
                  No reports available yet. Reports will appear here when uploaded by administrators.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      {showLogin && (
        <LoginForm
          onSwitchToSignup={handleShowSignup}
          onClose={handleCloseAuth}
        />
      )}

      {showSignup && (
        <SignupForm
          onSwitchToLogin={handleShowLogin}
          onClose={handleCloseAuth}
        />
      )}
    </div>
  );
}
