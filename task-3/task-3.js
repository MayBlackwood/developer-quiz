if (recipe === 'SPANISH') {
  fudge = SPANISH_FUDGE;
} else if (recipe === 'FRENCH') {
  fudge = FRENCH_FUDGE;
  chocolate = 7;
} else if (recipe === '') {
  fudge = ENGLISH_FUDGE;
} else {
  fudge = 1;
}

amt = base * fudge;
sugar = 2 * bottom(amt) + top(amt) * 1.17;

// variant 2

switch (recipe) {
  case 'SPANISH':
    fudge = SPANISH_FUDGE;
    break;
  case 'FRENCH':
    fudge = FRENCH_FUDGE;
    chocolate = 7;
    break;
  case 'ENGLISH':
    fudge = ENGLISH_FUDGE;
    break;
  default:
    fudge = 1;
    break;
}

amt = base * fudge;
sugar = 2 * bottom(amt) + top(amt) * 1.17;
