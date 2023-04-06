import { NextApiRequest, NextApiResponse } from "next";
import {PrismaClient}  from '@prisma/client'
const prisma = new PrismaClient

const login =  async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "POST"){
        const body = JSON.parse(req.body)
        // console.log(body)
        // res.status(200).json(body)

        const data = await prisma.user.findMany(
            
        )

    
    }

}

export default login