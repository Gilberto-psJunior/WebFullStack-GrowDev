import express from "express";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());

const users = [];
const messages = [];
//User Tasks
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const checkEmail = users.find((user) => user.email === email);

  if (checkEmail) {
    return res.status(400).json({
      message: "E-mail alredy exist",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: uuidv4(),
    name,
    email,
    password: hashedPassword,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created ",
    user: newUser,
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);

  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    return res.status(400).json({
      message: " password or email invalid",
    });
  }

  if (!user) {
    return res.status(404).json({
      message: "Not find user",
    });
  }

  res.json({
    message: "Login successful",
    token: user.id,
  });
});
//Messages tasks
app.post("/messages", (req, res) => {
  const { title, description, userId } = req.body;

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const newMessage = {
    id: uuidv4(),
    title,
    description,
    userId,
  };

  messages.push(newMessage);

  res.status(201).json({
    message: "Message created successfully",
    newMessage,
  });
});

app.get("/messages/:userId", (req, res) => {
  const { userId } = req.params;

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const usersMessages = messages.filter((message) => message.userId === userId);

  res.json(usersMessages);
});

app.put("/messages/:messageId", (req, res) => {
  const { messageId } = req.params;
  const { title, description } = req.body;

  const messageIndex = messages.findIndex(
    (message) => message.id === messageId
  );
  if (messageIndex === -1) {
    return res.status(404).json({
      message: "Message not found",
    });
  }

  messages[messageIndex].title = title;
  messages[messageIndex].description = description;

  res.json({
    message: "message updated successfully",
  });
});

app.delete("/messages/:messageId", (req, res) => {
  const { messageId } = req.params;

  const messageIndex = messages.findIndex(
    (message) => message.id === messageId
  );
  if (messageIndex === -1) {
    return res.status(404).json({
      message: "message not found",
    });
  }

  const deletedMessage = messages.splice(messageIndex, 1);

  res.json({
    message: "message deleted successfully",
    deletedMessage,
  });
});

app.listen(8080, () => console.log("Servidor Inicializado!"));
