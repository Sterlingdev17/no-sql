const router = require("express").Router();
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================


  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  // If no matching route is found default to home
  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

module.exports = router;