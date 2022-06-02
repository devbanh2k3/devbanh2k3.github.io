var source = new EventSource("https://streaming-graph.facebook.com/575579367329484/live_comments?access_token=EAARVH5MvDwUBAN4nffp6InGy4HbI5Yhx7zabWySZAT1eSyMfvWn3qRNZAHLOhrHMnUZC9VjuBTDq6SBHDcS9qmf4plxZAZAtlkpnIRIXURsrISmiHNcGyYck0Hu9iyjfwZCiMn5WdmegzhglyiNwt7108u6v7McFEnX96nXAudPAkGCW59bZBI1ZBHzZB9xEUkdpIRqEBcV7kjZAZCxmqB3IyYE&comment_rate=one_per_two_seconds");
source.onmessage = function(event){
  // Do something with event.message for example
  const newElement = document.createElement("li");
  newElement.className='list-group-item list-group-item-action flex-column align-items-start';
  const eventList = document.getElementById("list");
  let Data = JSON.parse(event.data);
  newElement.textContent = Data.id.trim() + "\r\n" + Data.message.trim() ;
  eventList.appendChild(newElement);
  const commen = document.getElementsByClassName('comment');
  //commen.scrollTop(commen.prop('scrollHeight'))
  window.scrollTo(0,document.commen.scrollHeight);
};