const router = require("express").Router();
const Workout = require("../models/index.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body,params }, res) => {
    Workout.findByIdAndUpdate(
        params.id, 
        {$push: {exercises: body}}, 
        {new: true})
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });





module.exports = router;