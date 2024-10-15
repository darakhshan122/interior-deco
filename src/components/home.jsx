// // src/components/Home.jsx
// import React from 'react';
// import MainImage from './mainImage';
// import FirstDiv from './image';
// import SecondDiv from './seconddiv';
// import ThirdDiv from './thirddiv';

// const Home = () => {
//   return (
//     <div className="flex flex-col min-h-screen pt-16">
//       {/* Main Image Component */}
//       <MainImage />

       
      
//       {/* Second Div Component */}
//       <SecondDiv />

//       {/* First Div Component */}
//       <FirstDiv />
      
//       {/* Third Div Component */}
//       <ThirdDiv />
//     </div>
//   );
// };

// export default Home;




// src/components/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import MainImage from './mainImage';
import FirstDiv from './FirstDiv';
import SecondDiv from './SecondDiv';
import ThirdDiv from './ThirdDiv';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Helmet>
        <title>Your Dynamic Page Title</title>
        <meta name="description" content="A description of your Home page." />
        <meta name="keywords" content="home, interior design, architecture" />
      </Helmet>

      {/* Main Image Component */}
      <MainImage />

      {/* Second Div Component */}
      <SecondDiv />

      {/* First Div Component */}
      <FirstDiv />
      
      {/* Third Div Component */}
      <ThirdDiv />
    </div>
  );
};

export default Home;
