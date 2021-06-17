import {UserVerdicts} from './constants';

export function getScoreEvaluation(score) {
  let verdict = '';

  if (score < 3) {
    verdict = UserVerdicts.BAD;
  }
  else if (score >= 3 && score < 5) {
    verdict = UserVerdicts.NORMAL;
  }
  else if (score >= 5 && score < 8) {
    verdict = UserVerdicts.GOOD;
  }
  else if (score >= 8 && score < 10) {
    verdict = UserVerdicts.VERY_GOOD;
  } else {
    verdict = UserVerdicts.AWESOME;
  }

  return verdict;
}
