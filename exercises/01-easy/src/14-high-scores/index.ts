/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    let best = 0;
    for (let i in this.scores) {
      let currentScore = this.scores[i];
      if (currentScore > best) {
        best = currentScore;
      }
    }
    return best;
  }

  get personalTopThree() {
    let scores = this.scores;
    let sorted = scores.sort((a, b) => a - b);
    let topThree = sorted.slice(-3);
    let reversedTopThree = topThree.sort((a, b) => b - a);
    return topThree;
  }
}

export { HighScores };
