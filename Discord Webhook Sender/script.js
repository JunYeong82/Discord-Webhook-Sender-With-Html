function sendMessage() {
    const webhook = document.getElementById('webhook').value;
    const avartar = document.getElementById('avartar').value;
    const botname = document.getElementById('botname').value;
    const contents = document.getElementById('contents').value;
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
      username: botname,
      avatar_url: avartar,
      content: contents
    }
    request.send(JSON.stringify(params));
    console.log("Message Send");
  }