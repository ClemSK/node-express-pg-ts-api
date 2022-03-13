import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool } from '../database';

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult<any> = await pool.query('SELECT * FROM users');
    //   console.log(response.rows);
    return res.status(200).json(response.rows);
  } catch (err) {
    console.log('err', err);
    return res.status(500).json('Internal Server Error');
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  //   console.log(req.params.id);
  //   res.send('received')
  const id = parseInt(req.params.id);
  const response: QueryResult = await pool.query(
    'SELECT * FROM users WHERE id = $1',
    [id]
  );
  return res.json(response.rows);
};

export const createUser = (req: Request, res: Response): Promise<Response> => {
  console.log('The request body is: ', req.body);
  //   const { name, email } = req.body;
  //   console.log(name, email);
  res.send('received');
};

// export const updateUser = (req: Request, res: Response): Promise<Response> => {

// }

// export const deleteUser = (req: Request, res: Response): Promise<Response> => {

// }
