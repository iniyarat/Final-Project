# Quiz App
**WEB-115 Final Project Proposal**
Student: Iniya Rathinakumar | Repo: `WEB-115_FinalProject_Rathinakumar`

---

## Overview

This is a web app that allows users to take a multiple-choice quiz. The app will load questions from a JSON file and display them one at a time with several answer options. Users will select an answer, receive feedback on whether it is correct, and then move on to the next question until the quiz is complete.

At the end of the quiz, the user will see their final score and have the option to restart the quiz. The app is designed to be simple, interactive, and easy to use.

The target user is students or anyone who wants a quick way to test their knowledge on a topic without needing external tools or websites.

---

## Features

- Start quiz button to begin
- Questions loaded dynamically from a JSON file
- Multiple-choice answer options for each question
- Immediate feedback after selecting an answer (correct or incorrect)
- Score tracking throughout the quiz
- "Next Question" button to move through the quiz
- Final results screen displaying the total score
- Option to restart the quiz

---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|
| **If Statements & Loops** | Loops will be used to go through the list of questions loaded from the JSON file. If statements will check whether the selected answer is correct and update the score, as well as control quiz progression. |
| **Event Listeners** | Event listeners will be used for starting the quiz, selecting an answer, and clicking the next question button to move forward. |
| **DOM Element Creation** | Questions and answer choices will be dynamically created using createElement and added to the page with appendChild. The quiz content will not be hardcoded in the HTML. |
| **Classes & Subclasses** | A base Quiz class will store the questions, current index, and score. A subclass MultipleChoiceQuiz will extend Quiz and handle checking answers and managing quiz-specific behavior. |

---

## DLC — Additional Topics

### JSON & Local Storage
The application will use localStorage to save the user’s quiz progress and score. Data such as the current question index and score will be converted into JSON format using JSON.stringify() and stored in the browser. When the page is reloaded, the app will retrieve the data using JSON.parse() to restore the user’s progress. This allows the quiz to persist between sessions without needing a backend.

---

## Tech Stack

- HTML, CSS, Vanilla JavaScript
- JSON (for quiz questions)
- localStorage for saving quiz data
- VS Code + GitHub
- HTML, CSS, Vanilla JavaScript
- JSON (for quiz questions)
- localStorage for saving quiz data
- VS Code + GitHub
