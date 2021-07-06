const sendForm = (form) => {
  const popUp = document.querySelector(".popup"),
    errorMessage = "Что-то пошло не так...",
    loadMessage = "Загрузка...",
    successMessage = "Спасибо! Мы скоро с Вами свяжемся!";

  console.log("form: ", form);

  const statusMessage = document.createElement("div");
  statusMessage.style.cssText = "font-size: 2rem;";

  // if (form.id === "form3") {
  //   statusMessage.style.color = "white";
  // }
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    console.log("formData: ", formData);
    let body = {};

    // for (const val of formData.entries) {
    //   body[val[0]] = val[1]
    // }
    formData.forEach((val, key) => {
      body[key] = val;
      console.log("key: " + key + " val: " + val);
    });

    if (body["name"].length < 2) {
      alert("Имя должно содержать от 2 до 30 символов");
      return;
    } else if (body["phone"].length < 7 || body["phone"].length > 12) {
      alert(
        "Номер телефона должен содержать от 7 до 12 символов с учетом плюса!"
      );
      return;
    } else {
      statusMessage.textContent = loadMessage;
      form.appendChild(statusMessage);
    }

    // postData(body)
    //   .then((response) => {
    //     if (response.status !== 200) {
    //       throw new Error("status network not 200");
    //     }
    //     statusMessage.textContent = successMessage;
    //     clearForm();
    //     setTimeout(() => {
    //       popUp.style.display = "none";
    //     }, 5000);
    //   })
    //   .catch(() => {
    //     statusMessage.textContent = errorMessage;
    //   });

    clearForm();
  });

  // const postData = (data) => {
  //   //console.log(data);
  //   return fetch("server.php", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   // return new Promise((resolve, reject) => {
  //   //   const request = new XMLHttpRequest();
  //   //   request.addEventListener("readystatechange", () => {
  //   //     statusMessage.textContent = loadMessage;
  //   //     if (request.readyState !== 4) {
  //   //       return;
  //   //     }
  //   //     if (request.status === 200) {
  //   //       resolve();
  //   //       clearForm();
  //   //     } else {
  //   //       reject(request.status);
  //   //     }
  //   //   });
  //   //   request.open("POST", "server.php");
  //   //   request.setRequestHeader("Content-Type", "application/json");

  //   //   request.send(JSON.stringify(data));
  //   // });
  // };

  const clearForm = () => {
    const nameInput = form.querySelector("input[name='name']"),
      emailInput = form.querySelector("input[name='email']"),
      messageInput = form.querySelector("input[name='message']"),
      phoneInput = form.querySelector("input[name='phone']");
    //console.log("phoneInput: ", phoneInput.value);
    nameInput.value = "";
    if (emailInput) {
      emailInput.value = "";
    }
    phoneInput.value = "";
    if (messageInput) {
      messageInput.value = "";
    }

    const child = form.getElementsByTagName("div");

    //console.log("child: ", child);
    form.removeChild(child);
    // console.log("statusMessage: ", statusMessage);
    //console.log("nameInput: ", nameInput);
  };

  // (messageInput = document.querySelectorAll("input[name='user_message']")),
  // (emailInput = document.querySelectorAll("input[name='user_email']")),
  // (phoneInput = document.querySelectorAll("input[name='user_phone']"));
};

export default sendForm;
