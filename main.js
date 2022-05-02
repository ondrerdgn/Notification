window.addEventListener("load", () => {
  //   console.log(window.Notification);
  if (!window.Notification) return;
  //   console.log(Notification.permission);
  Notification.requestPermission().then(sendNotification);
});

const sendNotification = (permission) => {
  let notification = new Notification("yeni bildirim", {
    body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    icon: "bg.png",
  });
  notification.onclick = () => {
    window.location.href =
      "https://developer.mozilla.org/en-US/docs/Web/API/Notification";
  };
  console.log(notification);
};
