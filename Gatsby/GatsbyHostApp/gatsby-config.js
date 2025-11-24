module.exports = {
  siteMetadata: {
    title: `Doctor Booking Platform`,
    description: `Find and book appointments with verified healthcare professionals`,
    author: `@gatsbyapp`,
    siteUrl: `http://localhost:9000`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `doctor-booking-platform`,
        short_name: `doctors`,
        start_url: `/`,
        background_color: `#0369a1`,
        theme_color: `#0369a1`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

