var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/story', function(req, res ){
  let body = req.body;
  let newStory = getStory(body);
  res.render("story", {
    newStory: newStory
  })
})

module.exports = router;

function getStory(formData) {
  if (formData.storyChoice === "1"){
    return generateStory1(formData);
  } else if (formData.storyChoice === "2"){
    return generateStory2(formData);
  } else if (formData.storyChoice === "3"){
    return generateStory3(formData);
  } else {
    return "invalid"
  }
}

function generateStory1(formData){
  return `Our school cafeteria has really ${formData.adjective1} food. Just thinking about it makes my stomach 
  ${formData.verb1}. The spaghetti is ${formData.adjective2} and tastes like ${formData.noun1}. One day, I swear
  one of my meatballs started to ${formData.verb2}! The turkey tacos are totally ${formData.adjective3} and look
  kind of like old ${formData.noun2}. My friend Dana actually likes the meatloaf, even though it's ${formData.adjective4}
  and ${formData.adjective5}. I call it "mystery meatloaf" and think it's really made out of ${formData.adjective6}.
  My dad said he'd make my lunches, but the first day, he made me a sandwich out of ${formData.noun3} and peanut 
  butter! I think i'd rather take my chances with the cafeteria!`
}

function generateStory2(formData){
  return `Winter is so much fun because you can ${formData.verb1} and ${formData.verb2} in the ${formData.adjective1} 
  snow. It's important to dress in ${formData.noun1} and ${formData.noun2} in order to stay ${formData.adjective2} 
  outdoors. There are many ${formData.adjective3} winter sports, like ${formData.noun3} and ${formData.noun4}. It's 
  also fun to build a ${formData.noun5} and dress him in ${formData.noun6}, with a ${formData.noun7} for a ${formData.noun8}.
  It's nice to ${formData.verb3} by a warm ${formData.noun9} and enjoy a cup of ${formData.adjective4} ${formData.noun10} 
  after ${formData.verb4} in the snow all day.`
}

function generateStory3(formData){
  return `It was a ${formDtata.adjective1}, cold November day. I woke up to the ${formDtata.adjective2} smell of ${formDtata.noun1}
  roasting in the ${formDtata.noun2} downstairs. I ${formDtata.verb1} down the stairs to see if I could help ${formDtata.verb2} the 
  dinner. My mom said, "See if ${formDtata.noun3} needs a fresh ${formDtata.noun4}." So I carried a tray of glasses full of ${formDtata.noun5}
  into the ${formDtata.verb3} room. When i got there, I couldn't believe my ${formDtata.noun6}! There were ${formDtata.noun7} ${formDtata.verb4} 
  on the ${formDtata.noun8}`
}