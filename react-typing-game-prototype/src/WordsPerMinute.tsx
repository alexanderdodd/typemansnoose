export default function WordsPerMinute({countdownLength, wordCount}: {countdownLength: number; wordCount: number}) {
  const wordsPerMinute = (wordCount / countdownLength) * 60;
  return (
    <>
      WPM: {wordsPerMinute.toFixed(2)}
    </>
  );
}
