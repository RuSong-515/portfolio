  // Create object for the form
  // Set action attribute (post method)
  // Create form
const form = document.getElementById("form");
const createForm = document.createElement("form");
createForm.setAttribute("action", "http://formspree.io/zorasong@gmail.com");
createForm.setAttribute("method", "POST");
form.appendChild(createForm);
const closeBtn = document.createElement("span");
closeBtn.id = "closeBtn";


createForm.innerHTML = `
                <div class="formContent">
                <h2>Contact Me</h2>
                <input type="email" name="email" placeholder=" Your Email">
                <br>
                <input type="text" name="first name" value="" placeholder="First Name">
                <br>
                <textarea name="message" placeholder="Your Message"></textarea>
                <br>
                <button type="submit" class="submit">Send</button>
                </div>
               `;
closeBtn.innerHTML ="X";
createForm.appendChild(closeBtn);

const button = document.getElementById("contactBtn");
button.addEventListener("click", ()=> form.style.display = "block");

closeBtn.addEventListener("click", ()=> form.style.display = "none");
