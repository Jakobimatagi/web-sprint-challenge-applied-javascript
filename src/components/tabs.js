const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // create elements
  const divTopics = document.createElement("div");
  const divTabone = document.createElement("div");
  const divTabtwo = document.createElement("div");
  const divTabthree = document.createElement("div");

  // add classes
  divTopics.classList.add("topics");
  divTabone.classList.add("tab");
  divTabtwo.classList.add("tab");
  divTabthree.classList.add("tab");

  // append elements

  divTopics.appendChild(divTabone);
  divTopics.appendChild(divTabtwo);
  divTopics.appendChild(divTabthree);

  // text content

  divTabone.textContent = topics[0];
  divTabtwo.textContent = topics[1];
  divTabthree.textContent = topics[2];

  document.querySelector('.topics').appendChild(divTopics);
  return divTopics;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
};

export { Tabs, tabsAppender };
