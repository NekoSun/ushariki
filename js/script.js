$(document).ready(function() {
  $editor = $('#editor');
  $('[data-page-size]').on('click', function(e){
    e.preventDefault();
    var newSize = $(this).data('pageSize');
    FooTable.get('#page-size-example').pageSize(newSize);
  });
  $('#page-size-example').footable({
    "columns": $.get("js/columns.json"),
    "rows": $.get("js/period.json")
  });
});

// let requestURL = `js/period.json`;
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = () => {
//   let task = request.response;
//   showTask(task);
// }

// let showTask = (jsonObj) => {
//   let tableArr = [`<table>`];
//   let tasks = jsonObj;
//   // console.log(tasks);
//   for (let i = 0; i < tasks.length; i++) {
//     tableArr.push(`<tr>`);
//     tableArr.push(`<td>${tasks[i].sorting}</td>`);
//     tableArr.push(`<td>${tasks[i].eventTitle}</td>`);
//     tableArr.push(`<td>${tasks[i].eventDisplayServiceName}</td>`);
//     tableArr.push(`<td>${tasks[i].eventMedicalCode}</td>`);
//     tableArr.push(`<td>${tasks[i].eventAbout}</td>`);
//     tableArr.push(`<td>${tasks[i].eventDay}</td>`);
//     tableArr.push(`<td>${tasks[i].eventType}</td>`);
//     tableArr.push(`<td>${tasks[i].eventSpecialization}</td>`);
//     tableArr.push(`<td>${tasks[i].status.rec} ${tasks[i].status.extra}</td>`);
//     tableArr.push(`</tr>`);
//   }
//   tableArr.push(`</table>`);
//   document.getElementById(`stat`).innerHTML = tableArr.join(`\n`);
// }

