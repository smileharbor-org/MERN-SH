// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper, Box } from '@mui/material';
// import Carousel from 'react-material-ui-carousel';
// import image1 from '../../assets/image1.jpg';
// import image2 from '../../assets/image2.jpg';
// import image3 from '../../assets/image3.jpg';

// const App = () => {
//     const images = [image1, image2, image3];

//     return (
//         <div>
            
            

//             {/* Carousel Section */}
//             <Box sx={{ mt: 2 }}>
//                 <Carousel>
//                     {images.map((image, index) => (
//                         <img
//                             key={index}
//                             src={image}
//                             alt={`Slide ${index + 1}`}
//                             style={{ width: '100%', height: '800px', objectFit: 'cover' }}
//                         />
//                     ))}
//                 </Carousel>
//             </Box>

//             {/* About Us Section */}
//             <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 2 }}>
//       {/* Overview Card */}
//       <Card
//         sx={{
//           backgroundColor: '#FFF8DC', // Light yellow background
//           borderRadius: 2,
//           padding: 2,
//         }}
//       >
//         <CardContent>
//           <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//             Overview
//           </Typography>
//           <Typography variant="body1" sx={{ marginTop: 1 }}>
//             Smile Harbor Foundation is a non-profit organization focused on
//             uplifting underserved communities by providing healthcare,
//             educational resources, and emotional support. We believe in building
//             a society where everyone has the opportunity to lead a healthy,
//             informed, and dignified life. Through our work, we aim to create
//             meaningful change, restoring hope and happiness for people in need.
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* Mission Card */}
//       <Card
//         sx={{
//           backgroundColor: '#FFE4E1', // Light pink background
//           borderRadius: 2,
//           padding: 2,
//         }}
//       >
//         <CardContent>
//           <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//             Mission
//           </Typography>
//           <Typography variant="body1" sx={{ marginTop: 1 }}>
//             To bring smiles and hope to every life we touch, Smile Harbor
//             Foundation is dedicated to supporting the elderly, individuals with
//             special needs, and those facing socioeconomic challenges. We work to
//             deliver impactful programs that improve health, education, and
//             overall well-being, ensuring that no one is left behind.
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>

//             {/* Our Work Section */}
//             <Container sx={{ mt: 4, mb: 4 }}>
//                 <Typography variant="h4" align="center" gutterBottom>
//                     Our Work
//                 </Typography>
//                 <Grid container spacing={4}>
//                     <Grid item xs={12} sm={6}>
//                         <Paper elevation={3} sx={{ p: 2 }}>
//                             <Typography variant="h6">Free Medical Camp for the Elderly</Typography>
//                             <Typography>
//                                 We organized a free medical camp for elderly citizens, providing check-ups, consultations, and free medications. This initiative improved access to healthcare for many.
//                             </Typography>
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                         <Paper elevation={3} sx={{ p: 2 }}>
//                             <Typography variant="h6">Book Donation Drive</Typography>
//                             <Typography>
//                                 Our Book Donation Drive collected a wide range of books for children and adults. This initiative not only provided educational resources but also promoted the joy of learning for people of all ages.
//                             </Typography>
//                         </Paper>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </div>
//     );
// };

// export default App;
import React from "react";
import { Card, CardContent } from "@/components/ui/card"; // Update the import path based on your setup
import Carousel from "react-material-ui-carousel"; // Replace this if you're switching to a different carousel library
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const App = () => {
  const images = [image1, image2, image3];

  return (
    <div>
      {/* Carousel Section */}
      <div className="mt-4">
        <Carousel>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[800px] object-cover"
            />
          ))}
        </Carousel>
      </div>

      {/* About Us Section */}
      <h2 className="text-center text-2xl font-bold mt-8 mb-6">About Us</h2>
      <div className="px-4 space-y-8">
        {/* Overview Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
          <h3 className="text-lg font-semibold relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-gray-300">
            Overview
          </h3>
          <Card className="col-span-2 bg-yellow-50">
            <CardContent>
              <p>
                Smile Harbor Foundation is a non-profit organization focused on
                uplifting underserved communities by providing healthcare,
                educational resources, and emotional support. We believe in
                building a society where everyone has the opportunity to lead a
                healthy, informed, and dignified life. Through our work, we aim
                to create meaningful change, restoring hope and happiness for
                people in need.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
          <h3 className="text-lg font-semibold relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-gray-300">
            Mission
          </h3>
          <Card className="col-span-2 bg-pink-50">
            <CardContent>
              <p>
                To bring smiles and hope to every life we touch, Smile Harbor
                Foundation is dedicated to supporting the elderly, individuals
                with special needs, and those facing socioeconomic challenges.
                We work to deliver impactful programs that improve health,
                education, and overall well-being, ensuring that no one is left
                behind.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Work Section */}
      <h2 className="text-center text-2xl font-bold mt-8 mb-6">Our Work</h2>
      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Free Medical Camp */}
        <Card className="p-4 shadow-md">
          <CardContent>
            <h3 className="font-semibold mb-2">Free Medical Camp for the Elderly</h3>
            <p>
              We organized a free medical camp for elderly citizens, providing
              check-ups, consultations, and free medications. This initiative
              improved access to healthcare for many.
            </p>
          </CardContent>
        </Card>

        {/* Book Donation Drive */}
        <Card className="p-4 shadow-md">
          <CardContent>
            <h3 className="font-semibold mb-2">Book Donation Drive</h3>
            <p>
              Our Book Donation Drive collected a wide range of books for
              children and adults. This initiative not only provided educational
              resources but also promoted the joy of learning for people of all
              ages.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;
