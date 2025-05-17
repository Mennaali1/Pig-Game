# 🎲 Pig Game 

A simple two-player dice game built with  JavaScript. Players take turns rolling a dice and accumulating points. The goal is to reach or exceed a total score of 100 to win the game. Rolling a 1 switches the turn to the other player, and players can choose to hold their current score to add it to their total score.

---

## 🛠️ Technologies Used

| Part        | Technology          |
|-------------|---------------------|
| Markup      | HTML                |
| Styling     | CSS                 |
| Logic       | JavaScript |

---

## 🎮 Game Rules & Flow

- **Roll Dice:** User clicks to roll a dice (1-6).
- **Dice Roll Display:** Shows the rolled number.
- **If dice roll is 1:** Player's turn ends immediately, current score is lost, and the turn switches to the other player.
- **If dice roll is not 1:** Add the dice roll value to the current player's current score and update the display.
- **Hold:** Player can hold their current score, adding it to their total score.
- **Winning Condition:** When a player's total score reaches or exceeds 100, they win the game.
- **Reset Game:** All scores are reset and Player 1 starts again.

---

## 📦 How to Run the Game Locally

1. **Clone the repository**

```bash
git clone https://github.com/Mennaali1/pig-game.git
cd pig-game
