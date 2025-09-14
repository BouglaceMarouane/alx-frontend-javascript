// MajorCredits interface with brand property
interface MajorCredits {
  credits: number;
  _brand: 'MajorCredits';
}

// MinorCredits interface with brand property
interface MinorCredits {
  credits: number;
  _brand: 'MinorCredits';
}

// sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'MajorCredits'
  };
}

// sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'MinorCredits'
  };
}

// Example usage for testing
const majorSubject1: MajorCredits = { credits: 3, _brand: 'MajorCredits' };
const majorSubject2: MajorCredits = { credits: 4, _brand: 'MajorCredits' };

const minorSubject1: MinorCredits = { credits: 2, _brand: 'MinorCredits' };
const minorSubject2: MinorCredits = { credits: 1, _brand: 'MinorCredits' };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log('Total Major Credits:', totalMajorCredits.credits);
console.log('Total Minor Credits:', totalMinorCredits.credits);
