import { Request, Response } from 'express';
import { getFormSrv, postFormSrv, putFormSrv } from '../services/formServ';


export async function getFormCtrl(_req: Request, res: Response) {
  try {
    const forms = await getFormSrv();
    res.status(200).json({ data: forms });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error', err: err
    });
  }
}

export const formById = (_req: Request, res: Response) => {
  res.send('form');
};

export async function postFormCtrl(req: Request, res: Response) {
  if (!req.body) {
    throw console.error('There is no request')
  };

  try {
    const form = req.body;
    const newForm = await postFormSrv(form)
    res.status(200).json({ data: newForm });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error', err: err
    });
  }
};

export async function putFormCtrl(req: Request, res: Response) {
  if (!req.body) {
    throw console.error('There is no request')
  };

  try {
    const form = req.body;
    const putForm = await putFormSrv(form)
    res.status(200).json({ data: putForm });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error', err: err
    });
  }
};
