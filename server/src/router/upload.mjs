import { request, response, Router } from "express";
import upload from "../utils/upload.mjs";
import File from "../model/file.mjs";

const router = Router();

router.post("/upload", upload.single("file"), async (request, response) => {
  const fileObj = {
    path: request.file.path,
    name: request.file.originalname,
  };

  try {
    const file = await File.create(fileObj);
    return response
      .status(200)
      .send({ path: `http://localhost:3000/file/${file._id}` });
  } catch (error) {
    return response.status(500).send({ erro: error.message });
  }
});

router.get("/file/:fileId", async (request, response) => {
  try {
    const file = await File.findById(request.params.fileId);

    file.downloadContend++;
    await file.save();

    return response.download(file.path, file.name);
  } catch (error) {
    return response.status(200).send({ error: error.message });
  }
});

export default router;
