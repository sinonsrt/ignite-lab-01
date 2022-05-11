import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { PurchaseCreatedPayload } from './DTO/purchaseController';

@Controller()
export class PurchasesController {
  @EventPattern('purchases.new-purchase')
  async purchaseCreated(@Payload('value') payload: PurchaseCreatedPayload) {
    console.log({ payload });
  }
}
