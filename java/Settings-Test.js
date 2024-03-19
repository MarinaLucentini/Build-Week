const questions = [
  // inzio easy -------------------------------------------------------------------------------------------------------------------
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question: "How long is an IPv6 address?",
  correct_answer: "128 bits",
  incorrect_answers: ["32 bits", "64 bits", "128 bytes"],
},
{
  type: "boolean",
  difficulty: "easy",
  category: "Science: Computers",
  question: "The logo for Snapchat is a Bell.",
  correct_answer: "False",
  incorrect_answers: ["True"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question:
    "The numbering system with a radix of 16 is more commonly referred to as ",
  correct_answer: "Hexidecimal",
  incorrect_answers: ["Binary", "Duodecimal", "Octal"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question:
    "Which programming language shares its name with an island in Indonesia?",
  correct_answer: "Java",
  incorrect_answers: ["Python", "C", "Jakarta"],
},
{
  type: "boolean",
  difficulty: "easy",
  category: "Science: Computers",
  question:
    "In most programming languages, the operator ++ is equivalent to the statement &quot;+= 1&quot;.",
  correct_answer: "True",
  incorrect_answers: ["False"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question:
    "The programming language &#039;Swift&#039; was created to replace what other programming language?",
  correct_answer: "Objective-C",
  incorrect_answers: ["C#", "Ruby", "C++"],
},
{
  type: "boolean",
  difficulty: "easy",
  category: "Science: Computers",
  question:
    "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
  correct_answer: "False",
  incorrect_answers: ["True"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question: "What does CPU stand for?",
  correct_answer: "Central Processing Unit",
  incorrect_answers: [
    "Central Process Unit",
    "Computer Personal Unit",
    "Central Processor Unit",
  ],
},
{
  type: "boolean",
  difficulty: "easy",
  category: "Science: Computers",
  question: "Ada Lovelace is often considered the first computer programmer.",
  correct_answer: "True",
  incorrect_answers: ["False"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question:
    "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
  correct_answer: "1000",
  incorrect_answers: ["512", "1024", "500"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question:
    "What is the most preferred image format used for logos in the Wikimedia database?",
  correct_answer: ".svg",
  incorrect_answers: [".png", ".jpeg", ".gif"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question:
    "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
  correct_answer: "HD Graphics 500",
  incorrect_answers: [
    "HD Graphics 700 ",
    "HD Graphics 600",
    "HD Graphics 7000",
  ],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question: "In web design, what does CSS stand for?",
  correct_answer: "Cascading Style Sheet",
  incorrect_answers: [
    "Counter Strike: Source",
    "Corrective Style Sheet",
    "Computer Style Sheet",
  ],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question:
    "Which computer language would you associate Django framework with?",
  correct_answer: "Python",
  incorrect_answers: ["C#", "C++", "Java"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question: "How many kilobytes in one gigabyte (in decimal)?",
  correct_answer: "1000000",
  incorrect_answers: ["1024", "1000", "1048576"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question: "What amount of bits commonly equals one byte?",
  correct_answer: "8",
  incorrect_answers: ["1", "2", "64"],
},
{
  type: "boolean",
  difficulty: "easy",
  category: "Science: Computers",
  question: "Time on Computers is measured via the EPOX System.",
  correct_answer: "False",
  incorrect_answers: ["True"],
},
{
  type: "boolean",
  difficulty: "easy",
  category: "Science: Computers",
  question: "&quot;HTML&quot; stands for Hypertext Markup Language.",
  correct_answer: "True",
  incorrect_answers: ["False"],
},
{
  type: "boolean",
  difficulty: "easy",
  category: "Science: Computers",
  question: "The Windows 7 operating system has six main editions.",
  correct_answer: "True",
  incorrect_answers: ["False"],
},
{
  type: "boolean",
  difficulty: "easy",
  category: "Science: Computers",
  question: "The Windows ME operating system was released in the year 2000.",
  correct_answer: "True",
  incorrect_answers: ["False"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question: "What does the Prt Sc button do?",
  correct_answer:
    "Captures what&#039;s on the screen and copies it to your clipboard",
  incorrect_answers: [
    "Nothing",
    "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
    "Closes all windows",
  ],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question: "What language does Node.js use?",
  correct_answer: "JavaScript",
  incorrect_answers: ["Java", "Java Source", "Joomla Source Code"],
},
{
  type: "boolean",
  difficulty: "easy",
  category: "Science: Computers",
  question:
    "The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;",
  correct_answer: "True",
  incorrect_answers: ["False"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question:
    "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
  correct_answer: "Binary",
  incorrect_answers: ["JavaScript", "C++", "Python"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question: "What is the domain name for the country Tuvalu?",
  correct_answer: ".tv",
  incorrect_answers: [".tu", ".tt", ".tl"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question:
    "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
  correct_answer: "Green",
  incorrect_answers: ["Red", "Blue", "Yellow"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question:
    "What is the code name for the mobile operating system Android 7.0?",
  correct_answer: "Nougat",
  incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question:
    "When Gmail first launched, how much storage did it provide for your email?",
  correct_answer: "1GB",
  incorrect_answers: ["512MB", "5GB", "Unlimited"],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question: "In computing, what does LAN stand for?",
  correct_answer: "Local Area Network",
  incorrect_answers: [
    "Long Antenna Node",
    "Light Access Node",
    "Land Address Navigation",
  ],
},
{
  type: "multiple",
  difficulty: "easy",
  category: "Science: Computers",
  question: "What does the &quot;MP&quot; stand for in MP3?",
  correct_answer: "Moving Picture",
  incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"],
},
//   fine easy e inizio medium -------------------------------------------------------------------------------------------------------------------
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "All of the following programs are classified as raster graphics editors EXCEPT:",
  correct_answer: "Inkscape",
  incorrect_answers: ["Paint.NET", "GIMP", "Adobe Photoshop"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?",
  correct_answer: "print(&quot;Hello World&quot;)",
  incorrect_answers: [
    "console.log(&quot;Hello World&quot;)",
    "echo &quot;Hello World&quot;",
    "printf(&quot;Hello World&quot;)",
  ],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question: "How fast is USB 3.1 Gen 2 theoretically?",
  correct_answer: "10 Gb/s",
  incorrect_answers: ["5 Gb/s", "8 Gb/s", "1 Gb/s"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question: "What is the number of keys on a standard Windows Keyboard?",
  correct_answer: "104",
  incorrect_answers: ["64", "94", "76"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
  correct_answer: "Taiwan",
  incorrect_answers: [
    "United States",
    "Germany",
    "China (People&#039;s Republic of)",
  ],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question: "Which operating system was released first?",
  correct_answer: "Mac OS",
  incorrect_answers: ["Windows", "Linux", "OS/2"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question: "What does the acronym CDN stand for in terms of networking?",
  correct_answer: "Content Delivery Network",
  incorrect_answers: [
    "Content Distribution Network",
    "Computational Data Network",
    "Compressed Data Network",
  ],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "Which one of these is not an official development name for a Ubuntu release?",
  correct_answer: "Mystic Mansion",
  incorrect_answers: ["Trusty Tahr", "Utopic Unicorn", "Wily Werewolf"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question: "What does the term GPU stand for?",
  correct_answer: "Graphics Processing Unit",
  incorrect_answers: [
    "Gaming Processor Unit",
    "Graphite Producing Unit",
    "Graphical Proprietary Unit",
  ],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question: "The name of technology company HP stands for what?",
  correct_answer: "Hewlett-Packard",
  incorrect_answers: ["Howard Packmann", "Husker-Pollosk", "Hellman-Pohl"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question: "What does RAID stand for?",
  correct_answer: "Redundant Array of Independent Disks",
  incorrect_answers: [
    "Rapid Access for Indexed Devices",
    "Range of Applications with Identical Designs",
    "Randomized Abstract Identification Description",
  ],
},
{
  type: "boolean",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "The very first recorded computer &quot;bug&quot; was a moth found inside a Harvard Mark II computer.",
  correct_answer: "True",
  incorrect_answers: ["False"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "Nvidia&#039;s headquarters are based in which Silicon Valley city?",
  correct_answer: "Santa Clara",
  incorrect_answers: ["Palo Alto", "Cupertino", "Mountain View"],
},
{
  type: "boolean",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "To bypass US Munitions Export Laws, the creator of the PGP published all the source code in book form. ",
  correct_answer: "True",
  incorrect_answers: ["False"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question: "How many cores does the Intel i7-6950X have?",
  correct_answer: "10",
  incorrect_answers: ["12", "8", "4"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "In CSS, which of these values CANNOT be used with the &quot;position&quot; property?",
  correct_answer: "center",
  incorrect_answers: ["static", "absolute", "relative"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "Which of the following is a personal computer made by the Japanese company Fujitsu?",
  correct_answer: "FM-7",
  incorrect_answers: ["PC-9801", "Xmillennium ", "MSX"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question: "When was the programming language &quot;C#&quot; released?",
  correct_answer: "2000",
  incorrect_answers: ["1998", "1999", "2001"],
},
{
  type: "boolean",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "Linus Sebastian is the creator of the Linux kernel, which went on to be used in Linux, Android, and Chrome OS.",
  correct_answer: "False",
  incorrect_answers: ["True"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question: "What is known as &quot;the brain&quot; of the Computer?",
  correct_answer: "Central Processing Unit",
  incorrect_answers: ["Motherboard", "Graphics Processing Unit", "Keyboard"],
},
{
  type: "boolean",
  difficulty: "medium",
  category: "Science: Computers",
  question: "AMD created the first consumer 64-bit processor.",
  correct_answer: "True",
  incorrect_answers: ["False"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question: "What does the term MIME stand for, in regards to computing?",
  correct_answer: "Multipurpose Internet Mail Extensions",
  incorrect_answers: [
    "Mail Internet Mail Exchange",
    "Multipurpose Interleave Mail Exchange",
    "Mail Interleave Method Exchange",
  ],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question: ".rs is the top-level domain for what country?",
  correct_answer: "Serbia",
  incorrect_answers: ["Romania", "Russia", "Rwanda"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "Unix Time is defined as the number of seconds that have elapsed since when?",
  correct_answer: "Midnight, January 1, 1970",
  incorrect_answers: [
    "Midnight, July 4, 1976",
    "Midnight on the creator of Unix&#039;s birthday",
    "Midnight, July 4, 1980",
  ],
},
{
  type: "boolean",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "Early RAM was directly seated onto the motherboard and could not be easily removed.",
  correct_answer: "True",
  incorrect_answers: ["False"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "In programming, the ternary operator is mostly defined with what symbol(s)?",
  correct_answer: "?:",
  incorrect_answers: ["??", "if then", "?"],
},
{
  type: "boolean",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "The last Windows operating system to be based on the Windows 9x kernel was Windows 98.",
  correct_answer: "False",
  incorrect_answers: ["True"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "What is the correct term for the metal object in between the CPU and the CPU fan within a computer system?",
  correct_answer: "Heat Sink",
  incorrect_answers: ["CPU Vent", "Temperature Decipator", "Heat Vent"],
},
{
  type: "multiple",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "What does the &#039;S&#039; in the RSA encryption algorithm stand for?",
  correct_answer: "Shamir",
  incorrect_answers: ["Secure", "Schottky", "Stable"],
},
{
  type: "boolean",
  difficulty: "medium",
  category: "Science: Computers",
  question:
    "It&#039;s not possible to format a write-protected DVD-R Hard Disk.",
  correct_answer: "True",
  incorrect_answers: ["False"],
},
//   fine medium e inizio hard -------------------------------------------------------------------------------------------------------------------
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question: "How many Hz does the video standard PAL support?",
  correct_answer: "50",
  incorrect_answers: ["59", "60", "25"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "Who is the original author of the realtime physics engine called PhysX?",
  correct_answer: "NovodeX",
  incorrect_answers: ["Ageia", "Nvidia", "AMD"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "America Online (AOL) started out as which of these online service providers?",
  correct_answer: "Quantum Link",
  incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
  correct_answer: "Injection ",
  incorrect_answers: [
    "Broken Authentication",
    "Cross-Site Scripting",
    "Insecure Direct Object References",
  ],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question: "The acronym &quot;RIP&quot; stands for which of these?",
  correct_answer: "Routing Information Protocol",
  incorrect_answers: [
    "Runtime Instance Processes",
    "Regular Interval Processes",
    "Routine Inspection Protocol",
  ],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "Which of these is not a key value of Agile software development?",
  correct_answer: "Comprehensive documentation",
  incorrect_answers: [
    "Individuals and interactions",
    "Customer collaboration",
    "Responding to change",
  ],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
  correct_answer: "Cherry MX Blue",
  incorrect_answers: ["Cherry MX Black", "Cherry MX Red", "Cherry MX Brown"],
},
{
  type: "boolean",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "The IBM PC used an Intel 8008 microprocessor clocked at 4.77 MHz and 8 kilobytes of memory.",
  correct_answer: "False",
  incorrect_answers: ["True"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "The Harvard architecture for micro-controllers added which additional bus?",
  correct_answer: "Instruction",
  incorrect_answers: ["Address", "Data", "Control"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "What was the first company to use the term &quot;Golden Master&quot;?",
  correct_answer: "Apple",
  incorrect_answers: ["IBM", "Microsoft", "Google"],
},
{
  type: "boolean",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
  correct_answer: "True",
  incorrect_answers: ["False"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
  correct_answer: "ADPCM Sampler",
  incorrect_answers: [
    "FM Synthesizer",
    "Programmable Sound Generator (PSG)",
    "PCM Sampler",
  ],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question: "Who is the founder of Palantir?",
  correct_answer: "Peter Thiel",
  incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question: "What port does HTTP run on?",
  correct_answer: "80",
  incorrect_answers: ["53", "443", "23"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
  correct_answer: "Coffee Lake",
  incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question: "Which RAID array type is associated with data mirroring?",
  correct_answer: "RAID 1",
  incorrect_answers: ["RAID 0", "RAID 10", "RAID 5"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "Which of the following computer components can be built using only NAND gates?",
  correct_answer: "ALU",
  incorrect_answers: ["CPU", "RAM", "Register"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "What is the name of the process that sends one qubit of information using two bits of classical information?",
  correct_answer: "Quantum Teleportation",
  incorrect_answers: [
    "Super Dense Coding",
    "Quantum Entanglement",
    "Quantum Programming",
  ],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
  correct_answer: "Game Maker",
  incorrect_answers: ["Stencyl", "Construct", "Torque 2D"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
  correct_answer: "Heartbleed",
  incorrect_answers: ["Shellshock", "Corrupted Blood", "Shellscript"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question: "Who invented the &quot;Spanning Tree Protocol&quot;?",
  correct_answer: "Radia Perlman",
  incorrect_answers: ["Paul Vixie", "Vint Cerf", "Michael Roberts"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "Lenovo acquired IBM&#039;s personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
  correct_answer: "2005",
  incorrect_answers: ["1999", "2002", "2008"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
  correct_answer: "A&#039; + B&#039;",
  incorrect_answers: [
    "A&#039;B + B&#039;A",
    "A&#039;B&#039;",
    "AB&#039; + AB",
  ],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "What was the name of the security vulnerability found in Bash in 2014?",
  correct_answer: "Shellshock",
  incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "Which of the following is the oldest of these computers by release date?",
  correct_answer: "TRS-80",
  incorrect_answers: ["Commodore 64", "ZX Spectrum", "Apple 3"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question: "Which data structure does FILO apply to?",
  correct_answer: "Stack",
  incorrect_answers: ["Queue", "Heap", "Tree"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
  correct_answer: "Cheetah",
  incorrect_answers: ["Puma", "Tiger", "Leopard"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question:
    "Which of these is not a layer in the OSI model for data communications?",
  correct_answer: "Connection Layer",
  incorrect_answers: [
    "Application Layer",
    "Transport Layer",
    "Physical Layer",
  ],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question: "What major programming language does Unreal Engine 4 use?",
  correct_answer: "C++",
  incorrect_answers: ["Assembly", "C#", "ECMAScript"],
},
{
  type: "multiple",
  difficulty: "hard",
  category: "Science: Computers",
  question: "What internet protocol was documented in RFC 1459?",
  correct_answer: "IRC",
  incorrect_answers: ["HTTP", "HTTPS", "FTP"],
},
//   fine hard -------------------------------------------------------------------------------------------------------------------
]
//fine array --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//timer -------------------------------------------------------------------------------------------------------------------
let counter = 60;
let progress = 0;

const h4 = document.createElement("h4");
const containerText = document.getElementById("container-text");
const second = document.createElement("p");
const rimanenti = document.createElement("p");
containerText.append(second, h4, rimanenti);
h4.classList.add("progress-textH4");
second.classList.add("progress-textP");
rimanenti.classList.add("progress-textP");
second.innerText = "SECONDS";
rimanenti.innerText = "REMAINING";
const timer = setInterval(() => {
  counter--;
  h4.innerText = " ";
  h4.innerText = counter;
  //   questo serve per il countdown dei secondi
  const progressBar = document.getElementById("progress-bar");
  progress = progress + 2;
  progressBar.style.background = `conic-gradient(cyan ${progress}%, #9b9898 0%)`;

  if (counter === 0) {
    clearInterval(timer);
  }
}, 900);
// end timer -------------------------------------------------------------------------------------------------------------------
//inziamo a filtrare array easy, medium, hard e mix

questions.filter(function (filtro) {
  questions.forEach(difficulty => (){
    
  })


})

console.log(questions)







// let valoreQuantiàDomande = 






















// // funzione nella schermata settings test condiziona i bottoni per avviare lo start
// function checkStartButton() {
//     const bottoni1Buttons = document.querySelectorAll(".bottoni1 button.selected");
//     const bottoni2Buttons = document.querySelectorAll(".bottoni2 button.selected");
//     const startButton = document.querySelector(".startbutton");

//     if (bottoni1Buttons.length > 0 && bottoni2Buttons.length > 0) {
//       startButton.disabled = false;
//     } else {
//       startButton.disabled = true;
//     }
//   }

//   function selectButton(button) {
//     const buttons = button.parentNode.querySelectorAll("button");
//     buttons.forEach(btn => {
//       if (btn === button) {
//         btn.classList.add("selected");
//       } else {
//         btn.classList.remove("selected");
//       }
//     });
//   }

//   // function start() {
//   //   // Codice per avviare il test quando il pulsante "Start" è cliccato
//   //   alert("Il test è pronto, clicca ok per continuare ed avviare il test.");
//   // }
  
//   //inizio funzione che in base al settaggio dato genera un array corrispondente alla quantità selezionata e la difficolta selezionata all'interno di benchmark.html 

//   function startTest() {
//     // Ottenere la difficoltà selezionata
//     const selectedDifficulty = document.querySelector(".bottoni2 button.selected").textContent.trim().toLowerCase();
  
//     // Ottenere il numero di domande desiderate
//     const numQuestions = parseInt(document.querySelector(".bottoni1 button.selected").textContent.trim());
  
//     // Filtrare le domande in base alla difficoltà selezionata
//     const filteredQuestions = questions.filter(question => question.difficulty === selectedDifficulty);
  
//     // Selezionare un numero casuale di domande dal set filtrato
//     const selectedQuestions = [];
//     for (let i = 0; i < numQuestions; i++) {
//       const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
//       selectedQuestions.push(filteredQuestions[randomIndex]);
//       // Rimuovere la domanda selezionata per evitare duplicati
//       filteredQuestions.splice(randomIndex, 1);
//     }
  
//     // Codificare l'array di domande in formato JSON
//     const encodedQuestions = encodeURIComponent(JSON.stringify(selectedQuestions));
  
//     // Costruire l'URL per la pagina benchmark.html con il parametro delle domande
//     const benchmarkURL = `benchmark.html?questions=${encodedQuestions}`;
  
//     // Reindirizzare alla pagina benchmark.html con le domande selezionate
//     window.location.href = benchmarkURL;
//   }
  
