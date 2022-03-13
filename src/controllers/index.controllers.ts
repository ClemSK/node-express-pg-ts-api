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

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  //   console.log('The request body is: ', req.body);
  const { name, email } = req.body;
  console.log(name, email);
  const response: QueryResult = await pool.query(
    'INSERT INTO users (name, email) VALUES($1, $2)',
    [name, email]
  );
  return res.json({
    message: 'User created successfully.',
    body: {
      user: {
        name,
        email,
      },
    },
  });
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
    name,
    email,
    id,
  ]);
  return res.json(`User ${id} updated successfully`);
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  //   console.log(req.body.id);
  const id = parseInt(req.params.id);
  await pool.query('DELETE FROM users WHERE id = $1', [id]);
  return res.json(`User ${id} deleted successfully`);
};
