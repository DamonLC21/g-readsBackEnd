
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {
          BookTitle: "Python In A Nutshell",
          BookGenre: "Python",
          BookDescription: "This book offers Python programmers one place to look when they need help remembering or deciphering the syntax of this open source language and its many powerful but scantily documented modules. This comprehensive reference guide makes it easy to look up the most frequently needed information--not just about the Python language itself, but also the most frequently used parts of the standard library and the most important third-party extensions.",
          BookCoverURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/python_in_a_nutshell.jpg",
          Author1FirstName: "Alex",
          Author1LastName: "Martelli",
          Author1Biography: "Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software Consultant at think3 inc, developing libraries, network protocols, GUI engines, event frameworks, and web access frontends. He has also taught programming languages, development methods, and numerical computing at Ferrara University and other venues. He's a C++ MVP for Brainbench, and a member of the Python Software Foundation. He currently works for AB Strakt, a Python-centered software house in G�teborg, Sweden, mostly by telecommuting from his home in Bologna, Italy. Alex's proudest achievement is the articles that appeared in Bridge World (January/February 2000), which were hailed as giant steps towards solving issues that had haunted contract bridge theoreticians for decades.",
          Author1PortraitURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg",
          Author2FirstName: "Anna",
          Author2LastName: "Ravenscroft",
          Author2Biography: "Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books, articles and presentations; active member of Open Source community; skilled at translating between IT professionals and end users.",
          Author2PortraitURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg",
          Author3FirstName: "Steve",
          Author3LastName: "Holden",
          Author3Biography: "Steve Holden Is a consultant, advising clients on system and network architectures and the design and implementation of programmed web systems. He also teaches classes on TCP/IP, network security, database and programming topics, and is the author of \"Python Web Programming\", the O'Reilly School of Technology's \"Certificate series in Python\" and O'Reilly Media's \"Intermediate Python\" video series.",
          Author3PortraitURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/steve_holden.jpg"
        },
        {
          BookTitle: "Think Python",
          BookGenre: "Python",
          BookDescription: "If you want to learn how to program, working with Python is an excellent way to start. This hands-on guide takes you through the language a step at a time, beginning with basic programming concepts before moving on to functions, recursion, data structures, and object-oriented design. This second edition and its supporting code have been updated for Python 3.",
          BookCoverURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/think_python.jpg",
          Author1FirstName: "Allen B.",
          Author1LastName: "Downey",
          Author1Biography: "Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master's and Bachelor's degrees from MIT.",
          Author1PortraitURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg",
          Author2FirstName: "",
          Author2LastName: "",
          Author2Biography: "",
          Author2PortraitURL: "",
          Author3FirstName: "",
          Author3LastName: "",
          Author3Biography: "",
          Author3PortraitURL: ""
        },
        {
          BookTitle: "Learning React Native",
          BookGenre: "JavaScript",
          BookDescription: "Get a practical introduction to React Native, the JavaScript framework for writing and deploying fully featured mobile apps that look and feel native. With this hands-on guide, you%u2019ll learn how to build applications that target iOS, Android, and other mobile platforms instead of browsers. You%u2019ll also discover how to access platform features such as the camera, user location, and local storage.",
          BookCoverURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/learning_react_native.jpg",
          Author1FirstName: "Bonnie",
          Author1LastName: "Eisenman",
          Author1Biography: "Bonnie Eisenman is a software engineer at Codecademy, with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos. In her spare time, she enjoys building electronic musical instruments, tinkering with hardware projects, and laser-cutting chocolate. Find her on Twitter as @brindelle.",
          Author1PortraitURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg",
          Author2FirstName: "",
          Author2LastName: "",
          Author2Biography: "",
          Author2PortraitURL: "",
          Author3FirstName: "",
          Author3LastName: "",
          Author3Biography: "",
          Author3PortraitURL: ""
        },
        {
          BookTitle: "You Don't Know JS: ES6 & Beyond",
          BookGenre: "JavaScript",
          BookDescription: "No matter how much experience you have with JavaScript, odds are you don%u2019t fully understand the language. As part of the \"You Don%u2019t Know JS\" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
          BookCoverURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/es6_and_beyond.jpg",
          Author1FirstName: "Kyle",
          Author1LastName: "Simpson",
          Author1Biography: "Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",
          Author1PortraitURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg",
          Author2FirstName: "",
          Author2LastName: "",
          Author2Biography: "",
          Author2PortraitURL: "",
          Author3FirstName: "",
          Author3LastName: "",
          Author3Biography: "",
          Author3PortraitURL: ""
        },
        {
          BookTitle: "You Don't Know JS: Scope & Closures",
          BookGenre: "JavaScript",
          BookDescription: "No matter how much experience you have with JavaScript, odds are you don%u2019t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You%u2019ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset.",
          BookCoverURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/scope_and_closures.jpg",
          Author1FirstName: "Kyle",
          Author1LastName: "Simpson",
          Author1Biography: "Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",
          Author1PortraitURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg",
          Author2FirstName: "",
          Author2LastName: "",
          Author2Biography: "",
          Author2PortraitURL: "",
          Author3FirstName: "",
          Author3LastName: "",
          Author3Biography: "",
          Author3PortraitURL: ""
        },
        {
          BookTitle: "You Don't Know JS: Async & Performance",
          BookGenre: "JavaScript",
          BookDescription: "No matter how much experience you have with JavaScript, odds are you don%u2019t fully understand the language. As part of the \"You Don%u2019t Know JS\" series, this concise yet in-depth guide focuses on new asynchronous features and performance techniques%u2014including Promises, generators, and Web Workers%u2014that let you create sophisticated single-page web applications and escape callback hell in the process.",
          BookCoverURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/async_and_performance.jpg",
          Author1FirstName: "Kyle",
          Author1LastName: "Simpson",
          Author1Biography: "Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",
          Author1PortraitURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg",
          Author2FirstName: "",
          Author2LastName: "",
          Author2Biography: "",
          Author2PortraitURL: "",
          Author3FirstName: "",
          Author3LastName: "",
          Author3Biography: "",
          Author3PortraitURL: ""
        }
      ]);
    });
};