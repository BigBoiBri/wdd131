// convert-email.js

const fs = require('fs');
const readline = require('readline');

// ==============================
// CONFIGURE YOUR RAW EMAIL HERE
// ==============================

const rawEmail = `
What's up. Sorry I didn't email last couple weeks, I got busy lol. But, these last weeks were awesome. I don't have too much time so I'll try and make it quick👍

EXCHANGES🚶‍♂️‍➡️🚶‍➡️:
Went on an exchange w Elder Gatchell, he's cool. He's from Texas so he thinks that everything in Texas is better lol (in-n-out is better than whataburger) But we had fun tho, we ran into cheese the cat again. Haven't seen her since I was serving in the river stake🐈

MASON 🛴:
Cool miracle happened this week! We were stopping by a bishops house to update them on a friend that we were teaching in their ward, as we left some kid (14-16 yrs old) pulls up to us on his scooter. He looks a little nervous but he asks us if we knew where he could get some scriptures (we definitely do) So we head over to our car to get him some and we find out that he's not a member! We asked him why the sudden interest in scriptures, cause kids his age usually don't care to much about religion, and he told us that he was praying and that he really felt like he needed to start reading the scriptures! We were able to give him a Book of Mormon and we told him about how that book will change his life. As we testified the spirit was so strong, he had an excited smile on his face as we did so so I know that he was feeling the spirit too. He let us know where he lived so we could stop by again, only problem is that he isn't have a number we could contact so we haven't been able to meet with him again...we will just keep knocking his door tho. But yeah super cool kid, awesome experience🤘

ELDER PEARSON 📖🧠🤯: 
So Elder Pearseon, the Utah Area President (missionary work stuff), came and spoke with us during zone council. It was so hype. He's super serious but also funny at the same time, very straight to the point. But he talked with us about discipleship and bow we can become more aligned with the savior. It was so good, I left feeling that I need to become a better person, so I'm gonna do that👍

ELDER MORGAN BROKE HIS FOOT🏨🤕:
So my companion broke his foot...playing basketball lol. We went and got Xrays and hes got a crack on the very outside bone of his foot. Now he's gotta boot on and hops around everywhere, we are going to the doctors today to get his foot looked at👨‍⚕️

TJs BAPTISM 🌊🌊🌊:
TJ GOT BAPTIZED!!!! Tj and his family are literally some of my favorite people ever! His baptism was awesome, the spirit was so strong. Last week we got to go to the temple with him!!! Him and his wife absolutely loved it, they are so happy because of the gospel. I love them :)

MORE MISSIONARY STUFF 📖🔍👌:
We have found a lot of new people to teach this week! We put two of them on date for sometime in September...I also just realized that I hit a year soon...uh oh...ANYWAYS, the people is Spanish Fork are so awesome! 

TRANSFERS 🚗🗺🧳:
We got Transfer news yesterday...IM GOING TO PRICE!!!!! If anyone remembers price is near my first area, so ill be over the zone that covers Helper!!! Sadly that means I'm leaving Spanish Fork :( I don't want to just yet but I'll go wherever the Lord needs me I guess lol.



Well that's about it. Sorry I tucked at emailing the last couple weeks, I'll be better (hopefully). 

Moroni 7:33
"And Christ hath said: If ye will have faith in me ye shall have power to do whatsoever thing is expedient in me"

OK LOVE AND MISS YOU ALL!!!

Bye >:)


`;

// ==============================
// SCRIPT LOGIC
// ==============================

// Replace actual line breaks with \n
let convertedEmail = rawEmail.replace(/\r?\n/g, '\\n');

// Replace all " with '
convertedEmail = convertedEmail.replace(/"/g, "'");

// Setup readline interface for image URLs prompt
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt for images
rl.question('Enter image URLs separated by commas: ', (answer) => {
  const images = answer.split(',').map(url => url.trim());
  
  // Format images array as JSON
  const imagesArray = JSON.stringify(images, null, 2);

  // Combine into final JSON snippet
  const finalOutput = `${convertedEmail}`;

  // Write to output file
  fs.writeFileSync('./output/converted-email.txt', finalOutput);
  console.log('✅ Email conversion complete with images. Check output/converted-email.txt');
  
  rl.close();
});
