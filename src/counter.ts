/**
 * Counter utility module
 * 
 * This module provides a simple counter functionality that can be attached to any button element.
 * It's part of the Vite + TypeScript starter template and demonstrates basic DOM manipulation
 * and event handling in TypeScript.
 * 
 * @author Vite TypeScript Template
 * @version 1.0.0
 */

/**
 * Sets up a counter on a button element
 * 
 * This function creates a click counter that increments each time the button is clicked.
 * The counter value is displayed inside the button text and persists during the session.
 * 
 * @param {HTMLButtonElement} element - The button element to attach the counter to
 * @returns {void} No return value - modifies the element directly
 * 
 * @example
 * ```typescript
 * const button = document.querySelector('#counter-btn') as HTMLButtonElement;
 * setupCounter(button);
 * ```
 */
export function setupCounter(element: HTMLButtonElement): void {
  // Initialize counter variable to track clicks
  let counter = 0
  
  /**
   * Internal function to update the counter display
   * Updates both the internal counter value and the button's display text
   * 
   * @param {number} count - The new counter value to display
   */
  const setCounter = (count: number): void => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  
  // Add click event listener to increment counter on each click
  element.addEventListener('click', () => setCounter(counter + 1))
  
  // Initialize the counter display with zero
  setCounter(0)
}
