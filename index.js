const today = dayjs();
const firstSummerDay = dayjs('2023-06-21');
const message = document.querySelector('h1');

if (today.isAfter(firstSummerDay)) {
  message.textContent = 'ANO';
} else {
  message.textContent = 'NE';
}
