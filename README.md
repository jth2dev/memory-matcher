# Memory Matcher

We're going to build a game like this: https://www.memozor.com/memory-games/for-adults/sports-objects

## Goals
1. Identify the MVP for a project
1. Separate project goals into core and stretch goals
1. Build a priority order of project tasks
1. Create detailed user stories
1. Understand and work with game state
1. Represent our game state in the DOM

## MVP
MVP stands for _Minimum Viable Product_, or in other words, the smallest, most stripped-down version of the thing you're trying to build that you could possibly make. We want to look at the game we're mimicing, and define an MVP memory game we can build.

## Core vs Stretch goals
Put all the goals into a list, and order them by essential-ness to this project. We want to draw a line between two goals in the list, separating the must-haves from the nice-to-haves. We call the must-haves the core goals, and the nice-to-haves stretch goals. You should choose the position of your core-stretch separator such that if all the core goals get done, you've got an MVP.

## User Stories
Goals are an essential stepping stone, but they can be improved into _user stories_. A user story is a very cut-and-dry, atomic part of the experience of using our product (ie playing our memory game). User stories are written in a cause-and-effect format like so: "When I load the page, I see a 3 by 4 grid of cards, and they're all face-down".

One key difference between goals and user stories is that user stories are written from the perspective of a user who knows nothing about programming, and is just playing our game without knowing anything that's going on under the hood. So for example, this user story is too technical: When I click on a card, we querySelector for it and set its innerText.

Each of these user stories is not specific enough (though they are NOT in order of importance). Why are they not specific enough? What can we add to them to fix them?
<details>
  <summary>When I load the page, I see 12 cards.</summary>
  Are they face-down or face-up? Does the grid shape matter?
</details>

<details>
  <summary>When I click a card, my score goes up.</summary>
  The score should only go up if they made a match
</details>

<details>
  <summary>When I click on a face-down card, it turns face-up.</summary>
  How long does it stay face-up? The answer depends on whether this is your first guess or your second guess!
</details>

<details>
  <summary>When I flip up two cards, they stay face-up.</summary>
  Only if they match! Also, how long do they stay face-up? Forever, or just for some time?
</details>

<details>
  <summary>When I flip up two cards, they turn back face-down.</summary>
  Only if they don't match! How fast do they turn face-down? What happens after they turn face-down?
</details>

<details>
  <summary>When all the cards are face-up, the game ends.</summary>
  What do we see that lets us know the game ends?
</details>

## Game state
Game state is the collection of all your variables that the game needs to run. State variables change over time as the user plays the game. It's a convenient practice to `let` all your game state variables at the beginning of your js file in the global scope. You can initialize them as any starting values you need, or as `null` if appropriate. Then all your game functions will be able to modify them.

It's important to remember that our game state is just js variables, and it's up to us to represent them in the DOM as needed! Always strive to keep your DOM in sync with your javascript state variables. One good tip for this is to change the DOM accordingly whenever you change a js variable.
