// Models
const { Console } = require("../models/console.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createGame = catchAsync(async (req, res, next) => {
  const { name, company } = req.body;

  const newConsole = await Console.create({
    name,
    company,
  });

  res.status(201).json({
    status: "success",
    newConsole,
  });
});

const getAllConsoles = catchAsync(async (req, res, next) => {
  const consoles = await Console.findAll();

  res.status(200).json({
    status: "success",
    consoles,
  });
});

const updateConsole = catchAsync(async (req, res, next) => {
  const { name } = req.body;
  const { gameConsole } = req;

  await gameConsole.update({ name });
  res.status(204).json({ status: "success" });
});

const disableConsole = catchAsync(async (req, res, next) => {
  const { gameConsole } = req;

  await gameConsole.update({ status: "disable" });
  res.status(204).json({ status: "success" });
});

module.exports = {
  createGame,
  getAllConsoles,
  updateConsole,
  disableConsole,
};