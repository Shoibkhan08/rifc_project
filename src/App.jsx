import React,{ Suspense, lazy } from 'react';
import Navbar from './component/navbar/Navbar';
import Home from './component/Home';
import News from './component/News';
import OurTeam from './component/OurTeam';
import About from './component/About';
import NewsArticle from './component/NewsCard/NewsArticle';
import Footer from './component/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import player2 from './assets/player2.jpg';
import player3 from './assets/player3.jpg';
import player4 from './assets/player4.jpg';
import player5 from './assets/player5.jpg';
import player6 from './assets/player6.jpg';
import player7 from './assets/player7.jpg';
// Lazy loaded components
// const Home = lazy(() => import('./component/Home'));
// const News = lazy(() => import('./component/News'));
// const OurTeam = lazy(() => import('./component/OurTeam'));
// const About = lazy(() => import('./component/About'));
// const NewsArticle = lazy(() => import('./component/NewsCard/NewsArticle'));



function App() {

  const newsArticles = [
    {
      id: 1,
      title: "Rapid India FC Clinches State Championship",
      description: "A remarkable victory with a 3-1 score against the defending champions.",
      image: player2,
      link: "/news/1",
    },
    {
      id: 2,
      title: "Midfielder Rahul Sharma Joins the Squad",
      description: "Exciting young talent Rahul Sharma has officially joined Rapid India FC.",
      image: player3,
      link: "/news/2",
    },
    {
      id: 3,
      title: "Youth Academy Trials Announced",
      description: "Registrations are open for aspiring footballers to join our youth academy.",
      image: player4,
      link: "/news/3",
    },
    {
      id: 4,
      title: "Exclusive Interview with Coach Arjun Singh",
      description: "Our head coach shares strategies for the upcoming season in an exclusive talk.",
      image: player5,
      link: "/news/4",
    },
    {
      id: 5,
      title: "Upcoming Fixture: Rapid India FC vs Nepal Strikers",
      description: "Gear up for an exciting encounter scheduled for 22nd June 2025.",
      image: player6,
      link: "/news/5",
    },
    {
      id: 6,
      title: "New Training Facilities Inaugurated",
      description: "Rapid India FC unveils state-of-the-art training facilities for players.",
      image: player7,
      link: "/news/6",
    },
  ];


  return (
    <>
      
      {/* <Suspense fallback={<div>Loading...</div>}> */}
<marquee behavior="" direction="">📢 Next Match: Rapid India FC vs Rapid Nepal FC Warriors | 20th June | Book Your Tickets Now! ⚽🔥
        || Limited Offer! 🎟️ Get 20% Off on Early Match Tickets – Only This Week!
        || 🚨 BREAKING: Rapid India FC Signs 3 New Talented Players for the Upcoming Season!
        || Stay Updated! Subscribe to Our Newsletter for Latest Match Updates, Player News & More. 📩
      </marquee>
      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path='/news' element={<News newsArticles={newsArticles}  />} />
          <Route path='/team' element={<OurTeam />} />
          <Route path='/about' element={<About />} />
          <Route path='/news/:id' element={<NewsArticle data={newsArticles} />} />

        </Route>
      </Routes>
      <Footer />
      {/* </Suspense> */}

    </>
  )
}

export default App;
