# The text analasys application

This is a student project in the course Mjukvarukvalitet 1dv610 at Linneuniversitetet.

## Description
This application will be able to count the number of words you entered, the number of sentences and the number of characters. It will also let you know which word is the longest in your text input. But that is not all. You will also get the number of uppercase, lowercase, digits, whitespace, speciel characters, vowels and consonants in you text. It will also give it a try to identify what language you are writing in.

## Installation
1. Clone the git repository and place it somewhere on your computer.
2. Open a terminal.
3. Place yourself in the root folder of the application.
4. Open a terminal in the application folder and input ```npm install``` to install all the dependencies the application needs.
5. This application uses the Text Analysis module from previous project (https://github.com/maddelen/1DV610-L2).You have to clone it and place it in the application (1DV610-L3).

```bash
npm install
```

## How to run the application
1. Place yourself in the root folder of the application.
2. Start the application in the terminal with ```npm run dev```.
3. Open a browser you prefere and paste in the URL that is similar to this 'http://localhost:5173/'.

```bash
npm run dev
```

## How to use/test the methods

Here is an example on how to use the application.

![Start view](./src/images/start.png)
1. This is the view when starting the application.

![Analyzing text](./src/images/analyzing-text.png)
2. When you enter a text it will be analyzed in real time.
