/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string) {
    var counts: any = {};

    const matches = str.toLowerCase().match(/[^\s]+/g);
    if (matches !== null) {
      for (const match of matches) {
        if (counts.hasOwnProperty(match)) counts[match]++;
        else counts[match] = 1;
      }
    }

    return counts;
  }
}

export { Words };
