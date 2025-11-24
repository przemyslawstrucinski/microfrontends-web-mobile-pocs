const path = require('path');

// Create doctor profile pages with DSG
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // Import mock doctors data
  const { mockDoctors } = require('./src/data/mockDoctors');

  // Create a page for each doctor using DSG
  mockDoctors.forEach((doctor) => {
    createPage({
      path: `/doctor/${doctor.id}`,
      component: path.resolve('./src/templates/DoctorProfile.tsx'),
      context: {
        doctorId: doctor.id,
      },
      defer: true, // Enable Deferred Static Generation
    });
  });

  // Create an index page listing all doctors
  createPage({
    path: '/',
    component: path.resolve('./src/pages/index.tsx'),
  });
};

