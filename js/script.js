//Testimonial Data
const testimonials = [
  {
    name: "Neeru Pulami",
    job: "Client",
    image: "../images/client5.png",
    testimonial:
      "Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended.",
  },
  {
    name: "Salena Sawyer",
    job: "Client",
    image: "../images/client1.png",
    testimonial:
      "I am a real momo addict, and even when I’m home I prefer your momos to all others. They taste awesome and are very affordable.",
  },
  {
    name: "Rachel Houston",
    job: "Client",
    image: "../images/client2.png",
    testimonial:
      "Mitho has amazing food. Not only do you get served with a great attitude, you also get delicious food at a great price!",
  },
  {
    name: "Bob Marley",
    job: "Client",
    image: "../images/client3.png",
    testimonial:
      "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.",
  },
  {
    name: "Abinash Thapa Magar",
    job: "Client",
    image: "../images/client4.png",
    testimonial:
      "It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.",
  },
  {
    name: "Katy David",
    job: "Client",
    image: "../images/client.png",
    testimonial:
      "Mitho is the busiest restaurant in the city and is well run and staffed. Prices are great and allow me to keep coming back.",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

//Display testimonial data dynamically with json data
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

// next and prev button click event
nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
	  <p>${testimonials[i].testimonial}</p>
	  <img src=${testimonials[i].image}>
	  <h3>${testimonials[i].name}</h3>
	  <h6>${testimonials[i].job}</h6>
	`;
};
window.onload = displayTestimonial;



	   