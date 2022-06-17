import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<unknown> {
  const response = await fetch(`http://${req.headers.host}${req.query.path}`)

  res.writeHead(response.status, { headers: response.headers })

  return response.body.pipe(res)
}
