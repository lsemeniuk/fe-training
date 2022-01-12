// function getRandomArbitrary(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function func(obj) {
//   let DTSTART = ''
//   let DTEND = ''
//   let SUMMARY = `${obj.home} - ${obj.away}`
//   const fullTime = obj.time.split('. ');
//   let data = fullTime[0].split('.')
//   let time  = fullTime[1].split(':')
//   let year = '2022'
//   if (+data[1] > 6) {
//     year = '2021'
//   }
//   DTSTART = `${year}${data[1]}${data[0]}T${+time[0] - 2}${time[1]}00Z`
//   DTEND = `${year}${data[1]}${data[0]}T${+time[0]}${time[1]}00Z`
//   return `
//   BEGIN:VEVENT
//   DTSTART:${DTSTART}
//   DTEND:${DTEND}
//   DTSTAMP:20211209T093955Z
//   UID:06kgj${getRandomArbitrary(10000, 99999)}k6ig4t61v8isnfqd@google.com
//   CREATED:20211209T093901Z
//   DESCRIPTION:
//   LAST-MODIFIED:20211209T093901Z
//   LOCATION:
//   SEQUENCE:0
//   STATUS:CONFIRMED
//   SUMMARY:${SUMMARY}
//   TRANSP:OPAQUE
//   END:VEVENT`
// }

// let matchesa = document.querySelectorAll('.event__match');

// let array = [];
// let stroke = '';

// for (let i = 0; i < matchesa.length; i++) {
//   const match = matchesa[i];
//   const time = match.querySelector('.event__time').textContent;
//   const home = match.querySelector('.event__participant--home').textContent;
//   const away = match.querySelector('.event__participant--away').textContent;
//   array.push({time, home, away})
// }

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   stroke += func(element)
// }
// console.log(stroke);

const fs = require('fs');
const path = require('path');

const readFileAsync = async path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    });
  });
};

function parseEvent(data) {
  let newstringreplaced = data.replace(/BEGIN/gi, ",BEGIN");
  let newstring = newstringreplaced.split(",");

  return newstring;
}

readFileAsync(path.resolve(__dirname, 'footbal@group.calendar.google.com.ics'))
  .then(data => {
    let events = parseEvent(data);
    let arrEvents = [];
    let currentDate = Date.now();
    for (let i = 0; i < events.length; i++) {
      let obj = {};
      const event = events[i];
      let eventArr = event.split('\r\n');

      for (let ind = 0; ind < eventArr.length; ind++) {
        const element = eventArr[ind];
        let elementArr = element.split(':');
        if (elementArr.length > 1) {
          if (elementArr[0] === 'DTSTART' || elementArr[0] === 'DTEND' || elementArr[0] === 'DTSTAMP' || elementArr[0] === 'CREATED' || elementArr[0] === 'LAST-MODIFIED') {
            let year = elementArr[1].substr(0, 4);
            let month = elementArr[1].substr(4, 2);
            let day = elementArr[1].substr(6, 2);
            let hours = elementArr[1].substr(9, 2);
            let minute = elementArr[1].substr(11, 2);
            obj[elementArr[0]] = new Date(Date.UTC(year, month, day, hours, minute));
          } else {
            obj[elementArr[0]] = elementArr[1]
          }
        }
      }
      if (currentDate > obj.DTSTART) {
        arrEvents.push(obj)
      }
    }

    console.log(arrEvents)
  })
  .catch(err => console.log(err));
