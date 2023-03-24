const express = require("express");
const cors = require("cors");
const compression = require("compression");

const navBarRouter = require("./routes/navbar");
const newsRouter = require("./routes/news");
const latestEvents = require("./routes/latestEvent");
const administrationRouter = require("./routes/administration");
const resourceRouter = require("./routes/resource");
const noticeRouter = require("./routes/notice");
const rankingRouter = require("./routes/ranking");
const placementStatRouter = require("./routes/placementStat");
const instituteProspectusLinkRouter = require("./routes/instituteProspectusLink");
const yearlyRankingRouter = require("./routes/yearlyRanking");
const timelineRouter = require("./routes/timeline");
const publicationRouter = require("./routes/publication");
const academicCalendarRouter = require("./routes/academicCalendar");
const tenderRouter = require("./routes/tender");
const reasearchHighlights = require("./routes/researchHighlights");
const photoGalleryRouter = require("./routes/photoGallery");
const footerRouter = require("./routes/footer");
const aboutRouter = require("./routes/about");
const testimonialRouter = require("./routes/testimonial");
const specialCentresRouter = require("./routes/specialCentres");
const studentTeamRouter = require("./routes/studentTeam");
const academicnoticesRouter = require("./routes/academicnotices");
const studyProgramRouter = require("./routes/studyprog");
const clubRouter = require("./routes/club");
const upcomingEventRouter = require("./routes/upcomingEvent");
const departmentRouter = require("./routes/departement");
const searchRouter = require("./routes/search");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const hostelRouter = require("./routes/hostel");
const proctorialCellRouter = require("./routes/proctorialCell");



//initialize app
const app = express();

app.use(express.json({limit:'5mb'}));
bodyParser.urlencoded({ extended: true });
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json({limit:'5mb'}));
app.use(compression());
app.use(cookieParser());
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
}
app.use(cors(corsOptions));


app.use((req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  //     if (req.method === "OPTIONS") {
  //         res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  //         return res.status(200).json({});
  //     }
  //     if (req.headers.authorization !== process.env.AUTH_TOKEN) {
  //         return res.status(401).json({ message: "Unauthorized" });
  //     }

  next();
});

      
//routes

// app.use("/login",login);



// app.route('/*').post(verifyUser).put(verifyUser).delete(verifyUser);
app.use("/navbar", navBarRouter);
app.use("/news", newsRouter);
app.use("/latestEvent", latestEvents);
app.use("/administration", administrationRouter);
app.use("/notice", noticeRouter);
app.use("/ranking", rankingRouter);
app.use("/placementStat", placementStatRouter);
app.use("/instituteProspectusLink", instituteProspectusLinkRouter);
app.use("/yearlyRanking", yearlyRankingRouter);
app.use("/timeline", timelineRouter);
app.use("/publication", publicationRouter);
app.use("/academicnotices", academicnoticesRouter);
app.use("/specialCentres", specialCentresRouter);
app.use("/tender", tenderRouter);
app.use("/studyprogramme", studyProgramRouter);
app.use("/researchHighlights", reasearchHighlights);
app.use("/photoGallery", photoGalleryRouter);
app.use("/footer", footerRouter);
app.use("/about", aboutRouter);
app.use("/testimonial", testimonialRouter);
app.use("/studentTeam", studentTeamRouter);
app.use("/club", clubRouter);
app.use("/upcomingEvent", upcomingEventRouter);
app.use("/academicCalendar", academicCalendarRouter);
app.use("/search", searchRouter);
app.use("/dept", departmentRouter);

app.use("/resource", resourceRouter);

app.use("/hostel", hostelRouter);
app.use("/proctorialCell", proctorialCellRouter);

//Export----------------------------->
module.exports = app;

//test code here

/**   "COMPANIES VISITED":"150+",
        "HIGHEST PACKAGE":"1.2 CR",
        "STARTUPS":"15+",
        "NIRF ENGINEERING 2022":"52" */
