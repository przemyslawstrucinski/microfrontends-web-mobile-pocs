import Head from 'next/head';
import axios from 'axios';
import styles from '../styles/Weather.module.css';

export default function WeatherSSR({ weatherData, error }) {
  
  if (error) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Weather SSR - Error</title>
          <meta name="description" content="Weather information server-side rendered" />
        </Head>
        <main className={styles.main}>
          <h1>Weather Dashboard (SSR)</h1>
          <p className={styles.error}>{error}</p>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Weather SSR - Current Conditions</title>
        <meta name="description" content="Server-side rendered weather information for major cities" />
        <meta name="keywords" content="weather, temperature, forecast, SSR" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Weather Dashboard</h1>
        <p className={styles.subtitle}>Server-Side Rendered with Next.js</p>

        <div className={styles.grid}>
          {weatherData.map((weather) => (
            <article key={weather.city} className={styles.card}>
              <h2 className={styles.city}>{weather.city}</h2>
              <div className={styles.temperature}>{weather.temperature}°C</div>
              <div className={styles.condition}>{weather.condition}</div>
              <div className={styles.details}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Humidity</span>
                  <span className={styles.detailValue}>{weather.humidity}%</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Wind Speed</span>
                  <span className={styles.detailValue}>{weather.windSpeed} km/h</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Rendered at: {new Date().toLocaleString()}</p>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:4002/weather');
    return {
      props: {
        weatherData: response.data,
        error: null,
      },
    };
  } catch (error) {
    console.error('Failed to fetch weather:', error);
    return {
      props: {
        weatherData: [],
        error: 'Failed to load weather data. Make sure the Weather API is running on port 4002.',
      },
    };
  }
}

