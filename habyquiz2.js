const quizContainer = document.getElementById('quiz-container');
const questionCounterEl = document.getElementById('question-counter');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-button');
const restartButton = document.getElementById('restart-button');
const feedbackElement = document.getElementById('feedback');

const quizData = [
  {
    question: "All of the following usually significantly restrict the viewing of a tornado except:\na. Tall trees\nb. Good preexisting visibility\nc. Night\nd. Heavy rain",
    options: [
      "Tall trees",
      "Good preexisting visibility",
      "Night",
      "Heavy rain"
    ],
    correctAnswer: "Good preexisting visibility" // Key: B
  },
  {
    question: "What is elevated convection?\na. It is any CAPE that is released in the troposphere\nb. It is a thunderstorm that develops at the jet stream level\nc. It is convection that has an enhanced chance of being severe\nd. It is convection not resulting from PBL based convection",
    options: [
      "It is any CAPE that is released in the troposphere",
      "It is a thunderstorm that develops at the jet stream level",
      "It is convection that has an enhanced chance of being severe",
      "It is convection not resulting from PBL based convection"
    ],
    correctAnswer: "It is convection not resulting from PBL based convection" // Key: D
  },
  {
    question: "A rapid decrease in dewpoint with height is termed a(n):\na. Hydrolapse\nb. Inversion\nc. Moist layer\nd. Isothermal layer",
    options: [
      "Hydrolapse",
      "Inversion",
      "Moist layer",
      "Isothermal layer"
    ],
    correctAnswer: "Hydrolapse" // Key: A
  },
  {
    question: "Which LI value is the most stable?\na. 4\nb. 0\nc. -4\nd. -8",
    options: [
      "4",
      "0",
      "-4",
      "-8"
    ],
    correctAnswer: "4" // Key: A
  },
  {
    question: "What is a trigger mechanism?\na. It is a process that prevents precipitation or storms from occurring\nb. It is a sounding that has a region of positive CAPE\nc. It is any process that initiates precipitation or storm development\nd. It is in reference to Omega forcing from either low level divergence or upper level convergence",
    options: [
      "It is a process that prevents precipitation or storms from occurring",
      "It is a sounding that has a region of positive CAPE",
      "It is any process that initiates precipitation or storm development",
      "It is in reference to Omega forcing from either low level divergence or upper level convergence"
    ],
    correctAnswer: "It is any process that initiates precipitation or storm development" // Key: C
  },
  {
    question: "The type of vorticity displayed on the 500-mb pressure surface is ____(1)_____. The type of vorticity produced from changes in wind speed and direction with height is _____(2)_____:\na. (1) horizontal vorticity, (2) vertical vorticity\nb. (1) vertical vorticity, (2) horizontal vorticity",
    options: [
      "(1) horizontal vorticity, (2) vertical vorticity",
      "(1) vertical vorticity, (2) horizontal vorticity"
    ],
    correctAnswer: "(1) vertical vorticity, (2) horizontal vorticity" // Key: B
  },
  {
    question: "All of the following will exacerbate the flash flood potential except:\na. Snow melt\nb. Dense vegetation\nc. Saturated soil\nd. Training of thunderstorms",
    options: [
      "Snow melt",
      "Dense vegetation",
      "Saturated soil",
      "Training of thunderstorms"
    ],
    correctAnswer: "Dense vegetation" // Key: B
  },
  {
    question: "This tilt of an upper level trough on a pressure surface is associated with an enhanced chance of severe weather when cold dry air swings over the top of warm and moist air:\na. Positive tilted trough\nb. Neutrally tilted trough\nc. Negatively titled trough",
    options: [
      "Positive tilted trough",
      "Neutrally tilted trough",
      "Negatively titled trough"
    ],
    correctAnswer: "Negatively titled trough" // Key: C
  },
  {
    question: "When the air is unsaturated at a constant pressure, which value will always be greater:\na. Temperature\nb. Dewpoint\nc. Wet-bulb\nd. Frost point",
    options: [
      "Temperature",
      "Dewpoint",
      "Wet-bulb",
      "Frost point"
    ],
    correctAnswer: "Temperature" // Key: A
  },
  {
    question: "(Statement 1) A forecast model will generally be more accurate if it gets more accurate initial data. (Statement 2) A forecast model will generally be more accurate if it gets a higher density of initial data:\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 is false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 is false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 and Statement 2 are both true" // Key: B
  },
  {
    question: "The mesolow from a thunderstorm develops due to:\na. Dense sinking air in the downdraft region\nb. Buoyant rising air in the updraft region",
    options: [
      "Dense sinking air in the downdraft region",
      "Buoyant rising air in the updraft region"
    ],
    correctAnswer: "Buoyant rising air in the updraft region" // Key: B
  },
  {
    question: "The pressure decreases more rapidly with height in a _____(1)______ air mass. A ____(2)_____ air mass will have high 1000 to 500 mb thickness values:\na. (1) warm, (2) cold\nb. (1) warm, (2) warm\nc. (1) cold, (2) warm\nd. (1) cold, (2) cold",
    options: [
      "(1) warm, (2) cold",
      "(1) warm, (2) warm",
      "(1) cold, (2) warm",
      "(1) cold, (2) cold"
    ],
    correctAnswer: "(1) cold, (2) warm" // Key: C
  },
  {
    question: "(Statement 1) A breeze from a large lake will always make the temperature cooler downwind than it otherwise would be. (Statement 2) The top of a mountain will always be cooler than the base of the mountain:\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 is false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 and Statement 2 are both false" // Key: A
  },
  {
    question: "Gravity waves propagate through ____(1)______ atmospheric layers. In a gravity wave, the ____(2)____ moving region is the most favorable region for cloud development:\na. (1) unstable, (2) downward\nb. (1) unstable, (2) upward\nc. (1) stable, (2) downward\nd. (1) stable, (2) upward",
    options: [
      "(1) unstable, (2) downward",
      "(1) unstable, (2) upward",
      "(1) stable, (2) downward",
      "(1) stable, (2) upward"
    ],
    correctAnswer: "(1) stable, (2) upward" // Key: D
  },
  {
    question: "DPVA contributes to ______(1)________. PDVA ______(2)________ the troposphere and thus lowers heights aloft:\na. (1) rising air, (2) cools\nb. (1) rising air, (2) warms\nc. (1) sinking air, (2) cools\nd. (1) sinking air, (2) warms",
    options: [
      "(1) rising air, (2) cools",
      "(1) rising air, (2) warms",
      "(1) sinking air, (2) cools",
      "(1) sinking air, (2) warms"
    ],
    correctAnswer: "(1) rising air, (2) cools" // Key: A
  },
  {
    question: "To become a better forecaster it is important to:\na. Study how and why a forecast went good or bad\nb. Learn from others that know more meteorology than you\nc. Read meteorology textbooks and journals\nd. All of the above",
    options: [
      "Study how and why a forecast went good or bad",
      "Learn from others that know more meteorology than you",
      "Read meteorology textbooks and journals",
      "All of the above"
    ],
    correctAnswer: "All of the above" // Key: D
  },
  {
    question: "(Statement 1) A broadcast meteorologist should be most comical during severe weather and most serious during mundane weather. (Statement 2) Community involvement and school visits are an important part of a broadcast meteorologist's job:\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 are false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 is false and Statement 2 are true" // Key: D
  },
  {
    question: "Correct forecasts can save:\na. Lives\nb. Money\nc. Property\nd. All of the above",
    options: [
      "Lives",
      "Money",
      "Property",
      "All of the above"
    ],
    correctAnswer: "All of the above" // Key: D
  },
  {
    question: "To be a good forecaster for clients or viewers, the meteorologist needs to be able to:\na. Copy the NWS forecasts\nb. Demonstrate a strong handle on oral and written communication\nc. Derive dynamical and thermodynamical equations often\nd. Have an enhanced psychic ability",
    options: [
      "Copy the NWS forecasts",
      "Demonstrate a strong handle on oral and written communication",
      "Derive dynamical and thermodynamical equations often",
      "Have an enhanced psychic ability"
    ],
    correctAnswer: "Demonstrate a strong handle on oral and written communication" // Key: B
  },
  {
    question: "(Statement 1) The accuracy of a forecast depends upon the range of acceptable values in the verification process. (Statement 2) It is a good idea to make a forecast that is very general because it has a better chance of verifying:\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 are false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 is true and Statement 2 are false" // Key: C
  },
  {
    question: "(Statement 1) The reaction the public will have to a particular snow event is regionally dependent. (Statement 2) Even small accumulations of freezing rain or sleet make a winter weather event significant if it accumulates on the roads:\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 are false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 and Statement 2 are both true" // Key: B
  },
  {
    question: "These are terms that make a forecast more entertaining and personable:\na. Scientific jargon\nb. Catchy phrases\nc. Calculus notation\nd. Foul language",
    options: [
      "Scientific jargon",
      "Catchy phrases",
      "Calculus notation",
      "Foul language"
    ],
    correctAnswer: "Catchy phrases" // Key: B
  },
  {
    question: "25 C is equal to _________ F:\na. 50\nb. 68\nc. 77\nd. 86",
    options: [
      "50",
      "68",
      "77",
      "86"
    ],
    correctAnswer: "77" // Key: C
  },
  {
    question: "A mile per hour is equal to ________ nautical miles per hour:\na. 2\nb. 1.5\nc. 1.15\nd. 0.87",
    options: [
      "2",
      "1.5",
      "1.15",
      "0.87"
    ],
    correctAnswer: "0.87" // Key: D
  },
  {
    question: "Why do meteorologists use Z-time?\na. Since it does not have AM or PM\nb. To use the local time at the International Dateline\nc. In order for meteorology observations to occur at the same time relative to a common reference location\nd. In order for the general public to not understand when weather data is taken",
    options: [
      "Since it does not have AM or PM",
      "To use the local time at the International Dateline",
      "In order for meteorology observations to occur at the same time relative to a common reference location",
      "In order for the general public to not understand when weather data is taken"
    ],
    correctAnswer: "In order for meteorology observations to occur at the same time relative to a common reference location" // Key: C
  },
  {
    question: "These connects points of equal barometric pressure normalized to sea level:\na. Isobars\nb. Isohypses\nc. Isohyets\nd. Isotachs",
    options: [
      "Isobars",
      "Isohypses",
      "Isohyets",
      "Isotachs"
    ],
    correctAnswer: "Isobars" // Key: A
  },
  {
    question: "When strong low level warm air advection occurs, the 700 mb, 500 mb and 300 mb height contour values will likely _____(1)______. The 500 mb level is closest to ____(2)_____ kilometers:\na. (1) increase, (2) 5.5\nb. (1) increase, (2) 3.0\nc. (1) decrease, (2) 5.5\nd. (1) decrease, (2) 3.0",
    options: [
      "(1) increase, (2) 5.5",
      "(1) increase, (2) 3.0",
      "(1) decrease, (2) 5.5",
      "(1) decrease, (2) 3.0"
    ],
    correctAnswer: "(1) increase, (2) 5.5" // Key: A
  },
  {
    question: "Contours of surface pressure change are termed:\na. Height change contours\nb. Isobars\nc. Isohypses\nd. Isallobars",
    options: [
      "Height change contours",
      "Isobars",
      "Isohypses",
      "Isallobars"
    ],
    correctAnswer: "Isallobars" // Key: D
  },
  {
    question: "(Statement 1) The temperature minus the dewpoint is the dewpoint depression. (Statement 2) Upper air temperatures are usually given in degrees Celsius:\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 are false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 and Statement 2 are both true" // Key: B
  },
  {
    question: "Snowflakes generally take longer to reach the surface than raindrops during descent because:\na. Snowflakes are more dense\nb. Snowflakes are smaller\nc. Snowflakes are easily wafted by the wind\nd. Snowflakes are heavier",
    options: [
      "Snowflakes are more dense",
      "Snowflakes are smaller",
      "Snowflakes are easily wafted by the wind",
      "Snowflakes are heavier"
    ],
    correctAnswer: "Snowflakes are easily wafted by the wind" // Key: C
  },
  {
    question: "The estimation of a meteorological value such as temperature between two known data points is termed:\na. Extrapolation\nb. Boundary error\nc. Omega\nd. Interpolation",
    options: [
      "Extrapolation",
      "Boundary error",
      "Omega",
      "Interpolation"
    ],
    correctAnswer: "Interpolation" // Key: D
  },
  {
    question: "Which of the following is false:\na. Surface pressure tends to lower as a front approaches\nb. A front is located on the warm side of the temperature gradient\nc. A front is a zone of wind divergence\nd. Dewpoint tends to decrease behind a cold front boundary",
    options: [
      "Surface pressure tends to lower as a front approaches",
      "A front is located on the warm side of the temperature gradient",
      "A front is a zone of wind divergence",
      "Dewpoint tends to decrease behind a cold front boundary"
    ],
    correctAnswer: "A front is a zone of wind divergence" // Key: C
  },
  {
    question: "(Statement 1) If the temperature is 90°F and the dewpoint is 70°F, then the relative humidity is (70/90)*100% ≈ 78%. (Statement 2) The relative humidity is a good indicator of how much moisture there is in the air regardless of air temperature:\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 are false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 and Statement 2 are both false" // Key: A
  },
  {
    question: "Becoming a professional in your field is a function of:\na. Your education and what you learn\nb. Your choices and how you deal with your choices\nc. Your on the job experiences\nd. All of the above",
    options: [
      "Your education and what you learn",
      "Your choices and how you deal with your choices",
      "Your on the job experiences",
      "All of the above"
    ],
    correctAnswer: "All of the above" // Key: D
  },
  {
    question: "(Statement 1) In nature, areas of deficit tend to move toward areas of excess. (Statement 2) Air moves from high pressure toward low pressure:\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 are false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 is false and Statement 2 are true" // Key: D
  },
  {
    question: "This air mass has abundant moisture and warm air:\na. Maritime Polar\nb. Maritime Tropical\nc. Continental Tropical\nd. Continental Polar",
    options: [
      "Maritime Polar",
      "Maritime Tropical",
      "Continental Tropical",
      "Continental Polar"
    ],
    correctAnswer: "Maritime Tropical" // Key: B
  },
  {
    question: "Which of the following is true of maritime polar air?\na. It has a high dewpoint\nb. It has very warm temperatures\nc. It has a high relative humidity\nd. It forms over equatorial oceans",
    options: [
      "It has a high dewpoint",
      "It has very warm temperatures",
      "It has a high relative humidity",
      "It forms over equatorial oceans"
    ],
    correctAnswer: "It has a high relative humidity" // Key: C
  },
  {
    question: "Deductive reasoning is:\na. Guessing at the reasons why something happens\nb. Coming to a logical conclusion based on a set of facts\nc. The same as extrapolation\nd. Anything that is a stated fact",
    options: [
      "Guessing at the reasons why something happens",
      "Coming to a logical conclusion based on a set of facts",
      "The same as extrapolation",
      "Anything that is a stated fact"
    ],
    correctAnswer: "Coming to a logical conclusion based on a set of facts" // Key: B
  },
  {
    question: "Which of the following is true of a continental polar air mass?\na. It has a high degree of stability\nb. The relative humidity is generally high\nc. The source region is over cold ocean water\nd. Precipitation tends to be heavy within the air mass",
    options: [
      "It has a high degree of stability",
      "The relative humidity is generally high",
      "The source region is over cold ocean water",
      "Precipitation tends to be heavy within the air mass"
    ],
    correctAnswer: "It has a high degree of stability" // Key: A
  },
  {
    question: "A dryline separates these two air masses:\na. Continental polar from maritime tropical\nb. Maritime polar from maritime tropical\nc. Maritime tropical and continental tropical\nd. Continental polar from continental tropical",
    options: [
      "Continental polar from maritime tropical",
      "Maritime polar from maritime tropical",
      "Maritime tropical and continental tropical",
      "Continental polar from continental tropical"
    ],
    correctAnswer: "Maritime tropical and continental tropical" // Key: C
  },
  {
    question: "An example of a source region of continental arctic (cA) air is:\na. Mexican plateau\nb. Gulf of Alaska\nc. Northern Great Plains of U.S.\nd. Siberia",
    options: [
      "Mexican plateau",
      "Gulf of Alaska",
      "Northern Great Plains of U.S.",
      "Siberia"
    ],
    correctAnswer: "Siberia" // Key: D
  },
  {
    question: "The region of the U.S. dominated by highland climates is the:\na. Southeast region\nb. Great Lakes region\nc. Western region\nd. Great Plains region",
    options: [
      "Southeast region",
      "Great Lakes region",
      "Western region",
      "Great Plains region"
    ],
    correctAnswer: "Western region" // Key: C
  },
  {
    question: "The Low pressure 'L' on a surface map stands for:\na. Happy weather\nb. Cold weather\nc. Warm weather\nd. Lousy weather",
    options: [
      "Happy weather",
      "Cold weather",
      "Warm weather",
      "Lousy weather"
    ],
    correctAnswer: "Lousy weather" // Key: D
  },
  {
    question: "When one front lifts another front it is termed a(n) _____________ front on a surface chart:\na. Occluded\nb. Stationary\nc. Kata\nd. Barotropic",
    options: [
      "Occluded",
      "Stationary",
      "Kata",
      "Barotropic"
    ],
    correctAnswer: "Occluded" // Key: A
  },
  {
    question: "(Statement 1) It is a good idea to always base your forecast on the ETA MOS. (Statement 2) MOS stands for Model Operating System:\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 are false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 and Statement 2 are both false" // Key: A
  },
  {
    question: "Warm air advection in the low levels of the troposphere causes rising air. This is because warm air ____(1)_____, creating a higher thickness, which in turn causes the air to rise. Any low level density boundary will lead to rising motion if ______(2)______ occurs along that low-level boundary:\na. (1) expands, (2) divergence\nb. (1) expands, (2) convergence\nc. (1) contracts, (2) divergence\nd. (1) contracts, (2) convergence",
    options: [
      "(1) expands, (2) divergence",
      "(1) expands, (2) convergence",
      "(1) contracts, (2) divergence",
      "(1) contracts, (2) convergence"
    ],
    correctAnswer: "(1) expands, (2) convergence" // Key: B
  },
  {
    question: "(Statement 1) Snow will always occur when the 1000 to 500 millibar thickness is 5,400 meters or lower. (Statement 2) If evaporational cooling occurs through a deep layer of the troposphere the thickness of that layer will tend to increase:\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 are false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 and Statement 2 are both false" // Key: A
  },
  {
    question: "The 0°C isotherm can move across the surface or a pressure surface through:\na. Thermal advection\nb. Evaporational cooling\nc. Radiational cooling\nd. All of the above",
    options: [
      "Thermal advection",
      "Evaporational cooling",
      "Radiational cooling",
      "All of the above"
    ],
    correctAnswer: "All of the above" // Key: D
  },
  {
    question: "An environment in which parcels of lifted air can rise on their own due to positive buoyancy through a region of CAPE is termed an environment with:\na. A temperature increase with height\nb. Instability\nc. Severe weather potential\nd. Strong shear",
    options: [
      "A temperature increase with height",
      "Instability",
      "Severe weather potential",
      "Strong shear"
    ],
    correctAnswer: "Instability" // Key: B
  },
  {
    question: "(Statement 1) A region of enhanced wind flow within the jet stream is termed a jet streak. (Statement 2) The jet stream has waves within it of troughs and ridges:\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 are false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 and Statement 2 are both true" // Key: B
  }
];

// Global quiz state variables
let currentQuestion = 0;
let score = 0;           // Overall score (includes second chance successes)
let scoreFirstGuess = 0; // Score counting only first-try correct answers
let hasSecondChance = false;
let shuffledQuizData = [];
const totalQuestions = quizData.length;

// Fisher-Yates shuffle to randomize an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Update the question counter display (e.g., "Question 3 of 100")
function updateCounter() {
  questionCounterEl.textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
}

// Load and display the current question from the (randomized) quiz array
function loadQuiz() {
  // When finished, show the final results
  if (currentQuestion >= totalQuestions) {
    const overallPercentage = (score / totalQuestions) * 100;
    const firstGuessPercentage = (scoreFirstGuess / totalQuestions) * 100;
    const passStatusOverall = overallPercentage >= 80 ? "passed" : "failed";
    const passStatusFirstGuess = firstGuessPercentage >= 80 ? "passed" : "failed";
    
    quizContainer.innerHTML = `
      <h2>Quiz Finished!</h2>
      <p>Your overall score (with second chances) is ${score} / ${totalQuestions} (${overallPercentage.toFixed(0)}%). You ${passStatusOverall}!</p>
      <p>Your first guess score is ${scoreFirstGuess} / ${totalQuestions} (${firstGuessPercentage.toFixed(0)}%). You ${passStatusFirstGuess} when only first attempts count.</p>
      <button id="restart-button-final">Restart Quiz</button>
    `;
    // Attach listener to the final restart button.
    document.getElementById('restart-button-final').addEventListener('click', restartQuiz);
    localStorage.removeItem('quizState');
    return;
  }

  updateCounter();

  const currentQuizItem = shuffledQuizData[currentQuestion];
  questionElement.innerText = currentQuizItem.question;

  // Clear previous options and feedback
  optionsElement.innerHTML = '';
  feedbackElement.innerText = '';

  // Create each option as a label with a radio input
  currentQuizItem.options.forEach(option => {
    const label = document.createElement('label');
    label.style.cursor = 'pointer';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
    input.value = option;
    input.style.marginRight = '10px';

    label.prepend(input);
    label.appendChild(document.createTextNode(option));
    optionsElement.appendChild(label);
  });

  saveProgress();
}

// Check the user's answer when the submit button is clicked
function checkAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    return; // No option selected
  }
  
  const userAnswer = selectedOption.value;
  const correctAnswer = shuffledQuizData[currentQuestion].correctAnswer;

  if (userAnswer === correctAnswer) {
    feedbackElement.innerText = "Correct!";
    feedbackElement.classList.add("correct");
    feedbackElement.classList.remove("incorrect");
    
    score++; // Increase overall score
    // If the answer is correct on the first try, increase first-guess score
    if (!hasSecondChance) {
      scoreFirstGuess++;
    }
    hasSecondChance = false;
    
    // Pause to let user read the feedback before moving on
    setTimeout(() => {
      currentQuestion++;
      saveProgress();
      loadQuiz();
    }, 1500);
  } else {
    if (!hasSecondChance) {
      feedbackElement.innerText = "Incorrect. Try again.";
      feedbackElement.classList.add("incorrect");
      feedbackElement.classList.remove("correct");
      hasSecondChance = true;
    } else {
      feedbackElement.innerText = `Incorrect. The correct answer is ${correctAnswer}.`;
      feedbackElement.classList.add("incorrect");
      feedbackElement.classList.remove("correct");
      hasSecondChance = false;
      
      setTimeout(() => {
        currentQuestion++;
        saveProgress();
        loadQuiz();
      }, 1500);
    }
  }
}

// Save the current state (including randomized order and both scores) to localStorage
function saveProgress() {
  const quizState = {
    currentQuestion,
    score,
    scoreFirstGuess,
    hasSecondChance,
    shuffledQuizData
  };
  localStorage.setItem('quizState', JSON.stringify(quizState));
}

// Load saved quiz state from localStorage (if any)
function loadProgress() {
  const savedState = localStorage.getItem('quizState');
  if (savedState) {
    const quizState = JSON.parse(savedState);
    currentQuestion = quizState.currentQuestion;
    score = quizState.score;
    scoreFirstGuess = quizState.scoreFirstGuess;
    hasSecondChance = quizState.hasSecondChance;
    shuffledQuizData = quizState.shuffledQuizData;
  }
}

// Check for saved progress on page load and ask the user if they want to resume
function checkSavedProgress() {
  if (localStorage.getItem('quizState')) {
    const resume = confirm("You have an unfinished quiz. Would you like to resume?");
    if (resume) {
      loadProgress();
    } else {
      localStorage.removeItem('quizState');
      currentQuestion = 0;
      score = 0;
      scoreFirstGuess = 0;
      hasSecondChance = false;
      shuffledQuizData = shuffleArray(quizData.slice());
    }
  } else {
    shuffledQuizData = shuffleArray(quizData.slice());
  }
}

// Restart the quiz from the beginning
function restartQuiz() {
  localStorage.removeItem('quizState');
  currentQuestion = 0;
  score = 0;
  scoreFirstGuess = 0;
  hasSecondChance = false;
  shuffledQuizData = shuffleArray(quizData.slice());
  loadQuiz();
}

// Event listeners for the submit and restart buttons
submitButton.addEventListener('click', checkAnswer);

restartButton.addEventListener('click', () => {
  if (confirm("Are you sure you want to start over? Your current progress will be lost.")) {
    restartQuiz();
  }
});

// On page load, check for saved progress and load the quiz
checkSavedProgress();
loadQuiz();