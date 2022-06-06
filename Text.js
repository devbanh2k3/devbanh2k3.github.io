const formm = document.getElementsByClassName('form1');
const submit = document.getElementById('submit');

function GetComment(e)
{
  e.preventDefault();
  var Token = document.getElementById("exampleInputEmail1").value;
  var ID_Live = document.getElementById("exampleInputPassword1").value;
  var source = new EventSource("https://streaming-graph.facebook.com/"+ID_Live.trim()+"/live_comments?access_token="+Token.trim()+"&comment_rate=one_per_two_seconds");
  source.onmessage = function(event){
    const newElement = document.createElement("li");
    newElement.className='list-group-item list-group-item-action flex-column align-items-start';
    const eventList = document.getElementById("list");
    let Data = JSON.parse(event.data);
    newElement.textContent = Data.id.split('_')[1].trim() + "\r\n" + Data.message.trim() ;
    eventList.appendChild(newElement);
  };
}

document.addEventListener('DOMContentLoaded', function(){
  submit.addEventListener('click', GetComment, true);
 
},true);

