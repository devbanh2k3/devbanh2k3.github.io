var source = new EventSource("https://streaming-graph.facebook.com/543719004055004/live_comments?access_token=EAARVH5MvDwUBAAnYKgZC6r9BfYeZCqNt2Sw3KhFrpTC2rDy14oeNV4aZChZCx5VnNDWCTZBVm7x0BJ3LNeUiPMlmkaO0Ok5oarlvZA01eVpOFnBRzTVCr0ptOnESNGl1Md7olNHEOQEERlI1AZAArcZBATQSVIua7rfmD4ifxKFI8SdBebSVkj0ok5iCIVO8ghj0GyzP1GArNwPl0ejwXTMD&comment_rate=one_per_two_seconds");
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