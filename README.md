# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

## My process

### Built with

- HTML
- CSS
- Native JS
- [Moment.js](momentjs.com) - JS library 


### What I learned

The major thing I learned is how the play with dates in JS. I'm aware that both native JS date management and moment.js are preferably not to be used, both of them being outdated (moment.JS being deprecated). I tried to find an alternate library but all of those I found never specified which file you should add in the <script> in your HTML file to use the lib with your browser. Took me a whole day to understand it and why every lib I installed with npm would always end in throwing me errors everywhere. I guess it means that it's not how it's done nowaday and so, I could say that I learned what I needed to learn, if that makes sense. 


### Continued development

Seeing how much time I spent trying to understand why things weren't working only to realise little by little that I wasn't using libraries the "right way", I think I'll focus on learning more on what today developpers are using to code, which doesn't seems to be what I use even though that's what tutorials I found online taught me to use. 

There is also a function given in the moment.js doc that should have helped me, but I just didn't manage to understand it even though it was quite simple. I thing I lack a profound understanding of how a lot of thing works, and I'll start by trying to understand this function. 


## Author

- Frontend Mentor - [@Koelrett](https://www.frontendmentor.io/profile/Koelrett)

