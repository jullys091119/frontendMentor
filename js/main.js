
function setData() {
  let $div = document.getElementsByClassName("information-inside-card");
  let $hours = document.getElementsByClassName("hours");
  fetch("/help/data.json", { mode: "no-cors" })
  .then((res)=> res.json())

  .then((data)=>{
    for(let i=0;i<$div.length;i++) {
      let $img = document.createElement("img");
      $img.setAttribute("src",`/images/icon-ellipsis.svg`);
      $div[i].innerHTML=data[i].title;
      $div[i].appendChild($img).classList.add("img-bubble");
    }

    for(let i=0;i<$hours.length;i++) {
      let  $current = document.createElement("p")
      $current.style.fontSize="1.5rem";
      $current.style.margin='5px 0 0 0'
      let  $previous = document.createElement("p");
      $previous.style.margin='11px 0 0 0';
      $hours[i].appendChild($current).innerHTML=data[i].timeframes.weekly.current + 'hrs';
      $hours[i].appendChild($previous).innerHTML= `Last Week -` +data[i].timeframes.weekly.previous + `hrs`;
    }
  })

}

setData()