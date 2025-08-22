
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const age = document.querySelector('input[name="age"]').value;
  const position = document.querySelector('input[name="position"]').value;

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
  <h3>Entered Details</h3>
  <table border="1" cellpadding="5">
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Position</th>
    </tr>
    <tr>
      <td>${username}</td>
      <td>${age}</td>
      <td>${position}</td>
    </tr>
  </table>
  `;
    });
