
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {
          Title: "Python In A Nutshell",
          Genre: "Python",
          Description: "This book offers Python programmers one place to look when they need help remembering or deciphering the syntax of this open source language and its many powerful but scantily documented modules. This comprehensive reference guide makes it easy to look up the most frequently needed information--not just about the Python language itself, but also the most frequently used parts of the standard library and the most important third-party extensions.",
          CoverURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/python_in_a_nutshell.jpg",
        },
        {
          Title: "Think Python",
          Genre: "Python",
          Description: "If you want to learn how to program, working with Python is an excellent way to start. This hands-on guide takes you through the language a step at a time, beginning with basic programming concepts before moving on to functions, recursion, data structures, and object-oriented design. This second edition and its supporting code have been updated for Python 3.",
          CoverURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/think_python.jpg",
        },
        {
          Title: "Learning React Native",
          Genre: "JavaScript",
          Description: "Get a practical introduction to React Native, the JavaScript framework for writing and deploying fully featured mobile apps that look and feel native. With this hands-on guide, you%u2019ll learn how to build applications that target iOS, Android, and other mobile platforms instead of browsers. You%u2019ll also discover how to access platform features such as the camera, user location, and local storage.",
          CoverURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/learning_react_native.jpg",
        },
        {
          Title: "You Don't Know JS: ES6 & Beyond",
          Genre: "JavaScript",
          Description: "No matter how much experience you have with JavaScript, odds are you don%u2019t fully understand the language. As part of the \"You Don%u2019t Know JS\" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
          CoverURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/es6_and_beyond.jpg",
        },
        {
          Title: "You Don't Know JS: Scope & Closures",
          Genre: "JavaScript",
          Description: "No matter how much experience you have with JavaScript, odds are you don%u2019t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You%u2019ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset.",
          CoverURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/scope_and_closures.jpg",
        },
        {
          Title: "You Don't Know JS: Async & Performance",
          Genre: "JavaScript",
          Description: "No matter how much experience you have with JavaScript, odds are you don%u2019t fully understand the language. As part of the \"You Don%u2019t Know JS\" series, this concise yet in-depth guide focuses on new asynchronous features and performance techniques%u2014including Promises, generators, and Web Workers%u2014that let you create sophisticated single-page web applications and escape callback hell in the process.",
          CoverURL: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/async_and_performance.jpg",
        }
      ]);
    });
};
