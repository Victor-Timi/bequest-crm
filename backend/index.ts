import express from "express";
import prisma from "./lib/prisma";

async function main() {
  const app = express();

  const test = await prisma.test.create({
    data: {
      title: "test title",
      body: "test body",
    },
  });
  console.log(test);

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// main();
