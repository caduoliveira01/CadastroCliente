import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService";

class ListCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomeService = new ListCustomersService();

    const customers = await listCustomeService.execute();

    reply.send(customers);
  }
}
export { ListCustomersController };
