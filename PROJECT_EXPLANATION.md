# Project Explanation: Simon Game

This project is a web-based implementation of the classic electronic memory game "Simon." The core gameplay involves players observing a sequence of colors that light up and play sounds, and then attempting to reproduce that sequence by clicking on the colored pads in the correct order. Each time the player successfully reproduces the sequence, the game adds a new color to the end of the sequence, making it progressively harder.

## File Structure and Key Files

The project is organized with distinct files for structure (HTML), styling (CSS), and behavior (JavaScript). Here's a breakdown of the important ones:

*   **`index.html`**: This is the main entry point of the application. It defines the visual layout of the game, including the four colored pads (green, red, yellow, blue), the score display (labeled "Nível"), and buttons to start a new game and toggle fullscreen mode. It also includes references to all the necessary CSS and JavaScript files.
*   **`js/game.js`**: This file is the heart of the game, containing most of the logic. It's responsible for:
    *   Generating the random sequence of colors.
    *   Storing the game's sequence.
    *   Handling player clicks on the colored pads.
    *   Comparing player input against the stored sequence.
    *   Playing sounds associated with colors and errors.
    *   Visually displaying the color sequence to the player.
    *   Keeping track of and updating the player's score (level).
*   **`js/main.js`**: This script handles the functionality of the "Entrar FullScreen" / "Sair FullScreen" button. It uses browser APIs to request or exit fullscreen mode for the game.
*   **`css/app.css`**: This file contains the Cascading Style Sheets (CSS) rules that define the appearance of the game elements – things like the colors of the pads, the layout of the page, button styling, and text formatting.
*   **`audio/` directory**: This folder holds all the sound files used in the game. There's a unique sound for each of the four colors (`verde.mp3`, `vermelho.mp3`, `amarelo.mp3`, `azul.mp3`) and a sound for when the player makes an incorrect guess (`erro.mp3`).
*   **`js/helpers.js`** and **`js/plugins.js`**: Files named this way typically contain utility functions (`helpers.js`) that might be used across different parts of the JavaScript code (e.g., functions for generating random numbers or creating delays) and JavaScript plugins or extensions (`plugins.js`).
*   **`js/vendor/` directory**: This contains third-party JavaScript libraries like jQuery and Modernizr.

## Detailed Game Logic (`js/game.js`)

1.  **Starting a New Game (`iniciarJogo`)**:
    *   Triggered by the "Iniciar novo jogo" button.
    *   Resets game variables (player's progress, game sequence).
    *   Adds the first color to the sequence and displays it to the player.
    *   Sets a flag to indicate the game is active.

2.  **Generating and Storing the Color Sequence (`arr_Memory`, `acrescentaListaMemoria`)**:
    *   The sequence is stored in the `arr_Memory` array (e.g., '1' for green).
    *   `acrescentaListaMemoria()` adds a new random color to this array and updates the score.

3.  **Displaying the Sequence to the Player (`exibeListaMemoria`)**:
    *   Iterates through the `arr_Memory` sequence.
    *   For each color: highlights the square, plays its sound, and uses delays for clear visibility.
    *   Player input is disabled during this phase.

4.  **Handling Player Input and Validation (`clicaCor`)**:
    *   When a player clicks a color:
        *   If the game isn't active, the click is ignored.
        *   **Incorrect click**: Plays an error sound, and the game ends.
        *   **Correct click**: Plays the color's sound, and the game waits for the next input in the sequence.
        *   **Correct and completes sequence**: A new color is added to `arr_Memory`, and the new, longer sequence is displayed.

5.  **Updating the Score/Level (`updateScore`)**:
    *   Updates the "Nível" display with the current length of `arr_Memory`.

## External Libraries

*   **jQuery (v3.4.1)**: A JavaScript library that simplifies HTML document manipulation, event handling, and animations. It's included, though core game logic snippets shown use vanilla JavaScript.
*   **Modernizr (v3.7.1)**: Detects HTML5 and CSS3 feature availability in browsers, allowing for conditional styling or functionality to ensure broader compatibility.

## Project Purpose Summary

This project is a digital, web-based version of the "Simon" memory game. It aims to challenge players' short-term memory by requiring them to replicate an ever-lengthening sequence of colors and sounds. It serves as an entertaining browser game and demonstrates web development skills in HTML, CSS, and JavaScript.
