import { Request, Response } from 'express';
import { getFileSrv, postFileSrv, putFileSrv } from '../services/fileServ';


export async function getFileCtrl(_req: Request, res: Response) {
  try {
    const files = await getFileSrv();
    res.status(200).json({ data: files });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error', err: err
    });
  }
}

export const fileById = (_req: Request, res: Response) => {
  res.send('file');
};

export async function postFileCtrl(req: Request, res: Response) {
  if (!req.body) {
    throw console.error('There is no request')
  };

  try {
    const file = req.body;
    const newFile = await postFileSrv(file)
    res.status(200).json({ data: newFile });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error', err: err
    });
  }
};

export async function putFileCtrl(req: Request, res: Response) {
  if (!req.body) {
    throw console.error('There is no request')
  };

  try {
    const file = req.body;
    const putFile = await putFileSrv(file)
    res.status(200).json({ data: putFile });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error', err: err
    });
  }
};
