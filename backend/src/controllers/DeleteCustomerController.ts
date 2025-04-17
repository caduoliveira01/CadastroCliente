import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomeService } from "../services/DeleteCustomerService";

class DeleteCustomeController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const customerService = new DeleteCustomeService();

    const customer = await customerService.execute({ id });

    reply.send(customer);
  }
}

export { DeleteCustomeController };
