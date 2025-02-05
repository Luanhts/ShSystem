import Router from "express";

import * as caixaController from "../controllers/caixaController.js";

const router = Router();

router.get("/", caixaController.getAllCaixas);
router.get("/:id", caixaController.getCaixaById);
router.post("/", caixaController.createCaixa);
router.put("/:id", caixaController.updateCaixa);
router.delete("/:id", caixaController.removeCaixa);

export default router;
