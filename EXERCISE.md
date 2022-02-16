# Timer exercises
The challenges in these exercises revolve around implementing a timer component and composing it per the exercise requirements.

You start off with a top level `App.js` component. You are free to refactor and restructure your components to achieve implementation targets and specifications, as well as according to best practices in general coding and React coding principles. Keep in mind that you still need to accommodate the requirement mentioned in the [README](README.md)

**Objectives**
* Spend no more than 2 hours on this coding challenge.
* Complete as many steps as possible, starting with **Step 1**.
* Implement as many of the unit tests as possible, starting with those for **Step 1**.
* Add more unit tests as necessary and if needed, but existing ones must always pass.
* Complete implementations to the best of your understanding of the requirements below. Feel free to add comments to explain any inferences/assumptions.
* Reuse as much as possible, refactor as necessary.

## Step 1: Implement a count up timer
Starting at 0, implement a timer that should increment by 1 every 1 second. The timer should start incrementing immediately.
Implement a button that controls the timer, toggling it on and off when clicked.

Other requirements:
- constrain the timer to render within a box
- the timer value should centered within the box
- The button should read `Start` to start timer.
- The button should read `Stop` to stop the timer.
- Horizontally center the button and timer relative to each other.
- both the timer and button components must be centered in the middle of the page
- The button should have a pill box form. The timer should be a rectangle with slightly rounded edges.

Design:
```
_____________________
|         0         |
---------------------

      ( Button )
```

## Step 2: Compose the timer with a Card
Per design below, compose the timer onto a Card component, such that:
- the timer is rendered inside a box
- the timer is positioned at the top of the Card as shown
- the timer is horizontally centered relative to the Card
- the card, with the timer, is centered in the middle of the page

Other requirements:
- The button from `Step 1` should continue to toggle the timer on/off
- The card is a box that renders centered text within it
- Horizontally center the button and card relative to each other.

Bonus requirements:
- Implement the card with a Material Design elevation of 1 to begin with, then goes to 3 when hovered over.
  - Hint: look at and inspect https://material-ui.com/system/shadows/#example to see what the elevation box shadows are, and apply them to your implementation

Design:
```
        ________________________
--------|           0          |--------
|       ------------------------       |
|                                      |
|                                      |
|                                      |
|                  Card                |
|                                      |
|                                      |
|                                      |
----------------------------------------

                ( Button )
```

## Step 3: Compose two Cards with timers
Requirements:
- The button from `Step 1` should toggle both timers on/off
- the cards should be centered in the middle of the page
- Horizontally center the button and cards relative to each other.

Design:
```
        ________________________                     ________________________
--------|           0          |--------     --------|           0          |--------
|       ------------------------       |     |       ------------------------       |
|                                      |     |                                      |
|                                      |     |                                      |
|                                      |     |                                      |
|                 Card1                |     |                 Card2                |
|                                      |     |                                      |
|                                      |     |                                      |
|                                      |     |                                      |
----------------------------------------     ----------------------------------------

                                      ( Button )
```

## Step 4: Timer intervals, starts, and increments should be configurable
Requirements:
- A timer should be able to increment by some value `x`, every `y` seconds, starting at some value `z`
- Update the two card compositions from `Step 3` to accommodate this
- The button should continue to toggle the timers on/off

## Step 5: Implement a count down timer variation
Requirements:
- Implement a variation of the timer that counts DOWN from some specificed starting point, counting down to 0
- Previous configuration requirements from previous steps should be accommodated
- The button should continue to toggle the timers on/off
- Demo and test against a card that positions the timer as per previous steps

## Step 6: Implement a count down format of mm:ss
Requirements:
- Timer should be able to render a countdown format of digits or a format of `mm:ss`, where `mm` is minutes, and `ss` is seconds
  - assume the starting point value provided is an ISO 8601 timestamp in the future (per test requirements)
- Timer should remain capable of counting down from an integer
- The button should continue to toggle the timers on/off
- Demo and test against a card that positions the timer as per previous steps

## Step 7: Render 4 cards - two cards with count up variation, two with count down variation
- The cards should be rendered in a 2 x 2 grid, centered within the page
- The button should continue to toggle the timers on/off
- Horizontally center the button and grid of cards relative to each other.

Design:

```
        ________________________                     ________________________
--------|           0          |--------     --------|           0          |--------
|       ------------------------       |     |       ------------------------       |
|                                      |     |                                      |
|                                      |     |                                      |
|                                      |     |                                      |
|                 Card1                |     |                 Card2                |
|                                      |     |                                      |
|                                      |     |                                      |
|                                      |     |                                      |
----------------------------------------     ----------------------------------------

        ________________________                     ________________________
--------|         mm:ss        |--------     --------|         mm:ss        |--------
|       ------------------------       |     |       ------------------------       |
|                                      |     |                                      |
|                                      |     |                                      |
|                                      |     |                                      |
|                 Card3                |     |                 Card4                |
|                                      |     |                                      |
|                                      |     |                                      |
|                                      |     |                                      |
----------------------------------------     ----------------------------------------


                                      ( Button )
```
