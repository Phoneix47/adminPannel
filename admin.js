function handle() {
  //title in <p> tag

  const p = document.createElement('p');
  p.className = 'newsHeadline';
  p.id = 'newsHeadline';
  p.appendChild(
    document.createTextNode(document.getElementById('title').value)
  );
  document.querySelector('.Fill_this').appendChild(p);

  //desciption in <ul> <li> tag

  const li = document.createElement('li');
  li.className = 'newsDesc';
  li.id = 'newsDesc';
  li.appendChild(
    document.createTextNode(
      document.getElementById('description').value
    )
  );
  document.querySelector('.Fill_this').appendChild(li);
  console.log(li);
}
