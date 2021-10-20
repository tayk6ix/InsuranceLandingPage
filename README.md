# Frontend Mentor - Insure landing page solution

This is a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop](/dist/images/LandingPage2Desktop.jpg)
![Mobile](/dist/images/LandingPage2Mobile.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Live](https://02ad00e8.insurancelandingpage-github-io.pages.dev/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript
- Sass

### What I learned

Oh wow where to start! 

Well proudly I would that my knowledge of CSS And HTML5 is almost like second nature now, I can come up with ideas of how to set up anything in minutes, where it would take me hours before. Hopefully in the future I won't even think about it and just get the layouts done with no probkem.

I am also proud to have used some aria syntax. I am really happy that with these actions I am taking, somday in the future, I could help someone out whenever I make a website. I am going to keep implementing these because they are AWESOME!
example:

```html
<footer>
    <section class="social">
      <article>
        <figure><img src="./images/logo.svg" alt="INSURE"></figure>
        <div class="icons">
          <a href="#" aria-label="Facebook"><img src="./images/icon-facebook.svg" alt=""></a>
          <a href="#" aria-label="Twitter"><img src="./images/icon-twitter.svg" alt=""></a>
          <a href="#" aria-label="Pinterest"><img src="./images/icon-pinterest.svg" alt=""></a>
          <a href="#" aria-label="Instagram"><img src="./images/icon-instagram.svg" alt=""></a>
        </div>
      </article>
```


Now, Sass!, wow there is so much to this. During this project I started including the functions and mixins properties, which with them come certain syntax such as @mixins @function @include @if @else @elseif @return etc.
example:

```css
@mixin flex($row,$align,$justify,$gap) {
    display: flex;
    flex-direction: $row;
    align-items: $align;
    justify-content: $justify;
    gap: $gap;
}
```
I was able to use the button function from my last project but this time I was able to figure out how to switch the image which was pretty cool. 

```js
document.querySelectorAll('#btn').forEach(item => {
    item.addEventListener('click', event => {
      console.log('clicked');
      item.nextElementSibling.classList.toggle('active');
      if (item.firstElementChild.classList.contains('not_active')){
        item.firstElementChild.classList.toggle('not_active');
        item.lastElementChild.classList.toggle('not_active');
      }
      else if(item.lastElementChild.classList.contains('not_active')){
        item.firstElementChild.classList.toggle('not_active');
        item.lastElementChild.classList.toggle('not_active');
      }
      else {
          return;
      }
    });
  });
}
```

### Continued development

This projects keep pushing me and as well as my limits, I keep learning what I could learn next time. But to start, I am really looking forward to working more with functions in sass, I feel like they could be very useful with things like font size, widths, or even media queries in a way. Now, I will continue to try to learn JavaScript, that is my biggest weakeness at the moment, it is not an easy thing tho, but my hopes are up to learn it as quickly as I can. 

### Useful resources

- [Kevin Powell Youtube](https://www.youtube.com/kepowob) - This guy is like the ultimate CSS GOD!! Okay but not kidding this guys has helped me so much through out this journey. Now I just watch him for entertaiment not joking lol.

## Author

- GitHUb - [tayk6ix](https://www.your-site.com)
- Frontend Mentor - [@tayk6ix](https://www.frontendmentor.io/profile/yourusername)



## Acknowledgments

Once more I am acknowledging the FrontEndMentors Team that have been giving this awesome opportunity on learning website development for FREE. Thank you guys for this opportunity, you guys are the best!
