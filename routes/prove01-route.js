const users = ["Apple", "Microsoft", "Facebook", "Adobe", "Linkedin"];
exports.home = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Welcome</title></head>");
  res.write("<body>");
  res.write("<h1>Welcome User in the Backend World </h1>");
  res.write(
    "<form action='/create_user' method='POST'> <input type='text' placeholder='username' name='username' > <button type='submit'>Create Username</button></form>"
  );
  res.write("</body>");
  res.write("</html>");
  return res.end();
};

exports.users = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Users</title></head>");
  res.write("<body>");
  res.write("<ul>");

  res.write("<h4> Here are the list of Users</h4>");
  users.forEach((user) => {
    res.write(`<li>${user}</li>`);
  });
  res.write("</ul>");

  res.write("</body>");
  res.write("</html>");
  return res.end(); // Return so you don't execute remaining code outs
};

exports.create_user = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });
  return req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const user = parsedBody.split("=")[1].trim();

    console.log(`Username:${user.trim()}`);

    users.push(user);
    res.writeHead(302, { Location: "users" });
    res.end();
  });
};
