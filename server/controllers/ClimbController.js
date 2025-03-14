import asyncHandler from 'express-async-handler';
import PrismaClient from '../database/PrismaClient.js';
import { ApiException } from '../errors/ApiErrors.js';
import { isPrismaError } from '../utils/prismaUtils.js';
import { uploadFile } from '../utils/cloudinary.js';
import { v2 as cloudinary } from 'cloudinary';

const getClimbsForUser = asyncHandler(async (req, res) => {
  const climbs = await PrismaClient.climb.findMany({
    where: {
      userId: req.user.id,
    },
    include: {
      notes: true,
    },
  });

  res.status(200).json({
    climbs,
  });
});

const createClimb = asyncHandler(async (req, res) => {
  const { grade, location, completed } = req.body;
  const { file } = req;
  const imageInfo = await uploadFile(file.buffer);

  const transformedImageUrl = cloudinary.url(imageInfo.public_id, {
    width: 1000,
    height: 667,
    crop: 'fill',
    quality: 'auto',
  });

  const climb = await PrismaClient.climb.create({
    data: {
      grade: grade,
      location: location,
      completed: completed,
      imageUrl: transformedImageUrl,
      user: {
        connect: {
          id: req.user.id,
        },
      },
    },
  });

  res.status(201).json({
    climb,
  });
});

const getClimb = asyncHandler(async (req, res) => {
  const { climbId } = req.params;

  const climb = await PrismaClient.climb.findUnique({
    where: {
      id: climbId,
      userId: req.user.id,
    },
  });

  if (!climb) {
    res.status(404);
    throw new ApiException('Climb not found', 404);
  }

  return res.status(200).json({ climb });
});

const deleteClimb = asyncHandler(async (req, res) => {
  let { climbId } = req.params;

  try {
    await PrismaClient.climb.delete({
      where: {
        id: climbId,
        userId: req.user.id,
      },
    });
    return res.status(204).end();
  } catch (e) {
    if (isPrismaError(e, 'P2025')) {
      res.status(404);
      throw new ApiException('Climb not found', 404);
    } else {
      res.status(500);
      throw new ApiException('Something went wrong', 500);
    }
  }
});

const updateClimb = asyncHandler(async (req, res) => {
  let { climbId } = req.params;
  const { grade, location, completed } = req.body;

  const updateData = {};
  if (grade) {
    updateData.grade = grade;
  }

  if (location) {
    updateData.location = location;
  }

  if (completed) {
    updateData.completed = completed;
  }

  try {
    await PrismaClient.climb.update({
      where: {
        id: climbId,
        userId: req.user.id,
      },
      data: {
        ...updateData,
      },
    });
  } catch (e) {
    if (isPrismaError(e, 'P2025')) {
      res.status(404);
      throw new ApiException('Climb not found', 404);
    } else {
      res.status(500);
      throw new ApiException('Something went wrong', 500);
    }
  }

  return res.status(204).end();
});

export { createClimb, getClimbsForUser, getClimb, updateClimb, deleteClimb };
