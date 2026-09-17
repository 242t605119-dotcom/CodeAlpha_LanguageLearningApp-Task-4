# Language Learning App

## Project Overview

The Language Learning App is a simple and interactive web application developed as part of the CodeAlpha App Development Internship.

The application helps users learn basic Spanish words using flashcards and test their knowledge through a quick quiz. The words are divided into different categories for easy learning.

## Features

* Interactive language flashcards
* English words with Spanish translations
* Pronunciation guidance
* Show Answer feature
* Previous and Next buttons
* Multiple learning categories
* Greetings category
* Food category
* Travel category
* Daily Life category
* Quick translation quiz
* Quiz score tracking
* Correct and wrong answer feedback
* Local Storage support
* Saved learning progress
* Responsive design for mobile devices

## Categories

The app contains four categories:

### Greetings

* Hello
* Good morning
* Thank you

### Food

* Water
* Bread
* Milk

### Travel

* Airport
* Hotel
* Ticket

### Daily Life

* House
* Friend
* School

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Local Storage

## Project Structure

CodeAlpha_LanguageLearningApp/

* index.html
* style.css
* script.js
* README.md

## How It Works

### Flashcards

The user selects a category and a word is displayed on the flashcard.

For example:

Hello

The user can select an option from the quiz first. After selecting an option, the Show Answer button becomes available.

Clicking Show Answer displays the Spanish translation and pronunciation.

Example:

Hola (OH-lah)

### Navigation

The Previous button moves to the previous word.

The Next button moves to the next word.

The words repeat from the beginning after reaching the last word.

### Quiz

The Quick Quiz asks the user to select the correct translation of the displayed word.

After selecting an option, the application displays feedback.

A correct answer increases the user's score.

### Score

The application displays the current quiz score.

The score is saved using Local Storage so it can remain available after refreshing the page.

## Local Storage

Local Storage is used to save:

* Selected category
* Current flashcard
* Quiz score

This allows the application to remember the user's progress after refreshing the browser.

## Responsive Design

The application is designed to work on both desktop and mobile screen sizes.

The layout automatically adjusts on smaller screens for easier use.

## How to Run

1. Download or clone the repository.
2. Open the CodeAlpha_LanguageLearningApp folder.
3. Open index.html in a browser.
4. Alternatively, use Live Server in Visual Studio Code.
5. Select a category and start learning.

## Learning Flow

Select Category → View Word → Select Quiz Option → Show Answer → Learn Translation → Next Word

## Complexity

### Flashcard Display

Time Complexity: O(1)

Space Complexity: O(1)

### Next / Previous

Time Complexity: O(1)

Space Complexity: O(1)

### Quiz Creation

Time Complexity: O(n)

Space Complexity: O(n)

Where n represents the number of words in the selected category.

### Local Storage

Time Complexity: O(1)

Space Complexity: O(1)

## Internship Task

This project was developed as part of the CodeAlpha App Development Internship – Task 4: Language Learning

## Author

T.Nandhini
