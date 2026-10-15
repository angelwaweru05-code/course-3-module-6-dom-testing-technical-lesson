// Your code here!
const button = document.getElementById("add-item");
const list = document.getElementById("item-list");
function addItem() {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.appendChild(newItem);
}
button.addEventListener("click", addItem);

/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

beforeAll(() => {
   document.body.innerHTML = html;

   // Load and run the script once
   require("../index.js");

   // Fire DOMContentLoaded once so the event listener gets attached
   document.dispatchEvent(new Event("DOMContentLoaded"));
});

beforeEach(() => {
   // Clear the list before each test
   document.getElementById("item-list").innerHTML = "";
});

describe("Add Item Button", () => {
   test("adds a new <li> with 'New Item' when the button is clicked", () => {
      // grab add item button and list where items are displayed
      const button = document.getElementById("add-item");
      const list = document.getElementById("item-list");

      // check the list is initially empty
      expect(list.children.length).toBe(0);

      // simulate a button click event
      button.click();

      // get all items in the item list and verify the count and text
      const items = list.querySelectorAll("li");
      expect(items.length).toBe(1);
      expect(items[0].textContent).toBe("New Item");
   });
});