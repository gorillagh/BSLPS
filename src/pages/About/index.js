import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import YouTube from "react-youtube";
import YouTubePlayer from "../../components/YouTubePlayer";

const sections = [
  {
    title: "Introduction",
    texts: [
      "Welcome to the Best School of Languages and Professional Studies (BSLPS), Ghana's premier educational institution for language learning and professional skill development. Established in 2023, BSLPS is dedicated to providing exceptional educational experiences to individuals from around the world.",
      "At BSLPS, we understand the importance of effective communication in today's globalized world. That's why we offer comprehensive language programs in English and French, enabling our students to gain fluency and confidence in these widely spoken languages. Additionally, we go beyond languages and offer a diverse range of professional skill development courses, empowering our students with practical skills that are in high demand. With our experienced faculty, modern facilities, and student-centered approach, we provide a nurturing and supportive learning environment that encourages personal growth and success. Whether you are a beginner or looking to enhance your existing skills, BSLPS is the ideal place to embark on your educational journey.",
    ],
  },
  {
    title: "Mission",
    texts: [
      "Our mission at BSLPS is to empower individuals with language proficiency and practical skills for personal and professional success. We are committed to providing high-quality education that fosters cultural understanding, creativity, critical thinking, and lifelong learning. By nurturing our students' talents and aspirations, we aim to make a positive impact on their lives and society as a whole.",
    ],
  },
  {
    title: "Vision",
    texts: [
      "Our mission at BSLPS is to empower individuals with language proficiency and practical skills for personal and professional success. We are committed to providing high-quality education that fosters cultural understanding, creativity, critical thinking, and lifelong learning. By nurturing our students' talents and aspirations, we aim to make a positive impact on their lives and society as a whole.",
    ],
  },
  {
    title: "Values",
    texts: [
      "Our mission at BSLPS is to empower individuals with language proficiency and practical skills for personal and professional success. We are committed to providing high-quality education that fosters cultural understanding, creativity, critical thinking, and lifelong learning. By nurturing our students' talents and aspirations, we aim to make a positive impact on their lives and society as a whole.",
    ],
    lists: [
      "Integrity: We uphold the highest standards of ethical conduct, honesty, and professionalism in everything we do.",
      "Excellence: We strive for excellence in teaching, learning, and service delivery, continually seeking improvement and innovation.",
      "Diversity: We celebrate diversity and create an inclusive environment that respects and values individuals from all backgrounds and cultures.",
      "Student-centeredness: We prioritize the needs and aspirations of our students, providing personalized attention and support to help them reach their goals.",
    ],
  },
  {
    title: "History",
    texts: [
      "Although BSLPS is a newly established school, we are backed by a team of visionary educators and professionals who recognized the need for a dynamic educational institution that integrates language learning and professional skill development. Our founders, with their extensive experience in language education and industry expertise, brought together their passion and knowledge to create BSLPS.",
      "Since our inception, we have quickly gained recognition for our commitment to excellence and innovative teaching methods. With a focus on providing a holistic educational experience, we have assembled a team of highly qualified instructors and staff who share our vision of transforming lives through education.",
      "As we embark on this exciting journey, we are committed to continuously evolving and adapting to meet the changing needs of our students and the industries they aspire to be a part of. We are dedicated to providing the highest standard of education and creating an environment where students can flourish academically, professionally, and personally.",
    ],
  },
];

const About = (props) => {
  return (
    <div>
      <Box
        // bgcolor="#f8f8ff"
        py={3}
        sx={{
          display: "flex",
          alignItems: "center",
          //   height: { xs: "50vh", md: "40vh" },
          position: "relative",
          backgroundColor: "#000", // Adjust the opacity (0.5) to make it darker
          color: "#fff",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 153, 0.6)", // Adjust the opacity (0.5) to make it darker
            zIndex: 1,
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          {/* <Grid container spacing={1}>
            <Grid item display={{ xs: "none", md: "flex" }} md={3}></Grid>
            <Grid item md={9}> */}
          <Typography
            // textAlign="center"
            sx={{
              fontWeight: 600,
              fontFamily: "'Ubuntu', sans-serif",
            }}
            variant="h4"
          >
            About Us
          </Typography>
          {/* </Grid>
          </Grid> */}
        </Container>
      </Box>
      <Box>
        <Container sx={{ py: 5 }}>
          {sections.map((section, index) => {
            return (
              <Grid
                container
                spacing={3}
                py={3}
                // flexDirection={index !== 0 ? "row-reverse" : "initial"}
              >
                <Grid
                  item
                  md={6}
                  //  md={index === 0 ? 6 : 9}
                >
                  <Box>
                    <Typography variant="h5" fontWeight="bold">
                      {section.title}
                    </Typography>
                    {section.texts.map((text, index) => {
                      return (
                        <div>
                          <Typography variant="body2" fontWeight={500}>
                            {text}
                          </Typography>
                          <br />
                        </div>
                      );
                    })}
                  </Box>
                </Grid>

                <Grid
                  item
                  display={{
                    xs: index === 0 ? "flex" : "none",
                    md: "flex",
                  }}
                  md={index === 0 ? 6 : 3}
                  xs={12}
                >
                  {index === 0 ? (
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                      }}
                    >
                      <YouTubePlayer />
                    </Box>
                  ) : (
                    ""
                  )}
                </Grid>
              </Grid>
            );
          })}
        </Container>
      </Box>
    </div>
  );
};

export default About;
