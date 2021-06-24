const sendForm = (form) => {
  const popUp = form.closest("div[id]"),
    errorMessage = "Что-то пошло не так...",
    loadMessage = "Отправка...",
    successMessage = "Спасибо! Мы скоро с Вами свяжемся!",
    sendBtn = form.querySelector("input[type='checkbox']");

  const formContent = form.parentNode;
  console.log("popUp: ", popUp);
  //console.log("form: ", form);

  const statusMessage = document.createElement("div");
  statusMessage.style.cssText = "font-size: 2rem;";
  statusMessage.style.color = "white";

  // statusMessage.style.alignItems = "center";
  // statusMessage.style.justifyContent = "center";
  console.log("sendBtn.checked: ", sendBtn.checked);

  // if (form.id === "form3") {
  //   statusMessage.style.color = "white";
  // }
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    //console.log("formData: ", formData);
    let body = {};

    // for (const val of formData.entries) {
    //   body[val[0]] = val[1]
    // }
    formData.forEach((val, key) => {
      body[key] = val;
      //console.log("key: " + key + " val: " + val);
    });

    if (body["name"].length < 2) {
      alert("Имя должно содержать от 2 до 30 символов");
      return;
    } else if (body["phone"].length < 7 || body["phone"].length > 12) {
      alert(
        "Номер телефона должен содержать от 7 до 12 символов с учетом плюса!"
      );
      return;
    } else if (!sendBtn.checked) {
      //console.log("sendBtn.checked: ", sendBtn.checked);
      alert("Вы должны дать согласие на обработку персональных данных!");
      return;
    } else {
      statusMessage.textContent = loadMessage;
      formContent.appendChild(statusMessage);
    }

    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("status network not 200");
        }
        //console.log("response: ", response);
        statusMessage.textContent = successMessage;
        //console.log("statusMessage: ", statusMessage);
        form.style.display = "none";
        statusMessage.style.marginTop = "30%";
        setTimeout(() => {
          clearForm();
          popUp.style.display = "none";
        }, 3000);
      })
      .catch(() => {
        //console.log(errorMessage);
        statusMessage.textContent = errorMessage;
        form.style.display = "none";
        statusMessage.style.marginTop = "30%";
        setTimeout(() => {
          popUp.style.display = "none";
        }, 3000);
      });

    //clearForm();
  });

  const postData = (data) => {
    //console.log(data);
    return fetch("../../server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const clearForm = () => {
    const nameInput = form.querySelector("input[name='name']"),
      emailInput = form.querySelector("input[name='email']"),
      messageInput = form.querySelector("input[name='message']"),
      phoneInput = form.querySelector("input[name='phone']"),
      sendBtn = form.querySelector("input[type='checkbox']");
    //console.log("sendBtn.value: ", sendBtn.checked);
    //console.log("phoneInput: ", phoneInput.value);
    statusMessage.style.marginTop = "0";
    form.style.display = "block";
    nameInput.value = "";
    sendBtn.checked = false;
    if (emailInput) {
      emailInput.value = "";
    }
    phoneInput.value = "";
    if (messageInput) {
      messageInput.value = "";
    }

    const child = formContent.getElementsByTagName("div");
    //console.log("form: ", form);

    //console.log("child: ", child);
    formContent.removeChild(child[0]);
    // console.log("statusMessage: ", statusMessage);
    //console.log("nameInput: ", nameInput);
  };

  // (messageInput = document.querySelectorAll("input[name='user_message']")),
  // (emailInput = document.querySelectorAll("input[name='user_email']")),
  // (phoneInput = document.querySelectorAll("input[name='user_phone']"));
};

export default sendForm;
