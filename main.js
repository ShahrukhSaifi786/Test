/* const callbackBackFunction = () => {
  console.log("Callback Function is Called");
};
const higherOrderFun = (callbackBackFunction) => {
  callbackBackFunction();
};
higherOrderFun(callbackBackFunction);
 */

/* const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 1 Succesfully Resolved");
  }, 4000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 Succesfully Resolved");
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 3 Succesfully Resolved");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* const promise1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 Succesfully Resolved");
    }, 7000);
  });
};
const promise2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 Succesfully Resolved");
    }, 5000);
  });
};
const promise3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3 Succesfully Resolved");
    }, 3000);
  });
};

const asyncFun = async () => {
  const p1 = await promise1();
  const p2 = await promise2();
  const p3 = await promise3();
  console.log(p1);
  console.log(p2);
  console.log(p3);
 
};
asyncFun();
 */

/* const myPromise = new Promise((resolve, reject) => {
  reject(new Error("Promise Rejected"));
});
myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error.message);
  }); */
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//   } else if (this.readyState === 4) {
//     console.error("Request failed with status:", this.status);
//   }
// };

// xhr.send();

// for(let i = 0;i<5;i++){
//   if(i == 1){
//     break;
//   }
//   console.log(i);
// }

// const addBackground = document.querySelectorAll("button")[0];
// const removeBackground = document.querySelectorAll("button")[1];
// const container = document.querySelector("div");
// addBackground.addEventListener("click", () => {
//   container.classList.toggle("addbackground");
// });
// removeBackground.addEventListener("click", () => {
//   container.classList.remove("addbackground");
// });

// const arr = Array.from(set);
// const obj = arr.reduce((acc, value, index) => {
//   acc[index] = value;
//   return acc;
// }, {});
// console.log(obj);

/* Set Object example  */

/* const mySet = new Set();
mySet.add(1);
mySet.add("2");
mySet.add([1, 2, 3, 4, 5]);
mySet.add(function myFun(text) {
  console.log(text);
});
mySet.add({
  name: "John",
  age: 30,
});
const myArr = [...mySet];
const myObj = myArr.reduce((acc, value, index) => {
  acc[index] = value;
  return acc;
}, {});
console.log(myObj["3"]); */

/* const obj = {
  key1: "key1",
  key2: "key2",
  key3: "key3",
  key4: "key4",
};
function fun() {}
const arr = [];
const map = new Map();
Object.keys(obj).forEach((key) => {
  map.set(key, obj[key]);
});
map.set(2, "number key");
map.set(true, "boolean key");
map.set(obj, "Object keys");
map.set(fun, "function keys");
map.set(arr, "array keys");
map.set(null, "null keys");

console.log(map.entries()) */

/* function factoryFun(firstName, lastName, className, rollNumber) {
  return {
    firstName,
    lastName,
    className,
    rollNumber,
    myFunction: function () {
      console.log(this);
    },
  };
}
const obj1 = factoryFun("Shahrukh", "Khan", "12th", "210733106161");
obj1.myFunction.call(obj1); */

// function ConstructorFun(name, roll) {
//   this.name = name;
//   this.roll = roll;
// }
// ConstructorFun.prototype.myFunction = function () {
//   console.log(this);
// };

// const obj1 = new ConstructorFun("Shahrukh Khan", "124");
// obj1.myFunction();

// class myClass {
//   constructor(name, roll) {
//     this.name = name;
//     this.roll = roll;
//   }
//   set setMyName (name) {
//     this.name = name;
//   }
// }
// const obj2 = new myClass("Shahrukh Khan", "124");
// obj2.setMyName = "kalua bhai"
// console.log(obj2)

// for (let i = 0; i < 2000; i++) {
//   let checkLengthString = (Math.floor(Math.random() * 9000) + 1000).toString();
//   if (checkLengthString.length == 4) {
//     console.log(checkLengthString);
//   } else {
//     console.log("Not 4");
//   }
// }

/* Event Bubbling and Event Capturing */

/* const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
window.addEventListener("click", (e) => {
  console.log("window clicked");
});
document.addEventListener("click", (e) => {
  console.log("document clicked");
});
document.body.addEventListener("click", (e) => {
  console.log("body clicked");
});
green.addEventListener("click", (e) => {
  console.log("green clicked");
});
blue.addEventListener("click", (e) => {
  console.log("blue clicked");
});
red.addEventListener("click", (e) => {
  console.log("red clicked");
});
 */

/* Event Delegation in js  */

/* const button = document.querySelector("button");
const parent = document.querySelector(".container");
button.addEventListener("click", () => {
  if (parent) {
    const childDivElement = document.createElement("div");
    childDivElement.classList.add("card");
    parent.appendChild(childDivElement);
    // childDivElement.addEventListener("click", (e) => {
    //   e.target.remove();
    // });
  } else {
    console.error("Parent element not found");
  }
});

parent.addEventListener("click", (e) => {
  console.log(e.target)
  if (e.target.classList.contains("card")) {
    e.target.remove();
  }else{
    console.log('Not a card')
  }
}); */

// const li = document.querySelectorAll("li");
// li.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     console.log(e.target);
//   });
// });

// const ul = document.querySelector("ul");
// ul.addEventListener("click", (e) => {
//   if (e.target.classList.contains("list-item")) {
//     console.log(e.target.innerText);
//   }
// });

/* debouncing concept */

/* const input = document.querySelector("input");
const debounceFun = (fun, delay) => {
  let timer;
  return (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun(e);
    }, delay);
  };
};
const handleInput = (e) => {
  const query = e.target.value;
  console.log(query);
};
input.addEventListener("input", debounceFun(handleInput, 500)); */

/* throatlling */

/* const button = document.querySelector("button");
const throttlingFun = (fun, delay) => {
  let lastTime = 0;
  return (e) => {
    const newTime = new Date().getTime();
    if (newTime - lastTime < delay) return;
    lastTime = newTime;
    return fun(e);
  };
};
const handleButton = (e) => {
  console.log("button clicked");
};
button.addEventListener("mousemove", throttlingFun(handleButton, 500));
button.addEventListener("mousemove", handleButton);
window.addEventListener("resize", throttlingFun(handleButton, 500));
window.addEventListener("resize", handleButton); */

/* const button = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

function createTodoElement(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "edit-btn";

  li.appendChild(editButton);
  li.appendChild(deleteButton);
  ul.appendChild(li);
}

function deleteTodoElement(element) {
  element.parentElement.remove();
}

function editTodoElement(element) {
  const newText = prompt("Enter a New Text", element.textContent);
  if (newText && newText.trim() !== "") {
    element.textContent = newText;
  }
}

button.addEventListener("click", () => {
  const trimmedValue = input.value.trim();
  if (trimmedValue) {
    createTodoElement(trimmedValue);
    input.value = "";
  } else {
    alert("Enter the todo");
  }
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const trimmedValue = input.value.trim();
    if (trimmedValue) {
      createTodoElement(trimmedValue);
      input.value = "";
    }
  }
});

ul.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("delete-btn")) {
    deleteTodoElement(target);
  } else if (target.classList.contains("edit-btn")) {
    editTodoElement(target.previousSibling);
  }
});
 */

const button = document.querySelector("button");
const todoContainer = document.querySelector("ul");
const input = document.querySelector("input");

const createTodoElement = (text) => {
  const li = document.createElement("li");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.textContent = "Delete";

  const editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  editButton.textContent = "edit";

  li.textContent = text;
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  todoContainer.appendChild(li);
  input.value = "";
};

const deleteTodoElement = (target) => {
  target.parentElement.remove();
};

const editTodoElement = (element) => {
  const newElement = prompt("Enter a New Text", element.textContent);
  if (newElement && newElement.trim() !== "") {
    element.textContent = newElement;
  }
};

button.addEventListener("click", (e) => {
  const trimmedValue = input.value.trim();
  if (trimmedValue) {
    createTodoElement(trimmedValue);
    input.value = "";
  } else {
    alert("Please enter a valid todo item");
  }
});

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    const trimmedValue = input.value.trim();
    if (trimmedValue) {
      createTodoElement(trimmedValue);
      input.value = "";
    }
  }
});

todoContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("delete-btn")) {
    deleteTodoElement(target);
  } else if (target.classList.contains("edit-btn")) {
    editTodoElement(target.previousSibling);
  }
});
