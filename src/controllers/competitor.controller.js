import Competitor from "../models/Competitor.js";

export const createCompetitor = async (req, res) => {
  try {
    const competitor = await Competitor.create({
      ...req.body,
      createdBy: req.user.id,
    });
    res.status(201).json(competitor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getCompetitors = async (req, res) => {
  const competitors = await Competitor.find({ createdBy: req.user.id });
  res.json(competitors);
};

export const getCompetitorById = async (req, res) => {
  const competitor = await Competitor.findById(req.params.id);
  if (!competitor) return res.status(404).json({ message: "Not found" });
  res.json(competitor);
};

export const updateCompetitor = async (req, res) => {
  const competitor = await Competitor.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(competitor);
};

export const deleteCompetitor = async (req, res) => {
  await Competitor.findByIdAndDelete(req.params.id);
  res.json({ message: "Competitor deleted" });
};
