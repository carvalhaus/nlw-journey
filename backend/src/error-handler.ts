import type { FastifyInstance } from "fastify";

type FastifyErrorHandler = FastifyInstance["errorHandler"];

export const errorHandler = (error: any, request: any, reply: any) => {
  console.log(error);

  return reply.status(500).send({ message: "Internal server error" });
};
